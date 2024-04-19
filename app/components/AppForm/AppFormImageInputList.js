import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInput/ImageInputList';
import ErrorMessage from './ErrorMessage';

const AppFormImageInputList = ({ name, style }) => {
    const { values, setFieldValue, errors, touched } = useFormikContext();

    const addImage = (uri) => {
        setFieldValue(name, [...values[name], uri]);
    };

    const removeImage = (uri) => {
        setFieldValue(
            name,
            values[name].filter((imgUri) => imgUri !== uri)
        );
    };

    return (
        <>
            <ImageInputList
                imageUris={values[name]}
                onAddImage={(uri) => addImage(uri)}
                onRemoveImage={(uri) => removeImage(uri)}
                style={style}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default AppFormImageInputList;
