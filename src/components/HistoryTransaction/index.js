import './HistoryTransaction.css';

const HistoryTransaction = ({list}) => {
    return (
        <div id='history-container'>
            <h2 className='container-title'>History</h2>
            <ul>
                {list.map((ele, i) => {
                    let check;
                    ele.amount < 0 ? check = 'neg' : check = 'pos'
                    return (
                        <div className='li-container'>
                            <li key={i} className={`trans-list ${check}`}>
                                <p>{ele.title}</p>
                                <p>{ele.amount < 0 ? '-' : '+'}
                                    ${ele.amount < 0 ? `${ele.amount}`.slice(1) : ele.amount}
                                </p>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}

export default HistoryTransaction;
