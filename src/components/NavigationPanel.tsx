import React from 'react'
import Image from 'next/image'

const NavigationPanel = () => {
    return (
        <div className='h-full overflow-hidden flex flex-end min-w-[285px]'>
            <div className='w-full fixed max-w-[285px] flex flex-col justify-center items-start'>
                <div className='flex flex-col justify-center items-end pl-3'>
                    <Image
                        src="/logo.svg"
                        height={30}
                        width={120}
                        alt="logo"
                    />
                </div>
            </div>
        </div>



    )
}

export default NavigationPanel