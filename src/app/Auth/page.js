import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const page = (WrappedComponent) => {
    const WithAuth = (_props) => {
        const router = useRouter();

        useEffect(() => {
            const auth = localStorage.getItem('auth');
            if (!auth) {
                router.replace('/Login');
            }
        }, [router]);

        return (
            <>
                <WrappedComponent {..._props} />
                <div className="containerl">
                    <div className="authBoxl">
                        <h2>Welcome to the Authenticated Page</h2>
                        <p style={{ color: "gray" }}>You are now logged in!</p>
                    </div>
                    <div className="authBoxl">
                        <h2>Logout</h2>
                        <p style={{ color: "gray" }}>Click the button below to logout!</p>
                        <button onClick={() => {
                            localStorage.removeItem('auth');
                            router.replace('/Login');
                        }}>Logout</button>
                    </div>
                </div>
            </>
        );
    };

    WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

    return WithAuth;
};

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
    return (_props) => {
        const router = useRouter();

        useEffect(() => {
            const auth  = localStorage.getItem('auth');
            if(!auth){
                router.replace('/Login');
            }
        }, [router])
    return (
        <>
            <WrappedComponent {..._props} />
            <div className="containerl">
                <div className="authBoxl">
                    <h2>Welcome to the Authenticated Page</h2>
                    <p style={{ color: "gray" }}>You are now logged in!</p>
                </div>
                <div className="authBoxl">
                    <h2>Logout</h2>
                    <p style={{ color: "gray" }}>Click the button below to logout!</p>
                    <button onClick={() => {
                        localStorage.removeItem('auth');
                        router.replace('/Login');
                    }}>Logout</button>
                </div>
            </div>
        </>
    );
    }

export default page
