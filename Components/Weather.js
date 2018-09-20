import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Background from './bg.jpg'
import Forcast from './Forcast'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={Background} style={styles.backdrop}>
                    <Text>Zip code is {this.props.zipCode}.</Text>
                    <Forcast {...this.state.forecast} />
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%' },
});


