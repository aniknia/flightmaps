import Map from './Map'
import NavBar from './NavBar'
import RoutesProvider from './RoutesProvider'

// TODO: make favicon blue for visibility on light and dark mode browsers

export default function Main() {
    return (
        <div>
            <RoutesProvider>
                <NavBar />
                <Map />
            </RoutesProvider>
        </div>
    )
}