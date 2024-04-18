import { useState } from 'react';
import * as Yup from 'yup';

import {
    AppForm,
    AppFormField,
    FormSubmitButton,
    AppFormPicker,
} from '../../components/AppForm';
import Screen from '../../components/Screen/Screen';
import Button from '../../components/Button/Button';

import styles from './PostItemScreenStyles';
import colors from '../../config/colors';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    price: Yup.number().required('Price is required').min(0),
    category: Yup.object().required('Category is required'),
    description: Yup.string().nullable().required('Description is required'),
});

const categories = [
    { label: 'Furniture', icon: 'floor-lamp', color: '#fc5c65', value: 1 },
    { label: 'Cars', icon: 'car', color: '#fd9644', value: 2 },
    { label: 'Electronics', icon: 'camera', color: '#fed330', value: 3 },
    { label: 'Games', icon: 'cards', color: '#26de81', value: 4 },
    { label: 'Clothing', icon: 'shoe-heel', color: '#2bcbba', value: 5 },
    { label: 'Sports', icon: 'basketball', color: '#45aaf2', value: 6 },
    { label: 'Movies & Music', icon: 'headphones', color: '#4b7bec', value: 7 },
    {
        label: 'Books',
        icon: 'book-open-blank-variant',
        color: '#9b67e2',
        value: 8,
    },
    { label: 'Other', icon: 'dropbox', color: '#7c8ca1', value: 9 },
];


const PostItemScreen = () => {
    return (
        <Screen style={styles.screen}>
            <AppForm
                initialValues={{
                    title: '',
                    price: null,
                    category: null,
                    description: '',
                }}
                onSubmit={() => console.log('posting item')}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="title"
                    placeholder="Title"
                    autoCapitalize="words"
                    maxLength={255}
                />
                <AppFormField
                    name="price"
                    placeholder="Price"
                    keyboardType="numeric"
                    width="40%"
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
                <Button
                    title="back"
                    color={colors.secondary}
                    textColor={colors.white}
                    onPress={() => console.log('go to prev screen')}
                    style={styles.backButton}
                />
            </AppForm>
        </Screen>
    );
};

export default PostItemScreen;
