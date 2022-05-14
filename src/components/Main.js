import Map from './Map'
import Nav from './Nav'
import RoutesProvider from './RoutesProvider'

// TODO: make favicon blue for visibility on light and dark mode browsers

export default function Main() {
    return (
        <div>
            <RoutesProvider>
                <Map />
                <Nav />
            </RoutesProvider>
        </div>
    )
}