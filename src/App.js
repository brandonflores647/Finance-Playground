import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Balance from './components/Balance';
import HistoryTransaction from './components/HistoryTransaction';

function App() {

  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');

  const [transList, ] = useState([]);

  const handleNewTransaction = (e) => {
    e.preventDefault();
    transList.unshift({
      title,
      amount: parseInt(amount, 10)
    });
    setTitle('');
    setAmount(0);
  }

  return (
    <Switch>
      <Route exact path='/'>
        <h1>Home</h1>
      </Route>
      <Route exact path='/expense-tracker'>
        <h1>Expense Tracker</h1>

        <Balance bal={balance} income={income} expense={expense}/>

        <form onSubmit={handleNewTransaction}>
          <label>
            Title
            <input
              type='text'
              placeholder='Enter title ...'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Amount
            <input
              type='number'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>

        <HistoryTransaction list={transList}/>
      </Route>
      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
