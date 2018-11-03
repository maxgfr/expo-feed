import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    WebView,
    Platform,
    Linking
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;

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
                <CardItem style={{ height: this.props.instagram ? scale(420) : scale(300) }}>
                { this.props.youtube ?
                  <WebView
                    javaScriptEnabled={true}
                    onShouldStartLoadWithRequest = {(event) => {
                        if (event.url !== 'https://www.youtube.com/embed/'+this.props.id_youtube) {
                            return false;
                        } else {
                            return true;
                        }
                    }}
                    source={{uri: 'https://www.youtube.com/embed/'+this.props.id_youtube}}
                  />
                  : null
                }

                { this.props.twitch_live ?
                    <WebView
                      javaScriptEnabled={true}
                      onShouldStartLoadWithRequest = {(event) => {
                          if (event.url !== 'https://player.twitch.tv/?volume=0.5&!muted&!autoplay&channel='+this.props.chaine_twitch) {
                              return false;
                          } else {
                              return true;
                          }
                      }}
                      source={{uri: 'https://player.twitch.tv/?volume=0.5&!muted&!autoplay&channel='+this.props.chaine_twitch}}
                    />
                  : null
                }

                { this.props.twitch_videos ?
                  <WebView
                    javaScriptEnabled={true}
                    onShouldStartLoadWithRequest = {(event) => {
                        if (event.url !== 'https://player.twitch.tv/?volume=0.5&!muted&!autoplay&video=v'+this.props.id_twitch_video+'&collection=&time=') {
                            return false;
                        } else {
                            return true;
                        }
                    }}
                    source={{uri: 'https://player.twitch.tv/?volume=0.5&!muted&!autoplay&video=v'+this.props.id_twitch_video+'&collection=&time='}}
                  />
                  : null
                }

                { this.props.twitch_clips ?
                    <WebView
                      javaScriptEnabled={true}
                      ref={(ref) => { this.videoPlayer = ref;}}
                      onShouldStartLoadWithRequest = {(event) => {
                          if (event.url !== 'https://clips.twitch.tv/embed?volume=0.5&!muted&!autoplay&clip='+this.props.id_twitch_clip) {
                              return false;
                          } else {
                              return true;
                          }
                      }}
                      source={{uri: 'https://clips.twitch.tv/embed?volume=0.5&!muted&!autoplay&clip='+this.props.id_twitch_clip}}
                    />
                  : null
                }

                { this.props.twitch_collections ?
                    <WebView
                      javaScriptEnabled={true}
                      onShouldStartLoadWithRequest = {(event) => {
                          if (event.url !== 'https://player.twitch.tv/?volume=0.5&!muted&!autoplay&video=v'+this.props.id_twitch_video+'&collection='+this.props.id_twitch_collection+'&time=') {
                              return false;
                          } else {
                              return true;
                          }
                      }}
                      source={{uri: 'https://player.twitch.tv/?volume=0.5&!muted&!autoplay&video=v'+this.props.id_twitch_video+'&collection='+this.props.id_twitch_collection+'&time='}}
                    />
                  : null
                }

                { this.props.instagram ?
                  <WebView
                    originWhitelist={['*']}
                    javaScriptEnabled={true}
                    onShouldStartLoadWithRequest = {(event) => {
                        if (event.url !== 'https://www.instagram.com/p/'+this.props.id_instagram_post+'/embed/captioned/') {
                            return false;
                        } else {
                            return true;
                        }
                    }}
                    source={{uri: 'https://www.instagram.com/p/'+this.props.id_instagram_post+'/embed/captioned/'}}
                  />
                  : null
                }

                { this.props.spotify_album ?
                  <WebView
                    originWhitelist={['*']}
                    javaScriptEnabled={true}
                    source={{ uri: 'https://open.spotify.com/embed/album/'+this.props.id_spotify }}
                    onShouldStartLoadWithRequest = {(event) => {
                        if (event.url !== 'https://open.spotify.com/embed/album/'+this.props.id_spotify) {
                            return false;
                        } else {
                            return true;
                        }
                    }}
                  />
                  : null
                }

                { this.props.spotify_playlist ?
                  <WebView
                    originWhitelist={['*']}
                    javaScriptEnabled={true}
                    source={{ uri: 'https://open.spotify.com/embed/user/'+this.props.id_user+'/playlist/'+this.props.id_spotify }}
                    onShouldStartLoadWithRequest = {(event) => {
                        if (event.url !== 'https://open.spotify.com/embed/user/'+this.props.id_user+'/playlist/'+this.props.id_spotify) {
                            return false;
                        } else {
                            return true;
                        }
                    }}
                  />
                  : null
                }

                { this.props.spotify_song ?
                  <WebView
                    originWhitelist={['*']}
                    javaScriptEnabled={true}
                    source={{ uri: 'https://open.spotify.com/embed/track/'+this.props.id_spotify }}
                    onShouldStartLoadWithRequest = {(event) => {
                        if (event.url !== 'https://open.spotify.com/embed/track/'+this.props.id_spotify) {
                            return false;
                        } else {
                            return true;
                        }
                    }}
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
