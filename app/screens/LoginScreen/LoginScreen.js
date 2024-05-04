import { useState } from "react";
import { Image } from "react-native";
import * as Yup from "yup";
import { jwtDecode } from "jwt-decode";

import Screen from "../../components/Screen/Screen";
import Button from "../../components/Button/Button";
import {
	ErrorMessage,
	AppForm,
	AppFormField,
	FormSubmitButton,
} from "../../components/AppForm";

import styles from "./LoginScreenStyles";
import colors from "../../config/colors";
import routes from "../../Nav/routes";
import auth from "../../api/auth";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().label("Password"),
});

const LoginScreen = ({ navigation }) => {
	const [loginFailed, setLoginFailed] = useState(false);

	const handleSubmit = async ({ email, password }) => {
		const result = await auth.login(email, password);

		if (!result.ok) return setLoginFailed(true);

		setLoginFailed(false);

		console.log(result.data);

		const user = jwtDecode(result.data);

		console.log(user);
	};

	return (
		<Screen style={styles.container}>
			<Image
				source={require("../../assets/images/logo.png")}
				style={styles.logo}
			/>

			<AppForm
				initialValues={{ email: "", password: "" }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<ErrorMessage
					error="Invalid email and/or password."
					visible={loginFailed}
				/>

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
					onPress={() => navigation.replace(routes.REGISTER_SCREEN)}
				/>
			</AppForm>
		</Screen>
	);
};

export default LoginScreen;
