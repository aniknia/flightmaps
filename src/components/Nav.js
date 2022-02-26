import NavHead from './NavHead'
import CodeInput from './CodeInput'
import FlightList from './FlightList'

export default function Nav() {
    return (
       <nav>
           <NavHead />
           <CodeInput />
           <FlightList />
       </nav> 
    )
}