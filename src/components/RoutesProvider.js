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
                fetch(process.env.REACT_APP_API_HOST + "/v1/get-route/" + route.start + "/" + route.end)
                .then(response => response.json())
                .then(data => {
                    if (data["error"] === true) {
                        setError(true);
                        console.log("something went wrong");
                    } else {
                        setError(false);
                        route.x = data["x"];
                        route.y = data["y"];
                        route.time = data["time"];
                        route.distance = data["distance"];
                        route.carbon = data["carbon"];
                        setRoutes([...routes, route])
                        console.log("route was added to provider")
                    }
                })
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

    return (
        <Routes.Provider value={{routes: routes, addRoute: addRoute, removeRoute: removeRoute}}>
            {props.children}
        </Routes.Provider>
    )
}