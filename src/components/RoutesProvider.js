import { createContext, useState } from 'react'

export const Routes = createContext({
    routes: [],
    addRoute: () => {},
    removeRoute: () => {}
});

export default function RoutesProvider(props) {
    const [routes, setRoutes] = useState([]);
    const [error, setError] = useState(false);

    function addRoute(route) {
        let existsFlag = false;
        routes.forEach((item) => {
            if(item.start === route.start && item.end === route.end) {
                existsFlag = true;
                return true;
            }
        })
        if (existsFlag === false) {
            if (error === false) {
                route = unify_route(route);
                setRoutes([...routes, route]);
                console.log("route was added to provider")
            } else {
                console.log("something went wrong")
            }
            
        }
    }

    function removeRoute(route) {
        let existsFlag = false;
        let i = 0;
        let val = 0;
        routes.forEach((item) => {
            if(item.start === route.start && item.end === route.end) {
                existsFlag = true;
                val = i;
                return true;
            }
            i++;
        })
        if (existsFlag === true) {
            console.log(val)
            let temp = [...routes];
            temp.splice(val, 1);
            if (temp.length === 0) {
                setRoutes([]);
            }
            else {
                setRoutes(temp);
            }
            console.log("route was removed from provider")
        }
    }

    function unify_route(route) {
        route = find_coordinates(route);
        route = find_time(route);
        route = find_distance(route);
        route = find_carbon(route);
        return route
    }

    function find_coordinates(route) {
        fetch(process.env.REACT_APP_API_HOST + "/v1/get-route/" + route.start + "/" + route.end)
            .then(response => response.json())
            .then(data => {
                if (data["error"] === true) {
                    setError(true);
                    console.log("something went wrong");
                } else {
                    setError(false);
                    route.x = data["x"];
                    route.y = data["y"]
                    console.log("coordinates were saved");
                }
            })
        return route;
    }
    function find_time(route) {
        fetch(process.env.REACT_APP_API_HOST + "/v1/get-time/" + route.start + "/" + route.end)
            .then(response => response.json())
            .then(data => {
                if (data["error"] === true) {
                    setError(true);
                    console.log("something went wrong");
                } else {
                    setError(false);
                    route.time = data["time"];
                    console.log("time was saved");
                }
            })
        return route;
    }
    function find_distance(route) {
        fetch(process.env.REACT_APP_API_HOST + "/v1/get-distance/" + route.start + "/" + route.end)
            .then(response => response.json())
            .then(data => {
                if (data["error"] === true) {
                    setError(true);
                    console.log("something went wrong");
                } else {
                    setError(false);
                    route.distance = data["distance"];
                    console.log("distance was saved");
                }
            })
        return route;
    }
    function find_carbon(route) {
        fetch(process.env.REACT_APP_API_HOST + "/v1/get-carbon/" + route.start + "/" + route.end)
            .then(response => response.json())
            .then(data => {
                if (data["error"] === true) {
                    setError(true);
                    console.log("something went wrong");
                } else {
                    setError(false);
                    route.carbon = data["carbon"];
                    console.log("carbon footprint was saved");
                }
            })
        return route;
    }
    return (
        <Routes.Provider value={{routes: routes, addRoute: addRoute, removeRoute: removeRoute}}>
            {props.children}
        </Routes.Provider>
    )
}