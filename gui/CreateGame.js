import * as React from "react"
import { View, Dimensions, Text } from "react-native"
import QRCode from "react-native-qrcode"

export default class CreateGame extends React.Component {
    state = { link: "https://whoami.phucks.de/api/joingame/123456789abcdef" }
    /*constructor() {
        this.state = { link: "https://whoami.phucks.de/api/joingame/123456789abcdef" }
    }*/
    render() {
        return (
            <View>
                <View style={{ width: "80%" }}>
                    <QRCode value={this.state.link} size={ Dimensions.get("window").width } fgColor="white" bgColor="black"/>
                </View>
                <Text style={{ textAlign: "center", marginTop: 10 }}>{this.state.link}</Text>
            </View>
        );
    }
}