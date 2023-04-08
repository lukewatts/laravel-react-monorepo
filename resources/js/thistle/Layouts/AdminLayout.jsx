import { AppShell, Navbar, Header } from '@mantine/core';
import AuthContext from '@/app/Contexts/AuthContext';

export default props => {
    const { children, auth, ...attributes } = props;
    return (
        <AuthContext.Provider value={auth}>
            <AppShell
                padding="md"
                navbar={<Navbar width={{ base: 300 }} height={`calc(100vh - 60px)`} p="xs">{/* Navbar content */}</Navbar>}
                header={<Header height={60} p="xs">{/* Header content */}</Header>}
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                {children}
            </AppShell>
        </AuthContext.Provider>
    );
};
