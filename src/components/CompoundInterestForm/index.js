import './CompoundInterestForm.css'

const CompoundInterestForm = () => {
    return (
        <form id='compound-interest-form'>
            <label>Initial Investment:</label>
            <input
                type='number'
                className='input-field-c'
                min='1'
            />
            <label>Monthly Contribution:</label>
            <input
                type='number'
                className='input-field-c'
                placeholder='(Optional)'
                min='0'
            />
            <label>Length of time in years:</label>
            <input
                type='number'
                className='input-field-c'
                min='1'
            />
            <label>Estimated interest rate:</label>
            <input
                type='number'
                className='input-field-c'
                min='0'
            />
        </form>
    );
}

export default CompoundInterestForm
