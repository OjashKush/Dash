import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
// import axios from 'axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/line`)
const res = {
    data: [
        { 1: 200, 2: 260, 3: 340, 4: 400, 5: 375, 6: 350, 7: 325, 8: 300, 9: 275, 10: 250, 11: 225, 12: 200, 13: 212, 14: 225, 15: 238, 16: 250, 17: 275, 18: 300, 19: 284, 20: 268, 21: 252, 22: 236, 23: 220, 24: 245, 25: 270, 26: 295, 27: 320, 28: 345, 29: 395, 30: 420 },
        { 1: 100, 2: 160, 3: 240, 4: 300, 5: 375, 6: 420, 7: 375, 8: 300, 9: 275, 10: 240, 11: 200, 12: 170, 13: 212, 14: 252, 15: 292, 16: 335, 17: 375, 18: 400, 19: 370, 20: 340, 21: 310, 22: 280, 23: 240, 24: 210, 25: 180, 26: 200, 27: 200, 28: 220, 29: 240, 30: 250 }
    ]
}

export const options = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true,
                boxHeight: 6,
                boxWidth: 6,
                pointStyle: 'circle',
                color: '#000000',
                padding: 10,
            }
        },
        title: {
            display: false,
            text: 'Activities',
            align: 'start',
            font: {
                size: 20,
                weight: 'bold',
            },
            color: '#000000',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                callback: function (value, index, values) {
                    if ((value+1) % (Object.keys(res.data[0]).length / 5) === 0) {
                        if (value === 29) return null;
                        console.log(value)
                        return "Week " + ((value+1) / (Object.keys(res.data[0]).length / 5)) ;
                    }
                    return null
                },
                padding: 6,
            },
        },
        y: {
            grid: {
                display: true,
            },
            ticks: {
                stepSize: 100,
            },
            min: 0,
            max: 500,
        },
    },
    elements: {
        point: {
            radius: 0,  
        },
    },
}

export const data = {
    labels: Object.keys(res.data[0]),
    datasets: [
        {
            label: 'Guest',
            data: Object.values(res.data[0]),
            borderColor: '#E9A0A0',
            backgroundColor: '#E9A0A0',
            tension: 0.35,
        },
        {
            label: 'User',
            data: Object.values(res.data[1]),
            borderColor: '#9BDD7C',
            backgroundColor: '#9BDD7C',
            tension: 0.35,
        },
    ],
};


const Linechart = () => {
    return (
        <>
            <div className='w-full flex justify-end gap-8 items-center'>
                {data.datasets.map((item, index) => (
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.backgroundColor}}></div>
                        <div>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Line data={data} options={options} />
            </div>
        </>
    )
}

export default Linechart