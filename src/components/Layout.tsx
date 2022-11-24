import { FaHashtag } from 'react-icons/fa'
import ComposePanel from './ComposePanel'
import NavigationPanel from './NavigationPanel'

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <main className="flex min-h-screen flex-col items-center  bg-[#191b22] text-white py-3">
            <div className="relative container flex flex-row  justify-center  px-4">
                <ComposePanel />

                <div className='w-full max-w-[580px] bg-[#313543] h-[300vh] rounded-md'>
                    <div className='sticky top-5 px-4 py-3 bg-[#313543]'><FaHashtag size={20} className='inline mr-1' /> Explore</div>
                    {children}
                </div>
                <NavigationPanel />

                {/* <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div> */}
            </div>
        </main >
    )
}

export default Layout