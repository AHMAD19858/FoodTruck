import React from 'react'
import { View, Image, Picker, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from "@expo/vector-icons/Entypo"
import Product from '../components/product'

export default class Home extends React.Component {
    state = {
        city: "Los Angeles"
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: "#FFF" }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 40,
                    marginHorizontal: 20
                }}>
                    <View style={{ width: "10%" }}>
                        <Image
                            source={require('../assets/1.png')}
                        />
                    </View>
                    <View style={{
                        width: "80%",
                        alignItems: "center"
                    }}>
                        <Picker
                            selectedValue={this.state.city}
                            style={{ height: 50, width: 160 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ city: itemValue })
                            }
                        >
                            <Picker.Item
                                label="Alexandria"
                                value="Alexandria"
                                style={{ fontWeight: "bold" }}
                            />
                            <Picker.Item
                                label="Cairo"
                                value="Cairo"
                                style={{ fontWeight: "bold" }}
                            />
                            <Picker.Item
                                label="Dahab"
                                value="Dahab"
                                style={{ fontWeight: "bold" }}
                            />

                            <Picker.Item
                                label="Luxor"
                                value="Luxor"
                                style={{ fontWeight: "bold" }}
                            />
                        </Picker>
                    </View>
                    <View style={{ width: "10%" }}>
                        <Icon name="magnifying-glass" size={30} />
                    </View>
                </View>


                <View style={{
                    paddingHorizontal: 20,
                    marginTop: 50
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color:"#FF9800"
                    }}>Your Favorite</Text>
                    <Text style={{
                        fontSize: 35,
                        fontWeight: "bold"
                    }}>FOOD TRUCK</Text>
                </View>


                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 40 }}
                >
                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#FF9800",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../assets/5.png')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 10
                        }}>
                            Burgers
                       </Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#FFF3E0",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../assets/14.png')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 10
                        }}>
                            Breads
                       </Text>
                    </View>
                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#FFF3E0",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../assets/10.png')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 10
                        }}>
                            Burrito
                       </Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#FFF3E0",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../assets/7.png')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 10
                        }}>
                            Salads
                       </Text>
                    </View>

                    <View style={{
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#FFF3E0",
                        marginHorizontal: 15,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}>
                        <Image
                            source={require('../assets/6.png')}
                            style={{ height: 40, width: 40 }}
                        />
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            paddingLeft: 10
                        }}>
                            Pizza
                       </Text>
                    </View>
                </ScrollView>
                <View style={{
                    alignItems: "center",
                    marginHorizontal: 20,
                    flexDirection: "row",
                    marginTop: 40
                }}>
                    <View style={{
                        width: "50%"
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>New Products</Text>
                    </View>
                    <View style={{
                        width: "50%",
                        alignItems: "flex-end"
                    }}>
                        <Icon
                            name="dots-three-horizontal"
                            size={22}
                            color="#848385"
                        />
                    </View>
                </View>


                <View style={{
                    flexDirection: "row",
                    marginHorizontal: 15,
                    marginTop: 30,
                    justifyContent:"center"
                }}>
                    <Product
                        image={require("../assets/4.png")}
                        title="Smokehouse"
                        onPress={() => this.props.navigation.navigate('Details')}
                    />
                    <Product
                        image={require("../assets/50.png")} 
                        title="Pan Pizza"
                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    marginHorizontal: 15,
                    marginTop: 30,
                    justifyContent:"center"
                }}>
                    <Product
                        image={require("../assets/6.png")}
                        title="Adios Pizza"
                    />
                    <Product
                        image={require("../assets/10.png")}
                        title="Burrito"
                    />
                </View>
            </ScrollView>
        )
    }
}
