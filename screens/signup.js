import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Feather';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
export default class signup extends React.Component {
    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }
    state = {
        username: "",
        email: '',
        password: "",
        errMsg: "",
        showPass: true,
        press: false
    }

    showPass() {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        }
        else {
            this.setState({ showPass: true, press: false })
        }
    }

    doLogin() {
        if (this.state.username == 'Ahmed' && this.state.email == 'Ahmed@yahoo.com' && this.state.password == '123') {
            this.props.navigation.navigate('login')

        }
        else {
            this.validateInput.current.shake(800)
            this.setState({ errMsg: 'Invalid login details. Try again!' })
        }
    }
    render() {
        return (
            <ImageBackground source={require('../assets/70.jpg')} style={styles.background}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
                    <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} behavior='position' keyboardVerticalOffset={-300}>
          
            
            <View style={styles.container}>
                {/*    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 25 }}>Food App </Text>
                    <Image source={require('../assets/food-truck.png')} style={{ width: 45, height: 45, resizeMode: 'contain' }} />
                </View> */}

                <Text style={{ fontSize: 25, color: 'white', marginTop: 15, alignSelf: 'center', }}>Sign up</Text>
                <Text style={{ fontSize: 16, color: 'white', marginTop: 8, alignSelf: 'center', }}>Food for everyone</Text>
                <Animatable.View ref={this.validateInput}>

                    <TextInput
                        placeholder="Your name"
                        placeholderTextColor='#e0e0e0'
                        style={styles.input}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ username: text })
                        }}
                    />
                    <TextInput
                        placeholder="Your email"
                        placeholderTextColor='#e0e0e0'
                        style={styles.input}
                        keyboardType="email-address"
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ email: text })
                        }}
                    />
                    <View style={{ flexDirection: 'row', borderBottomWidth: 1,borderBottomColor: '#ddd', }}>

                        <View style={{ flexDirection: 'column',width:"90%" }}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor='#e0e0e0'
                                style={{ ...styles.input, width: "100%" , borderBottomWidth:0,}}
                                secureTextEntry={this.state.showPass}
                                onChangeText={(text) => {
                                    this.setState({ errMsg: '' }),
                                        this.setState({ password: text })
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column',marginTop:45 }}>
                            <TouchableOpacity onPress={this.showPass.bind(this)}
                                style={styles.btnEye}>
                                <Icon
                                    name={this.state.press == false ? 'eye-off' : 'eye'}
                                    size={20}
                                    color={'#e0e0e0'} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <Text style={{ color: '#F72D2A', textAlign: 'center', marginTop: 10, fontWeight:'bold' }}>{this.state.errMsg}</Text>

                </Animatable.View>


                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

                    <TouchableOpacity onPress={() => this.doLogin()}
                        style={styles.loginTouch}>
                        <Text style={{ color: 'white', fontSize: 17, textAlign: 'center' }}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: 60 }}>
                        <View style={styles.social}>
                            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>f</Text>
                        </View>

                        <View style={{ ...styles.social, backgroundColor: '#f44336', marginHorizontal: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>G</Text>
                        </View>

                        <View style={{ ...styles.social, backgroundColor: '#1565c0' }}>
                            <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>in</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ color: 'white' }}> Already have account? </Text>
                        <Text onPress={() => this.props.navigation.navigate('login')}
                            style={{ fontWeight: 'bold',color: 'white' }}>Login</Text>
                    </View>

                </View>
            </View>
            </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
/*         backgroundColor: 'white', */
        padding: 10,
        paddingLeft:50,
        paddingRight:50
    },
    input: {
        marginTop: 40,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingBottom: 20,
        color:'white'
    },
    loginTouch: {
        width: 200,
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: '#FF9800',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20
    },
    social: {
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#3f51b5',
        alignItems: 'center'
    },
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        position: 'absolute',
      },
})