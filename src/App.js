import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Balance from './components/Balance';
import CompoundInterestForm from './components/CompoundInterestForm';
import HistoryTransaction from './components/HistoryTransaction';
import Navbar from './components/Navbar';

import './css/ExpenseForm.css'

function App() {

  let [balance, setBalance] = useState(0);
  let [income, setIncome] = useState(0);
  let [expense, setExpense] = useState(0);
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');

  const [transList, setTransList] = useState([]);

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('expense-history'));
    if (storage) {
      setBalance(storage.balance);
      setIncome(storage.income);
      setExpense(storage.expense);
      setTransList(storage.transList);
    }
  }, [])

  const handleNewTransaction = async (e) => {
    e.preventDefault();
    if (title && amount) {
      transList.unshift({
        title,
        amount: parseFloat(amount, 10),
      });
      setBalance(balance += parseFloat(amount, 10));
      if (amount > 0) {
        setIncome(income += parseFloat(amount, 10));
      } else {
        setExpense(expense += parseFloat(amount, 10));
      }
      setTitle('');
      setAmount(0);

      const obj = {
        balance: Math.round((balance + Number.EPSILON)*100)/100,
        income: Math.round((income + Number.EPSILON)*100)/100,
        expense: Math.round((expense + Number.EPSILON)*100)/100,
        transList
      }

      localStorage.setItem('expense-history', JSON.stringify(obj));
    }
  }

  return (
    <>
    <Navbar />
    <div id='content-wrapper'>
    <Switch>
      <Route exact path='/about'>
        <div className='page-container'>
          <h1 className='container-title'>About</h1>
          <p>Finance Playground is an application designed to bring you an Expense Tracker and Compound Interest Calculator tool bundled into one neat package. Designed with simplicity in mind, the tools provided to you are clear and concise with no unnecessary confusion.</p>
          <h2 className='container-title'>The Design</h2>
          <p>The minimal design was planned through Figma's wireframing tool and was implemented in Vanilla CSS. Other than the graph in the 'Compound Interest Calculator' tab, no outside libraries were used.</p>
          <p>The Compound Interest Calculator graph was implemented using the <span><a href='https://recharts.org/en-US/' target='https://recharts.org/en-US/'>Rechart</a></span> Library. Rechart is a highly customizable, composable charting library built on React components.</p>
          <h2 className='container-title'>Technologies Used</h2>
          <section style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              margin: '30px 0 30px 0'
            }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt='' width='15%' />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='' width='15%' />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='' width='15%' />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='' width='15%' />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt='' width='15%' />
          </section>
          <h2 className='container-title'>Contact Me</h2>
          <section style={{
              fontSize: '20px'
            }}>
            <a href='https://www.linkedin.com/in/brandon-flores-798b98239/' target='https://www.linkedin.com/in/brandon-flores-798b98239/' style={{textDecoration:'none', color:'#6B5BB6', textShadow:'0px 0px 3px #fff', fontWeight:'500'}}>
              <p style={{display: 'flex', alignItems:'center', textDecoration:'none'}}>
                <span style={{marginRight: '10px'}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='' width='30px' />
                </span>
                LinkedIn
              </p>
            </a>
            <a href='https://github.com/brandonflores647' target='https://github.com/brandonflores647' style={{textDecoration:'none', color:'#6B5BB6', textShadow:'0px 0px 3px #fff', fontWeight:'500'}}>
              <p style={{display: 'flex', alignItems:'center'}}>
                <span style={{marginRight: '10px'}}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='' width='30px' />
                </span>
                Github
              </p>
            </a>
            <p>~ Brandon Flores</p>
          </section>
        </div>
      </Route>
      <Route exact path='/expense-tracker'>
        <div className='page-container'>

        <h1 className='container-title'>Expense Tracker</h1>

        <Balance bal={balance} income={income} expense={expense}/>

        <div id='expense-form-container'>
          <h2 className='container-title'>Add new transaction</h2>
          <form id='expense-form' onSubmit={handleNewTransaction}>
            <div id='expense-form-inputs'>
              <label>Title</label>
              <input
                type='text'
                placeholder='Enter title ...'
                className='input-field'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
              <label>Amount</label>
              <div>
                <input
                  type='number'
                  placeholder='0'
                  className='input-field'
                  value={amount}
                  step='0.1'
                  onChange={(e) => setAmount(e.target.value)}
                />
                <section id='amount-desc-container'>
                  <p>positive - income</p>
                  <p>negative - expense</p>
                </section>
              </div>
            </div>
            <div className={'button-container'}>
              <button id={`submit-expense-form-button${!title || !amount ? '-err' : ''}`} type='submit'>
                Submit
              </button>
              <div className={'button-back'}></div>
            </div>
          </form>
        </div>

        <HistoryTransaction info={JSON.parse(localStorage.getItem('expense-history'))} setTransList={setTransList} setBalance={setBalance} setIncome={setIncome} setExpense={setExpense}/>
        </div>
      </Route>
      <Route exact path='/compound-interest'>
          <h1 className='container-title page-container'>Compound Interest Calculator</h1>
          <CompoundInterestForm />
      </Route>
      <Route>
        <Redirect to='/expense-tracker' />
      </Route>
    </Switch>
    </div>
    </>
  );
}

export default App;
