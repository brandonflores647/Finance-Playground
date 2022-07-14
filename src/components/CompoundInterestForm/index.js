import { useState, useEffect } from 'react';

import './CompoundInterestForm.css'

const CompoundInterestForm = () => {

    const [init, setInit] = useState(1);
    const [monthlyCont, setMonthlyCont] = useState('');
    const [time, setTime] = useState(1);
    const [interest, setInterest] = useState(0);
    const [freq, setFreq] = useState('Annually');

    const handleReset = () => {
        setInit(1);
        setMonthlyCont('');
        setTime(1);
        setInterest(0);
        setFreq('Annually');
    }

    return (
        <>
        <section id='compount-top'>
            <button id='compount-reset-button'
                    onClick={handleReset}
                    >RESET</button>
        </section>
        <form id='compound-interest-form'>
            <label>Initial Investment:</label>
            <input
                type='number'
                className='input-field-c'
                min='1'
                value={init}
                onChange={(e) => setInit(e.target.value)}
            />
            <label>Monthly Contribution:</label>
            <input
                type='number'
                className='input-field-c'
                placeholder='(Optional)'
                min='0'
                value={monthlyCont}
                onChange={(e) => setMonthlyCont(e.target.value)}
            />
            <label>Length of time in years:</label>
            <input
                type='number'
                className='input-field-c'
                min='1'
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <label>Estimated interest rate:</label>
            <input
                type='number'
                className='input-field-c'
                min='0'
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
            />
            <label>
                Compound Frequency:
                <select
                    className='input-field-c'
                    id='compount-frequency-input'
                    value={freq}
                    onChange={(e) => setFreq(e.target.value)}
                >
                    <option className='input-field-c'>Annually</option>
                    <option className='input-field-c'>Monthly</option>
                </select>
            </label>
        </form>
        </>
    );
}

export default CompoundInterestForm
