import { useState, useEffect, useRef } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import './CompoundInterestForm.css'

const CompoundInterestForm = () => {

    const ref = useRef();
    const [chartWidth, setChartWidth] = useState(0);

    const [init, setInit] = useState(1);
    const [monthlyCont, setMonthlyCont] = useState('');
    const [time, setTime] = useState(2);
    const [interest, setInterest] = useState(0);
    const [freq, setFreq] = useState('Annually');
    const [data, setData] = useState([{name:''}]);

    const handleReset = () => {
        setInit(1);
        setMonthlyCont('');
        setTime(1);
        setInterest(0);
        setFreq('Annually');
        setData([{name:''}]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let dataArr = [];
        for (let i = 1; i <= time; i++) {
            dataArr.push({
                name: `Year ${i}`
            });
        }

        setData(dataArr);

        setInit(1);
        setMonthlyCont('');
        setTime(1);
        setInterest(0);
        setFreq('Annually');
    }

    useEffect(() => {
        setChartWidth(ref.current.clientWidth)
        window.addEventListener("resize", (e) => setChartWidth(ref.current.clientWidth))
    }, [])

    return (
        <>
        <section id='compount-top'>
            <button id='compount-reset-button'
                    onClick={handleReset}
                    >RESET</button>
        </section>
        <form id='compound-interest-form' ref={ref} onSubmit={handleSubmit}>
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
            <LineChart width={chartWidth} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
        </section>
        </>
    );
}

export default CompoundInterestForm
