import {View, Text, Image} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


export default function Boat({boatName, description, img}) {
    return (
        <>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center", gap: 10, borderTopWidth: 1, borderColor: "black"}}>
                <FontAwesome6 name="sailboat" size={20} color="black" />
                <Text style={{fontSize: 20}}>{boatName}</Text>
            </View>
            <Text>{description}</Text>
            <Image source={img} style={{flex: 1, width: 400, height: 500, marginBottom: 20}} />
        </>
    )
}