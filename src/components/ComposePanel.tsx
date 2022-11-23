import Link from 'next/link'
import Image from 'next/image'

import SearchInput from './SearchInput'

const ComposePanel = () => {
    return (
        <div className='h-full overflow-hidden flex flex-end min-w-[285px]'>
            <div className='w-full fixed max-w-[285px] flex flex-col justify-center items-end pr-3'>
                <div>
                    <SearchInput />
                    <p className='text-[#9baec8] text-[13px] py-5'><b>mastodon.social </b>is part of the decentralized social network powered by <Link href="#">Mastodon.</Link></p>
                    <Image
                        className='rounded-sm'
                        src="/banner.png"
                        width={285}
                        height={200}
                        alt="banner"
                    />
                    <p className='text-[13px] text-white py-5'>
                        The original server operated by the Mastodon gGmbH non-profit
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ComposePanel