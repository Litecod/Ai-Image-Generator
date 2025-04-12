import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='w-full sm:w-[20%] md:w-[30%] lg:w-[17%] sm:min-h-screen bg-gray-100 sm:absolute'>
            <div className="flex flex-col gap-4 pt-6 py-[0.7rem] sm:py-auto px-[0.7rem] sm:px-[1rem] text-[15px]">
                <Link href={"/generate"} className={`w-full px-[1rem] py-[0.5rem] rounded`} >
                    <div className="flex gap-2 items-center"><FaUser /><span className='sm:hidden md:block'>Dasboard</span></div>
                </Link>
                <Link href={"/pricing"} className={`w-full flex justify-between px-[1rem] py-[0.5rem] rounded gap-2`} >
                    <div className="flex gap-2 items-center"><FaUser /> <span className='sm:hidden md:block'>Profile</span></div>
                    <div className=" bg-green-300 px-[0.3rem] py-[0.2rem] rounded text-[0.6rem]">User</div>
                </Link>
            </div>
        </div>

    )
}

export default Sidebar