import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Boat from './Boat'
import React from "react";

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{marginBottom: 20, textAlign: "center", fontWeight: "bold", fontSize: 20}}>GetABoat - For Sale</Text>
                <ScrollView>
                    <Boat boatName="Sea Ray 500 Sundancer"
                    description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    img={require('./img/sea_ray.jpg')}/>
                    <Boat boatName="Four Winns Horizon 180"
                          description="A sporty look and refined details truly set the Horizon 180 above all others."
                          img={require('./img/four_winns.jpg')}/>
                    <Boat boatName="Flipper 640 ST"
                          description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                          img={require('./img/flipper.jpg')}/>
                    <Boat boatName="Princess V48"
                          description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                          img={require('./img/princess.jpg')}/>
                    <Boat boatName="Bayliner 175 Bowrider"
                          description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                          img={require('./img/bayliner.jpg')}/>
                    <Boat boatName="Fairline Targa 47"
                          description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                          img={require('./img/fairline.jpg')}/>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;

