import './App.css'
import Table from './components/Table/Table';

const App = () =>{
  const netIncomes = [{brand: 'McDonalds', income: 1291283}, {brand: 'Burger King', income: 1927361}, {brand: 'KFC', income: 1098463}];
  const netIncomesAverage = Math.round(netIncomes.reduce((total, restaurant) =>{return total += restaurant.income / netIncomes.length}, 0))
  return(
    <>
      <Table netIncomes={netIncomes}/>
      <p>Average net income: ${netIncomesAverage}</p>
    </>
  )
}

export default App