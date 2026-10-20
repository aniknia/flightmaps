// JavaScript port of the flightmaps-back API (flightmapper_function.py).
// Responses keep the same shape the API returned.

// Map limits of the Kavraiskiy VII map image, in pixels
const west = [5, 592];
const east = [2045, 592];
const north = [1025, 3];
const south = [1025, 1181];
const maplims = [west[0], east[0], north[1], south[1]];

const trajectoryDensity = 1000;

// airports.json rows are [IATA, ICAO, Latitude, Longitude], from airports.csv.
// Loaded on first use so it stays out of the main bundle.
let airports;

async function loadAirports() {
    if (!airports) {
        const rows = (await import('./airports.json')).default;
        airports = { iata: new Map(), icao: new Map() };
        rows.forEach(([iata, icao, lat, long]) => {
            if (iata) airports.iata.set(iata, [lat, long]);
            airports.icao.set(icao, [lat, long]);
        });
    }
    return airports;
}

const radians = deg => deg * Math.PI / 180;

async function airportSearch(airportCode) {
    // Grabs latitude and longitude of airport
    const { iata, icao } = await loadAirports();
    airportCode = airportCode.toUpperCase();
    const entry = airportCode.length === 3 ? iata.get(airportCode) : icao.get(airportCode);
    return entry || false;
}

function greatCircle(start, stop) {
    // Grabbing coordinate pairs
    const [lat1, long1] = start;
    const [lat2, long2] = stop;

    const d = Math.acos(
        Math.sin(radians(lat1)) * Math.sin(radians(lat2))
        + Math.cos(radians(lat1))
        * Math.cos(radians(lat2))
        * Math.cos(radians(long1 - long2))
    );

    const latitude = [];
    const longitude = [];
    for (let i = 0; i < trajectoryDensity; i++) {
        const f = i / (trajectoryDensity - 1);
        const A = Math.sin(radians((1 - f) * d)) / Math.sin(radians(d));
        const B = Math.sin(radians(f * d)) / Math.sin(radians(d));

        const x = A * Math.cos(radians(lat1)) * Math.cos(radians(long1))
            + B * Math.cos(radians(lat2)) * Math.cos(radians(long2));
        const y = A * Math.cos(radians(lat1)) * Math.sin(radians(long1))
            + B * Math.cos(radians(lat2)) * Math.sin(radians(long2));
        const z = A * Math.sin(radians(lat1)) + B * Math.sin(radians(lat2));

        latitude.push(Math.atan2(z, Math.sqrt(x ** 2 + y ** 2)));
        longitude.push(Math.atan2(y, x));
    }

    return { trajraw: { latitude, longitude }, d };
}

function kavraiskiyVii(trajkrav) {
    // Converts [latitude, longitude] in radians to Kavraiskiy VII (x, y),
    // scaled to unit values.
    const longitude = trajkrav.longitude.map((long, i) =>
        (3 * long / 2)
        * Math.sqrt((1 / 3) - (trajkrav.latitude[i] / Math.PI) ** 2)
        * (2 / (Math.sqrt(3) * Math.PI))
    );
    const latitude = trajkrav.latitude.map(lat => (-1) * lat / (Math.PI / 2));
    return { latitude, longitude };
}

function scaler(trajxy) {
    // Finding map bounds
    const width = (maplims[1] - maplims[0]) / 2;
    const height = (maplims[3] - maplims[2]) / 2;

    const zerolong = maplims[0] + width;
    const zerolat = maplims[2] + height;

    // Scaling points to world map
    return {
        latitude: trajxy.latitude.map(y => zerolat + (height * y)),
        longitude: trajxy.longitude.map(x => zerolong + (width * x)),
    };
}

async function main(route) {
    const start = await airportSearch(route[0]);
    const end = await airportSearch(route[1]);
    if (start && end) {
        // trajectory in degrees lat/long
        const { trajraw, d } = greatCircle(start, end);

        // trajectory in x/y (scaled to unit values)
        const trajxy = kavraiskiyVii(trajraw);

        // trajectory in pixels (scaled to map limits)
        const trajsc = scaler(trajxy);

        const distance = d * 6365;
        const time = distance / 920;
        const carbon = time * 92;

        // The API could not serialize NaN (e.g. same start and end airport),
        // so the request failed; fail the same way here.
        if (!Number.isFinite(distance) || trajsc.longitude.some(Number.isNaN)) {
            throw new Error("could not compute route " + route[0] + " to " + route[1]);
        }

        return {
            x: trajsc.longitude,
            y: trajsc.latitude,
            distance: distance,
            time: time,
            carbon: carbon,
        };
    }
    return false;
}

// Replaces GET /check-code/{check_code}
export async function checkCode(code) {
    if (await airportSearch(code) !== false) {
        return { check_code: true };
    }
    return { check_code: false };
}

// Replaces GET /get-route/{route_start}/{route_end}
export async function getRoute(routeStart, routeEnd) {
    const route = await main([routeStart, routeEnd]);
    if (route) {
        return { error: false, ...route };
    }
    return { error: true };
}
