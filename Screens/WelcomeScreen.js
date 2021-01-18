import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const [text, setText] = useState("");

    const searchFunction = async () => {
        try {
            let response = await fetch(
                `https://www.omdbapi.com/?t=${text}&apikey=9c71e39f`
            );
            let json = await response.json();
            navigation.navigate('Detail', { data: json });
            console.log(json)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/brandLogo.png")} />
            <Text>Search for a movie or webseries to get info about it.</Text>
            <TextInput style={styles.searchBar}
                placeholder="Type here!"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={searchFunction}
            >
                <Text style={{ color: 'white' }}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#025083',
        padding: 20,
        borderRadius: 15,
        textTransform: 'lowercase',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 10
    },
    searchBar: {
        margin: 10,
        height: 40,
        width: '100%',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1
    }
})

export default WelcomeScreen;