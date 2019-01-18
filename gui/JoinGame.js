import * as React from "react"
import { QRCodeScanner } from "react-native-qrcode-scanner"

export default class JoinGame extends React.Component {
    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess.bind(this)}
                topContent={
                    <Text style={styles.centerText}>
                        Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>OK. Got it!</Text>
                    </TouchableOpacity>
                }
            />
        );
    }
}