import * as React from "react"
import { QuickMenu, QuickButton } from "../quickui/quickui"

export default class PlayMenu extends React.Component {
    render() {
        return (
            <QuickMenu title="Spielen">
                <QuickButton text="Spiel erstellen" onPress={ this.createGame.bind(this) } />
                <QuickButton text="Spiel beitreten" onPress={ this.joinGame.bind(this) } />
            </QuickMenu>
        );
    }
    createGame() {
        this.props.navigation.push("CreateGame")
    }
    joinGame() {
        this.props.navigation.push("JoinGame")
    }
}