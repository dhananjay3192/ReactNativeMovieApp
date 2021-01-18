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
import { AccordionList } from "accordion-collapse-react-native";


const DetailScreen = ({ navigation, route }) => {

    const information = {
        list: [
            {
                id: 1,
                title: 'Cast',
                body: `${route.params.data.Actors}`
            },
            {
                id: 2,
                title: 'Crew',
                body: `Writer: ${route.params.data.Writer}, Director: ${route.params.data.Director}, Production: ${route.params.data.Production}`
            },
            {
                id: 3,
                title: 'Box-office & Awards',
                body: `${route.params.data.Awards}, Box-Office: ${route.params.BoxOffice == undefined ? 'N/A' : route.params.BoxOffice} `
            },
            {
                id: 4,
                title: 'More',
                body: `Language: ${route.params.data.Language}, Country: ${route.params.data.Country}`
            },

        ]
    }
    const head = (item) => {
        return (
            <View style={{ marginTop: 10 }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', backgroundColor: '#207398' }}>{item.title}</Text>
            </View>
        );
    }

    const body = (item) => {
        return (
            <View style={{ padding: 10 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>{item.body}</Text>
            </View>
        );
    }
    return (
        <View style={styles.container} >
            <Image source={{ uri: route.params.data.Poster }}
                style={{ width: 400, height: 400, marginTop: 5 }} />

            <View style={styles.info}>
                <Text style={styles.font}>{route.params.data.Title}</Text>
                <Text style={styles.font}>({route.params.data.Year})</Text>
                <Text style={styles.font}>IMDb Ratings: ({route.params.data.imdbRating})</Text>
                <Text style={styles.font}>{route.params.data.Runtime}</Text>

            </View>
            <View>
                <Text style={styles.plot}>{route.params.data.Plot}</Text>
            </View>
            <AccordionList
                list={information.list}
                header={head}
                body={body}

                style={{ marginTop: 20, alignSelf: 'flex-start', width: '100%', backgroundColor: '#03203C' }}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#025083"
    },
    font: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    info: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'space-evenly'
    },
    plot: {
        marginTop: 15,
        fontSize: 15,
        color: 'white',
        fontStyle: 'italic'
    }
})

export default DetailScreen