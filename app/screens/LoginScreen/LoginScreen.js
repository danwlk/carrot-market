import { Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../../components/Screen/Screen';
import Button from '../../components/Button/Button';
import {
    AppForm,
    AppFormField,
    FormSubmitButton,
} from '../../components/AppForm';

import styles from './LoginScreenStyles';
import colors from '../../config/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().label('Password'),
});

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <FormSubmitButton
                    title="Login"
                    color={colors.primary}
                    textColor={colors.white}
                    style={styles.loginButton}
                />
                <Button
                    title="Don't have an account?"
                    color={colors.secondary}
                    textColor={colors.white}
                    style={styles.registerButton}
                    onPress={() => console.log('code to go to register screen')}
                />
            </AppForm>
        </Screen>
    );
};

export default LoginScreen;
