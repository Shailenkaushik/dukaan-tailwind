
import RevenueCard from './components/RevenueCard'
import './App.css'

export default  function App() {
 

  return (
    <div className='grid grid-cols-3' >
    <RevenueCard title={"Amount Pending"} orderCount={"15"}  ></RevenueCard>
    </div>
  )
}

