"use client";

import { SessionProvider } from 'next-auth/react';

// we will wrap our app with the provider so that the session 
// is available to other components 

const Provider = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider;
