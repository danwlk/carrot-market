import { useFormikContext } from 'formik';

import Button from '../Button/Button';

const FormSubmitButton = ({ title, color, textColor, style }) => {
    const { handleSubmit } = useFormikContext();

    return (
        <Button
            title={title}
            color={color}
            textColor={textColor}
            style={style}
            onPress={handleSubmit}
        />
    );
};

export default FormSubmitButton;
