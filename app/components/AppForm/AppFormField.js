import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput/AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormFields = ({ name, ...otherProps }) => {
    const { setFieldTouched, handleChange, errors, touched } =
        useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormFields;
