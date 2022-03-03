import { createContext, useState } from 'react'

export const Routes = createContext({
    routes: [],
    addRoute: () => {},
    removeRoute: () => {}
});

export default function RoutesProvider(props) {
    const [routes, setRoutes] = useState([]);

    function addRoute(route) {
        if (routes.indexOf(route) === -1){
            setRoutes([...routes, route]);
            console.log("route was added to provider")
        }
    }

    function removeRoute(route) {
        if (routes.indexOf(route)) {
            routes.splice(routes.indexOf(route));
            console.log("route was removed from provider")
        }
    }

    return (
        <Routes.Provider value={{routes: routes, addRoute: addRoute, removeRoute: removeRoute}}>
            {props.children}
        </Routes.Provider>
    )
}