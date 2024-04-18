import { useFormikContext } from 'formik';

import Picker from '../Picker/Picker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({ name, items, placeholder, ...otherProps }) => {
    const { values, setFieldValue, errors, touched } = useFormikContext();

    return (
        <>
            <Picker
                items={items}
                onSelectItem={(item) => {
                    setFieldValue(name, item);
                }}
                placeholder={placeholder}
                selectedItem={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormPicker;
