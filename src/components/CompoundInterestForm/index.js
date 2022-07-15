import { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import './CompoundInterestForm.css'

const CompoundInterestForm = () => {

    const [init, setInit] = useState(1);
    const [monthlyCont, setMonthlyCont] = useState('');
    const [time, setTime] = useState(2);
    const [interest, setInterest] = useState(0);
    const [freq, setFreq] = useState('Annually');
    const [data, setData] = useState([{name:''}]);

    const handleReset = () => {
        setInit(1);
        setMonthlyCont('');
        setTime(2);
        setInterest(0);
        setFreq('Annually');
        setData([{name:''}]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let dataArr = [];

        for (let i = 1; i <= time; i++) {
            dataArr.push({
                name: `Year ${i}`,
                Value: parseFloat((init * Math.pow(1 + interest/100, i)).toFixed(2))
            });
        }

        setData(dataArr);
    }

    return (
        <>
        <section id='compount-top'>
            <button id='compount-reset-button'
                    onClick={handleReset}
                    >RESET</button>
        </section>
        <form id='compound-interest-form' onSubmit={handleSubmit}>
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
                min='2'
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
            <button type='submit'>Compound it!</button>
        </form>
        <section>
            <ResponsiveContainer width='100%' height={300}>
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="Value" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </section>
        </>
    );
}

export default CompoundInterestForm
