const Balance = ({bal, income, expense}) => {
    return (
        <>
            <div id='balance-container'>
                <p>${bal}</p>
                <div>
                    <p>
                        INCOME: {income}
                        EXPENSE: {expense}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Balance;
