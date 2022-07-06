import { Switch, Route, Redirect } from 'react-router-dom';

import Balance from './components/Balance';

function App() {
  let balance = 0;
  let income = 0;
  let expense = 0;
  return (
    <Switch>
      <Route exact path='/'>
        <h1>Home</h1>
      </Route>
      <Route exact path='/expense-tracker'>
        <h1>Expense Tracker</h1>
        <Balance bal={balance} income={income} expense={expense}/>
      </Route>
      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
