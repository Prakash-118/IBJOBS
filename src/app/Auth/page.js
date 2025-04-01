import { useEffect } from "react";
import { useRouter } from "next/router";

const Auth = (WrappedComponent) => {
    const AuthComponent = (props) => {
        const router = useRouter();

        useEffect(() => {
            // Check if the user is authenticated
            const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

            if (!isLoggedIn) {
                router.push("/Login");
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    };

    AuthComponent.displayName = `Auth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

    return AuthComponent;
};

export default Auth;