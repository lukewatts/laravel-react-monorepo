import AuthContext from '@/app/Contexts/AuthContext';
import routeTo from '@/app/core/router/routeTo';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    CloseButton,
} from '@mantine/core';
import { useContext } from 'react';

export function AuthenticationTitle() {
    const auth = useContext(AuthContext);
    return (
        <Container size={420} my={40}>
            <CloseButton
                title="Close login and go back to home page"
                aria-label="Close login and go back to home page"
                size="lg"
                onClick={() => {
                    routeTo(route('home'));
                }}
                sx={{ position: 'absolute', top: 20, right: 20 }}
            />
            <Title align="center" sx={theme => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor size="sm" component="button">
                    Create account
                </Anchor>
            </Text>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" />
                    <Anchor component="button" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}

export default () => <AuthenticationTitle />;
