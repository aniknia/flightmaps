import Map from './Map'
import Nav from './Nav'
import RoutesProvider from './RoutesProvider'

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