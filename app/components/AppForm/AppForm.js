import { Formik, useFormikContext } from "formik";

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, { resetForm }) => {
				onSubmit(values);
				resetForm();
			}}
			validationSchema={validationSchema}
		>
			<>{children}</>
		</Formik>
	);
};

export default AppForm;
