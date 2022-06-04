import { StyleSheet, Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
    navigation,
}: RootTabScreenProps<'TabOne'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One Edited</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
