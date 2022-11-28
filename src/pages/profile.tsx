import { signOut, useSession } from 'next-auth/react';
import React from 'react'
import RouteGuard from '../components/RouteGuard';

const Profile = () => {
    const { data: sessionData } = useSession();

    return (
        <RouteGuard>
            <div>
                {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
                <button onClick={() => signOut()} className='bg-[#595aff] hover:bg-[#6364ff] w-full px-5 py-[6px] rounded-sm block font-semibold'>Sign out</button>

            </div>
        </RouteGuard>

    )
}

export default Profile