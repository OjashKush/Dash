import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

// const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/pie`)

const res = {
    data: { 'Basic Tees': 55, 'Custom Short Pants': 31, 'Super hoodies': 14 }
}

const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
        legend: {
            display: false,
        },
    },
};

const data = {
    labels: Object.keys(res.data),
    datasets: [
        {
            label: '# of Votes',
            data: Object.values(res.data),
            backgroundColor: [
                '#98D89E',
                '#F6DC7D',
                '#EE8484',
            ],
            borderColor: [
                '#98D89E',
                '#F6DC7D',
                '#EE8484',
            ],
            borderWidth: 1,
            radius: '80%',
        },
    ],
};

const PieChart = () => {
    return (
        <div className="flex justify-center w-full flex-wrap">
            <div className='md:w-1/2'>
                <Pie data={data} options={options} />
            </div>
            <div className='md:w-1/2 flex flex-col justify-between p-4'>
                {data.labels.map((item, index) => (
                    <div className='flex items-center gap-2' key={index}>
                        <div className='w-3 h-3 rounded-full' style={{ backgroundColor: data.datasets[0].backgroundColor[index]}}></div>
                        <div>
                            <div className='text-sm font-bold mb-1'>{item}</div>
                            <div className='text-xs text-[#858585]'>{data.datasets[0].data[index]}%</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChart;
  