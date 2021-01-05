import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Keyboard, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, BackHandler } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


export default class onboarding extends React.Component {


    render() {


        return (


            <Onboarding
            /* DotComponent={Dots} */
            onSkip={() => this.props.navigation.replace("signup")}
            onDone={() => this.props.navigation.navigate("signup")}
                pages={[
                    {
                        backgroundColor: '#F7D1B1',
                        image: <Image source={require('../assets/options.png')} style={{width:400,height:220,resizeMode:'contain'}} />,
                        title: 'Healthy Options',
                        subtitle: "Control your diet with healthy ingredients",
                    },
                    {
                        backgroundColor: '#FFE082',
                        image: <Image source={require('../assets/ice.png')} style={{width:300,height:220,resizeMode:'contain'}} />,
                        title: 'Only what you love',
                        subtitle: 'Your favorite food is one click away from you',
                    },
                  
                    {
                        backgroundColor: '#FFC373',
                        image: <Image source={require('../assets/event.png')}  style={{width:400,height:220,resizeMode:'contain'}}/>,
                        title: 'Food is love',
                        subtitle: 'Share your favorite meal with your loved ones',
                    },

                ]}
            />


        );
    }
}


const styles = StyleSheet.create({

});
