const HistoryTransaction = ({list}) => {
    return (
        <ul>
            {list.map((ele, i) => {
                return <li key={i}>
                    <p>{ele.title}</p>
                    <p>{ele.amount}</p>
                </li>
            })}
        </ul>
    );
}

export default HistoryTransaction;
