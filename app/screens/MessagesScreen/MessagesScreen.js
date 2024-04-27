import { useState } from 'react';
import { FlatList } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';
import ListItemSeparator from '../../components/ListItem/ListItemSeparator';
import ListItemDeleteAction from '../../components/ListItem/ListItemDeleteAction';

import styles from './MessagesScreenStyles';
import Screen from '../../components/Screen/Screen';

const initialMessages = [
    {
        id: 1,
        name: 'Daniel Kim',
        conversation: 'hello',
        image: require('../../assets/images/my-pic.jpg'),
    },
    {
        id: 2,
        name: 'Test Test',
        conversation:
            'Our ListItem and Card components look terrible if we give them long text. Long text should be truncated. To fix this, set the numberOfLines prop of the Text component.',
        image: require('../../assets/images/my-pic.jpg'),
    },
    {
        id: 3,
        name: 'Joe Mama',
        conversation: 'Bro answer',
        image: require('../../assets/images/my-pic.jpg'),
    },
    {
        id: 4,
        name: 'Bro',
        conversation: 'Bro answer',
        image: require('../../assets/images/my-pic.jpg'),
    },
];

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(
            messages.filter((m) => {
                return message.id !== m.id;
            })
        );
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        onPress={() => console.log(item.conversation)}
                        title={item.name}
                        subTitle={item.conversation}
                        image={item.image}
                        style={styles.listItem}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                        showChevron={true}
                        numberOfLines={1}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            name: 'Daniel Kim',
                            conversation: 'hello',
                            image: require('../../assets/images/my-pic.jpg'),
                        },
                        {
                            id: 2,
                            name: 'Test Test',
                            conversation: 'bruh answer',
                            image: require('../../assets/images/my-pic.jpg'),
                        },
                    ]);
                }}
            />
        </Screen>
    );
};

export default MessagesScreen;
