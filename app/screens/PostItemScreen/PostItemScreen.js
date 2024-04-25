import { useState } from "react";
import { useLocation } from "../../hooks";
import { useFormikContext } from "formik";
import * as Yup from "yup";

import {
	AppForm,
	AppFormField,
	FormSubmitButton,
	AppFormPicker,
	AppFormImageInputList,
} from "../../components/AppForm";
import { Screen, Button } from "../../components";

import styles from "./PostItemScreenStyles";
import colors from "../../config/colors";

const validationSchema = Yup.object().shape({
	title: Yup.string().required("Title is required"),
	price: Yup.number().required("Price is required").min(0),
	category: Yup.object().required("Category is required"),
	description: Yup.string().nullable().required("Description is required"),
	imageUris: Yup.array().min(1, "At least one image is required"),
});

const categories = [
	{ label: "Furniture", icon: "floor-lamp", color: "#fc5c65", value: 1 },
	{ label: "Cars", icon: "car", color: "#fd9644", value: 2 },
	{ label: "Electronics", icon: "camera", color: "#fed330", value: 3 },
	{ label: "Games", icon: "cards", color: "#26de81", value: 4 },
	{ label: "Clothing", icon: "shoe-heel", color: "#2bcbba", value: 5 },
	{ label: "Sports", icon: "basketball", color: "#45aaf2", value: 6 },
	{ label: "Movies & Music", icon: "headphones", color: "#4b7bec", value: 7 },
	{
		label: "Books",
		icon: "book-open-blank-variant",
		color: "#9b67e2",
		value: 8,
	},
	{ label: "Other", icon: "dropbox", color: "#7c8ca1", value: 9 },
];

const ResetButton = () => {
	const { resetForm } = useFormikContext();

	return (
		<Button
			title="reset"
			color={colors.secondary}
			textColor={colors.white}
			onPress={() => resetForm()}
			style={styles.backButton}
		/>
	);
};

const PostItemScreen = () => {
	const location = useLocation();

	return (
		<Screen style={styles.screen}>
			<AppForm
				initialValues={{
					title: "",
					price: null,
					category: null,
					description: "",
					imageUris: [],
				}}
				onSubmit={() => {
					setSubmitting(true);
					setLoading(true);
				}}
				validationSchema={validationSchema}
			>
				<AppFormImageInputList
					name="imageUris"
					style={styles.appFormImageInputList}
				/>

				<AppFormField
					name="title"
					placeholder="Title"
					autoCapitalize="words"
					maxLength={255}
					returnKeyType="done"
				/>
				<AppFormField
					name="price"
					placeholder="Price"
					keyboardType="numeric"
					width="40%"
					returnKeyType="done"
				/>
				<AppFormPicker
					name="category"
					items={categories}
					placeholder="Category"
					width="60%"
					numColumns={3}
					pickerItemHasIcon={true}
				/>
				<AppFormField
					name="description"
					placeholder="Description"
					multiline
				/>
				<FormSubmitButton
					title="Post"
					color={colors.primary}
					textColor={colors.white}
					style={styles.postButton}
				/>
				<ResetButton />
			</AppForm>
		</Screen>
	);
};

export default PostItemScreen;
