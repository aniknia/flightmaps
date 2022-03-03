import { createContext, useState } from 'react'

export const Routes = createContext({
    routes: [],
    addRoute: () => {},
    removeRoute: () => {}
});

export default function RoutesProvider(props) {
    const [routes, setRoutes] = useState([]);

    function addRoute(route) {
        let existsFlag = false;
        routes.forEach((item) => {
            if(item.start === route.start && item.end === route.end) {
                existsFlag = true;
                return true;
            }
        })
        if (existsFlag === false) {
            setRoutes([...routes, route]);
            console.log("route was added to provider")
        }
    }

    function removeRoute(route) {
        let existsFlag = false;
        let i = 0;
        routes.forEach((item) => {
            if(item.start === route.start && item.end === route.end) {
                existsFlag = true;
                return true;
            }
            i++;
        })
        if (existsFlag === true) {
            console.log(i)
            let temp = [...routes];
            temp.splice(i, 1);
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