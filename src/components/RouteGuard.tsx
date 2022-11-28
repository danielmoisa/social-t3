import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

interface IGuard {
    children: React.ReactNode;
}

const RouteGuard = ({ children }: IGuard) => {
    const router = useRouter();
    const { data: sessionData } = useSession();

    useEffect(() => {
        if (!sessionData?.user) {
            router.push("/")
        }
    }, [sessionData, router])


    if (!sessionData) {
        return null;
    }

    return (
        <div>{children}</div>
    )
}

export default RouteGuard