import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaAngleLeft, FaHashtag } from 'react-icons/fa'
import ComposePanel from './ComposePanel'
import NavigationPanel from './NavigationPanel'

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    const router = useRouter();
    const isPost = router.pathname.startsWith("/post") || router.pathname.startsWith("/user")

    return (
        <main className="flex min-h-screen flex-col items-center  bg-[#191b22] text-white py-3">
            <div className="relative container flex flex-row  justify-center px-4">
                <ComposePanel />

                <div className='w-full max-w-[580px] bg-[#313543] h-[300vh] rounded-md'>
                    <div className='w-full h-[20px] fixed t-0 mt-[-20px] max-w-[580px] bg-[#191B22]'></div>
                    <div className='sticky top-3 px-4 py-3 bg-[#313543]'>
                        {isPost ? <Link href="/" className='text-[#8c8dff] flex flex-start items-center'><FaAngleLeft size={20} /> Back</Link> : <><FaHashtag size={20} className='inline mr-1' /> Explore</>}
                    </div>
                    {children}
                </div>
                <NavigationPanel />
            </div>
        </main >
    )
}

export default Layout