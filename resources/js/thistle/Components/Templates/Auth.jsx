import React, { useContext } from 'react';
import { Link } from '@inertiajs/react';
import AuthContext from '@/app/Contexts/AuthContext';
import { Flex } from '@mantine/core';

export const DashboardLink = props => (
    <Link {...props} href={route('dashboard')}>
        Dashboard
    </Link>
);
export const LoginLink = props => (
    <Link {...props} href={route('login')}>
        Login
    </Link>
);
export const RegisterLink = props => (
    <Link {...props} href={route('register')}>
        Register
    </Link>
);

export default props => {
    const auth = useContext(AuthContext);
    return (
        <div>
            {auth.user ? (
                <DashboardLink className={props.linkClasses ? props.linkClasses : ''} />
            ) : (
                <Flex>
                    <LoginLink className={props.linkClasses ? props.linkClasses : ''} />
                    <RegisterLink className={props.linkClasses ? props.linkClasses : ''} />
                </Flex>
            )}
        </div>
    );
};
