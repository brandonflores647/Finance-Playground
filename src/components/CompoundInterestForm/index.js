import { useState, useEffect, useRef } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import './CompoundInterestForm.css'

const CompoundInterestForm = () => {

    const ref = useRef()

    const [chartMargin, setChartMargin] = useState(0);
    const [init, setInit] = useState(1);
    const [monthlyCont, setMonthlyCont] = useState('');
    const [time, setTime] = useState(2);
    const [interest, setInterest] = useState(0);
    const [data, setData] = useState([{name:''}]);
    const [endVal, setEndVal] = useState('');

    const handleReset = () => {
        setInit(1);
        setMonthlyCont('');
        setTime(2);
        setInterest(0);
        setData([{name:''}]);
        setEndVal('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let dataArr = [];
        let val = parseInt(init, 10);

        for (let i = 0; i <= time; i++) {
            if (i !== 0) {
                val = (val * (1 + interest/100)) + (monthlyCont*12);
            }
            dataArr.push({
                name: `Year ${i}`,
                Value: parseFloat(val.toFixed(2))
            });
        }

        setData(dataArr);
        setEndVal(`$${dataArr[dataArr.length-1].Value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }

    useEffect(() => {
        setChartMargin((ref.current.clientWidth));
        window.addEventListener('resize', () => setChartMargin((ref.current.clientWidth)))
    }, []);

    return (
        <>
        <div className='page-container' ref={ref}>
        <section id='compount-top'>
            <p>End Value: {endVal}</p>
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
                max='80'
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <label>Annual estimated interest rate:</label>
            <input
                type='number'
                className='input-field-c'
                min='0'
                max='200'
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
            />
            <section id='compound-bottom'>
                <button type='submit' id='compound-submit-button'>Compound it!</button>
            </section>
        </form>
        </div>
        <section id='compound-chart-container'>
            <ResponsiveContainer width='100%' height={400}>
                <LineChart
                    data={data}
                    margin={{ top: 10, right: (chartMargin>480 ? chartMargin*.75 : 50), bottom: 5, left: (chartMargin>480 ? chartMargin*.65 : 50) }}
                >
                    <Line type="monotone" dataKey="Value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis
                        dataKey="name"
                        minTickGap={30}
                        />
                    <YAxis
                        domain={['dataMin', 'dataMax']}
                        width={75}
                    />
                  <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </section>
        </>
    );
}

export default CompoundInterestForm
