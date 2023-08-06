import search from "../../assets/svgs/Search icon.svg"
import notif from "../../assets/svgs/Vector.svg"
import avatar from "../../assets/images/image 1.png"
import revenues from "../../assets/svgs/revenues.svg"
import transactions from "../../assets/svgs/total_transactions_icon.svg"
import likes from "../../assets/svgs/likes.svg"
import users from "../../assets/svgs/users.svg"
import down from "../../assets/svgs/down.svg"
import Sidebar from "../../components/Sidebar"
import Linechart from "../../components/LineChart"
import PieChart from "../../components/PieChart"

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    
    const cards = [
        { title: "Total Revenue", value: "$2,129,430", icon: revenues, color: '#DDEFE0' },
        { title: "Total Transactions", value: '1,520', icon: transactions, color: '#F4ECDD' },
        { title: "Total Likes", value: '9,721', icon: likes, color: '#EFDADA' },
        { title: "Total Users", value: '892', icon: users, color: '#DEE0EF' },
    ]
    const schedule = [
        { title: 'Meeting with suppliers from Kuta Bali', time: '14.00-15.00', location: 'Sunset Road, Kuta, Bali', color: '#9BDD7C' },
        { title: 'Check operation at Giga Factory 1', time: '18.00-20.00', location: 'Central Jakarta', color: '#6972C3' },
    ]
    return (
        <div className="flex w-screen h-screen bg-[#f5f5f5]">
            <Sidebar />
            <div className="flex flex-col p-8 gap-4 grow overflow-y-auto scrollbar-hide">
                <div className="flex justify-end gap-6 items-center">
                    <div className="font-bold text-xl mr-auto">Dashboard</div>
                    <div className="bg-white rounded-xl px-4 py-2 text-sm hidden md:block">
                        <input type="text" placeholder="Search" className="bg-transparent outline-none" />
                        <img src={search} alt="search" className="inline-block w-4 h-4" />
                    </div>
                    <img src={notif} alt="notif" className="w-6 h-6" />
                    <img src={user?.picture ?? avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((item, index) => (
                        <div className={'rounded-2xl p-4'} style={{ backgroundColor: item.color }} key={index}>
                            <div className="flex justify-end w-full">
                                <img src={item.icon} alt="icon" className="w-6 h-6" />
                            </div>
                            <div className="text-sm">{item.title}</div>
                            <div className="text-2xl font-bold">{item.value}</div>
                        </div>
                    ))}
                </div>
                <div className="bg-white p-4 rounded-xl justify-center">
                    <div className="text-lg font-bold">Activities</div>
                    <div className="text-sm text-[#858585] flex items-center cursor-pointer">
                        May - June 2021
                        <img src={down} alt="down" className="inline-block w-3 h-3 ml-2" />
                    </div>
                    <Linechart />
                </div>
                <div className="flex gap-4 flex-wrap md:flex-nowrap">
                    <div className="bg-white p-6 rounded-xl w-full md:w-1/2">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-lg font-bold">Top Products</div>
                            <div className="text-sm text-[#858585] flex items-center cursor-pointer">
                                May - June 2021
                                <img src={down} alt="down" className="inline-block w-3 h-3 ml-2" />
                            </div>
                        </div>
                        <PieChart />
                    </div>
                    <div className="bg-white p-6 rounded-xl w-full md:w-1/2 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-lg font-bold">Today's Schedule</div>
                            <div className="text-sm text-[#858585] flex items-center cursor-pointer">
                                See All
                                <img src={down} alt="down" className="inline-block w-3 h-3 ml-2 rotate-[270deg]" />
                            </div>
                        </div>
                        <div className="grow w-full flex flex-col justify-center gap-4">
                            {schedule.slice(0, 2).map((item, index) => (
                                <div className="flex flex-col gap-1 relative p-2 justify-center pl-4" key={index}>
                                    <div style={{ backgroundColor: item.color }}className="h-full w-1.5 absolute top-0 left-0"></div>
                                    <div className="font-bold text-sm text-[#666666]">{item.title}</div>
                                    <div className="text-xs text-[#999999]">{item.time}</div>
                                    <div className="text-xs text-[#999999]">at {item.location}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard