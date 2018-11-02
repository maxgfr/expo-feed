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

class CardComponent extends Component {

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
                { this.props.youtube ?
                  <WebView
                    javaScriptEnabled={true}
                    scalesPageToFit
                    domStorageEnabled={true}
                    mediaPlaybackRequiresUserAction={false}
                    source={{uri: 'https://www.youtube.com/embed/'+this.props.id_youtube}}
                  />
                  : null
                }

                { this.props.twitch_live ?
                    <WebView
                      javaScriptEnabled={true}
                      scalesPageToFit
                      domStorageEnabled={true}
                      mediaPlaybackRequiresUserAction={false}
                      source={{uri: 'https://player.twitch.tv/?volume=0.5&!muted&!autoplay&channel='+this.props.chaine_twitch}}
                    />
                  : null
                }

                { this.props.twitch_videos ?
                  <WebView
                    javaScriptEnabled={true}
                    scalesPageToFit
                    domStorageEnabled={true}
                    mediaPlaybackRequiresUserAction={false}
                    source={{uri: 'https://player.twitch.tv/?volume=0.5&!muted&!autoplay&video=v'+this.props.id_twitch_video+'&collection=&time='}}
                  />
                  : null
                }

                { this.props.twitch_clips ?
                    <WebView
                      javaScriptEnabled={true}
                      scalesPageToFit
                      domStorageEnabled={true}
                      mediaPlaybackRequiresUserAction={false}
                      source={{uri: 'https://clips.twitch.tv/embed?volume=0.5&!muted&!autoplay&clip='+this.props.id_twitch_clip}}
                    />
                  : null
                }

                { this.props.twitch_collections ?
                    <WebView
                      javaScriptEnabled={true}
                      scalesPageToFit
                      domStorageEnabled={true}
                      mediaPlaybackRequiresUserAction={false}
                      source={{uri: 'https://player.twitch.tv/?volume=0.5&!muted&!autoplay&video=v'+this.props.id_twitch_video+'&collection='+this.props.id_twitch_collection+'&time='}}
                    />
                  : null
                }

                { this.props.instagram ?
                    <WebView
                      javaScriptEnabled={true}
                      scalesPageToFit
                      domStorageEnabled={true}
                      mediaPlaybackRequiresUserAction={false}
                      source={{uri: 'https://www.instagram.com/p/'+this.props.id_instagram_post}}
                    />
                  : null
                }

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
