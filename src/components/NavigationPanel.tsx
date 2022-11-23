import Image from 'next/image'
import Link from 'next/link'
import { FaGlobeAmericas, FaHashtag, FaUsers } from 'react-icons/fa'

const NavigationPanel = () => {
    return (
        <div className='h-full overflow-hidden flex flex-end min-w-[285px] pt-2'>
            <div className='w-full fixed max-w-[285px] flex flex-col justify-center items-start pl-3'>
                <Image
                    className='pl-2'
                    src="/logo.svg"
                    height={30}
                    width={120}
                    alt="logo"
                />
                <div className='w-full border-solid  border-t-[1px] border-b-[1px] border-gray-700 mt-5 pl-2'>
                    <Link className='block p-3 hover:text-[#8c8dff]' href="#"><FaHashtag size={20} className='inline mr-1' /> Explore</Link>
                    <Link className='block p-3 hover:text-[#8c8dff]' href="#"><FaUsers size={20} className='inline mr-1' /> Local</Link>
                    <Link className='block p-3 hover:text-[#8c8dff]' href="#"><FaGlobeAmericas size={20} className='inline mr-1' /> Federated</Link>
                </div>
                <p className='text-[13px] text-[#9baec8] p-3'>
                    Sign in to follow profiles or hashtags, favourite, share and reply to posts, or interact from your account on a server.
                </p>
                <div className='w-full p-3'>
                    <button className='bg-[#595aff] hover:bg-[#6364ff] w-full px-5 py-[6px] rounded-sm block font-semibold'>Sign In</button>
                    <button className='mt-2 bg-transparent text-[#8c8dff] hover:bg-[#6364ff] hover:text-white w-full px-5 py-[6px] rounded-sm block font-semibold border-[1px] border-[#6364ff]'>Create account</button>
                </div>
            </div>
        </div >

    )
}

export default NavigationPanel