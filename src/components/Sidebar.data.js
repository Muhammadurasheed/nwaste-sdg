import { AiOutlineHome } from 'react-icons/ai';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { FaQuestionCircle } from 'react-icons/fa';


export const sidebarData = [
    {   id: 1,
        title: "Home",
        icon: <AiOutlineHome />,
        link: '/'
    },
    {   id: 2,
        title: "Market Place",
        icon: <IoIosPeople />,
        link: '/farmers'
    },
     {
        title: "Farmer Diary",
        icon: <IoIosPeople />,
        link: '/diary'
    },
    {   id: 3,
        title: "Message",
        icon: <BiMessageRoundedDots />,
        link: '/'
    },
    {   id: 4,
        title: "Loan",
        icon: <RiExchangeDollarLine />,
        link: '/loan'
    },
    {   id: 5,
        title: "FAQs",
        icon: <FaQuestionCircle />,
        link: '/faq'
    }
]