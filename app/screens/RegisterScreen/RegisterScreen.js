import * as Yup from 'yup';

import Screen from '../../components/Screen/Screen';
import {
    AppForm,
    AppFormField,
    FormSubmitButton,
} from '../../components/AppForm';
import Button from '../../components/Button/Button';

import styles from './RegisterScreenStyles';
import colors from '../../config/colors';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email(),
    password: Yup.string()
        .required('Password is required')
        .min(8)
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d).+$/,
            'Password must contain at least ONE LETTER and ONE NUMBER.'
        ),
    reEnterPassword: Yup.string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password'), null], 'Passwords must match!'),
});

const RegisterScreen = ({ navigation }) => {
    return (
        <Screen style={styles.screen}>
            <AppForm
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    reEnterPassword: '',
                }}
                onSubmit={() => console.log('submitting registration')}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    placeholder="Name"
                    icon="account"
                    autoCapitalize="words"
                    textContentType="name"
                />
                <AppFormField
                    name="email"
                    icon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    autoCorrect={false}
                    textContentType="newPassword"
                />
                <AppFormField
                    name="reEnterPassword"
                    icon="lock"
                    placeholder="Re-Enter Password"
                    secureTextEntry
                    autoCorrect={false}
                    textContentType="newPassword"
                />

                <FormSubmitButton
                    title="Register"
                    color={colors.primary}
                    textColor={colors.white}
                    style={styles.registerButton}
                />
                <Button
                    title="Already Have an Account?"
                    color={colors.secondary}
                    textColor={colors.white}
                    style={styles.loginButton}
                    onPress={() => navigation.replace('LoginScreen')}
                />
            </AppForm>
        </Screen>
    );
};

export default RegisterScreen;
