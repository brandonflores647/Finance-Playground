import './Balance.css'

const Balance = ({bal, income, expense}) => {
    return (
        <>
            <div id='balance-container'>
                <section id='balance-section'>
                    <p>BALANCE:</p>
                    <p id='balance-num'>${Number(bal).toFixed(2)}</p>
                </section>
                <section id='income-expense-section'>
                    <div id='income-expense-container'>
                        <div>
                            <p className='income-expense-text'>INCOME</p>
                            <p className='income-expense-text income'>{
                                Number(income).toFixed(2)
                            }</p>
                        </div>
                        <div id='line'></div>
                        <div>
                            <p className='income-expense-text'>EXPENSE</p>
                            <p className='income-expense-text expense'>{
                                expense ? `${Number(expense).toFixed(2)}`.slice(1) : '0.00'
                            }</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Balance;
