import dashboard from '../../assets/svgs/dashboard_icon.svg';
import transactions from '../../assets/svgs/transaction_icon.svg';
import schedules from '../../assets/svgs/schedule_icon.svg';
import users from '../../assets/svgs/user_icon.svg';
import settings from '../../assets/svgs/setting_icon.svg';
import close from '../../assets/images/icons8-close-50.png';
import down from '../../assets/svgs/down.svg'
import { useState } from 'react';

const Sidebar = () => {
    const menu = [
        { name: 'Dashboard', icon: dashboard },
        { name: 'Transactions', icon: transactions },
        { name: 'Schedules', icon: schedules },
        { name: 'Users', icon: users },
        { name: 'Settings', icon: settings },
    ];
    const [active, setActive] = useState(0);
    const [expanded, setExpanded] = useState(false)

    return (
        (!expanded && window.innerWidth < 768) 
        ? 
        <div className='w-4 z-10 h-full flex items-center absolute left-0 top-0 bg-black' onClick={() => setExpanded(true)} >
            <img src={down} alt='down' className='w-4 h-4 rotate-[270deg]' />
        </div> 
        :
        <div className="relative z-10 flex-col hidden md:flex md:w-60 self-stretch px-6 py-8 bg-black text-white rounded-3xl m-8 mr-0 overflow-y-auto z-1" style={{
            display: expanded && 'flex',
            borderRadius: expanded && 0,
            margin: expanded && 0,
            width: expanded && 'calc(100vw)',
            height: expanded && 'calc(100vh)',
            position: expanded && 'absolute',
        }}>
            <div className='absolute top-0 right-0 block md:hidden'>
                <img src={close} alt='close' className='w-6 h-6 m-4 cursor-pointer' color='#fff' onClick={() => setExpanded(false)} />
            </div>
            <div className="text-4xl font-bold">
                Board.
            </div>
            <div className="flex flex-col mt-8 gap-4">
                {menu.map((item, index) => (
                    <div key={index} className={"flex gap-4 items-center cursor-pointer" + (index === active ? " font-bold" : "")} onClick={() => setActive(index)}>
                        <img src={item?.icon} alt="dashboard" className="w-4 h-4 inline-block" />
                        {item?.name}
                    </div>
                ))}            
            </div>
            <div className="flex flex-col mt-auto gap-4 text-sm">
                <div className="cursor-pointer">
                    Help
                </div>
                <div className="cursor-pointer">
                    Contact Us
                </div>
            </div>
        </div>
    );
}

export default Sidebar;