import NavHead from './NavHead'
import CodeInput from './CodeInput'
import FlightList from './FlightList'
import Credit from './Credit'

export default function Nav() {
    return (
       <nav>
           <NavHead />
           <CodeInput />
           <FlightList />
           <Credit />
       </nav> 
    )
}