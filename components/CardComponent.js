import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView,
    Platform
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

import { Audio } from 'expo'

class CardComponent extends Component {

  async componentDidMount() {
        await Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            shouldDuckAndroid: false,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true
        })
        this.setState({loaded: true })
    }

    render() {

        return (
            <Card style={styles.container}>
                <CardItem>
                    <Left>
                        <Thumbnail source={this.props.thumbnail} />
                        <Body>
                            <Text style={{ fontWeight: "900" }}>{this.props.pseudo} </Text>
                            <Text note>{this.props.date}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 300 }}>
                    <WebView
                      javaScriptEnabled={true}
                      scalesPageToFit
                      domStorageEnabled={true}
                      mediaPlaybackRequiresUserAction={false}
                      source={{uri: 'https://www.youtube.com/embed/'+this.props.id_youtube}}
                    />
                </CardItem>
                <CardItem style={{ height: 30 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                            <Text> {this.props.likes}</Text>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                            <Text> {this.props.nb_commentaires}</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "900" }}>{this.props.pseudo} </Text>
                            {this.props.description}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    WebViewContainer: {
    marginTop: (Platform.OS == 'android') ? 20 : 0,
  }
});
