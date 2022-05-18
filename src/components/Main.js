import NavBar from './NavBar'
import RoutesProvider from './RoutesProvider'
import Window from './Window'

// TODO: make favicon blue for visibility on light and dark mode browsers

export default function Main() {
    return (
        <div>
            <RoutesProvider>
                <NavBar />
                <Window />
            </RoutesProvider>
        </div>
    )
}