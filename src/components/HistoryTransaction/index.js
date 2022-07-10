import { useState, useEffect } from 'react';
import './HistoryTransaction.css';

const HistoryTransaction = ({info, setTransList, setBalance, setIncome, setExpense}) => {

    const [del, setDel] = useState(null);

    useEffect(() => {
        if (del) {
            const valCheck = del.amount > 0 ? true : false; // true: positive, false: negative

            let newBal = info.balance;
            let newIncome = info.income;
            let newExpense = info.expense;
            if (valCheck) {
                newBal = info.balance - del.amount;
                setBalance(newBal);
                newIncome = info.income - del.amount;
                setIncome(newIncome);
            } else {
                newBal = (info.balance + Math.abs(del.amount));
                setBalance(newBal);
                newExpense = info.expense + Math.abs(del.amount);
                setExpense(newExpense);
            }

            const newObj = {
                balance: Math.round((newBal + Number.EPSILON)*100)/100,
                income: newIncome > 0 ? Math.round((newIncome + Number.EPSILON)*100)/100 : 0,
                expense: newExpense < 0 ? Math.round((newExpense + Number.EPSILON)*100)/100 : 0,
                transList: info.transList
            }

            localStorage.setItem('expense-history', JSON.stringify(newObj));
            setTransList(info.transList);
        }
    }, [del])

    const handleDelete = (index) => {
        const item = info.transList.splice(index, 1);
        setDel(item[0]);
    }

    return (
        <div id='history-container'>
            <h2 className='container-title'>History</h2>
            <ul>
                {info ? info.transList.map((ele, i) => {
                    let check;
                    info.transList[i].amount < 0 ? check = 'neg' : check = 'pos'
                    return (
                        <div key={i} className='li-wrapper'>
                        <i className="fa-solid fa-xmark fa-3x" onClick={() => handleDelete(info.transList.indexOf(ele))}></i>
                        <div className='li-container'>
                            <li className={`trans-list ${check}`}>
                                <p>{info.transList[i].title}</p>
                                <p>{info.transList[i].amount < 0 ? '-' : '+'}
                                    ${info.transList[i].amount < 0 ? `${info.transList[i].amount}`.slice(1) : info.transList[i].amount}
                                </p>
                            </li>
                        </div>
                        </div>
                    )
                }) : null}
            </ul>
        </div>
    );
}

export default HistoryTransaction;
