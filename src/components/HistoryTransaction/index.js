import './HistoryTransaction.css';

const HistoryTransaction = ({list}) => {
    return (
        <div id='history-container'>
            <h2 className='container-title'>History</h2>
            <ul>
                {list ? list.map((ele, i) => {
                    let check;
                    ele.amount < 0 ? check = 'neg' : check = 'pos'
                    return (
                        <div key={i} className='li-container'>
                            <li className={`trans-list ${check}`}>
                                <p>{ele.title}</p>
                                <p>{ele.amount < 0 ? '-' : '+'}
                                    ${ele.amount < 0 ? `${ele.amount}`.slice(1) : ele.amount}
                                </p>
                            </li>
                        </div>
                    )
                }) : null}
            </ul>
        </div>
    );
}

export default HistoryTransaction;
