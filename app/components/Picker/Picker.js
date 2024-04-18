import { View, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText/AppText';
import Button from '../Button/Button';
import Screen from '../Screen/Screen';
import PickerItem from './PickerItem';
import PickerItemWithIcon from './PickerItemWithIcon';

import styles from './PickerStyles';
import colors from '../../config/colors';

const Picker = ({
    icon,
    items,
    onSelectItem,
    placeholder = 'default',
    selectedItem,
    width = '100%',
    numColumns,
    pickerItemHasIcon = false,
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width: width }]}>
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />
                    )}

                    {selectedItem ? (
                        <AppText style={styles.text}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText
                            style={[styles.text, { color: colors.medium }]}
                        >
                            {placeholder}
                        </AppText>
                    )}
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen style={styles.modal}>
                    <Button
                        title="Close"
                        onPress={() => setModalVisible(false)}
                        textColor={colors.secondary}
                    />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => {
                            return pickerItemHasIcon ? (
                                <PickerItemWithIcon
                                    label={item.label}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }}
                                    icon={item.icon}
                                    color={item.color}
                                />
                            ) : (
                                <PickerItem
                                    label={item.label}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }}
                                />
                            );
                        }}
                        numColumns={numColumns}
                    />
                </Screen>
            </Modal>
        </>
    );
};

export default Picker;
