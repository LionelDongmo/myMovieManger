import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, ImageBackground, Animated, ScrollView, SafeAreaView} from 'react-native';
import {COLORS, SIZES, icons, images} from '../constants';
import {uriPopularMovie} from '../API/DRLmoviApi';
import {SingleBarIcon} from './Icons'

class Home extends Component {

    constructor(props){
        super(props)

    }

    _renderHeader(){
        return(
            <View style={styles.home_header}>
                {/** profile */}
                <TouchableOpacity onPress={()=>console.log("profile")} style={styles.home_profile}>
                    <Image source={images.profile_photo} style={{width: 40, height: 40, borderRadius: 20}} />
                </TouchableOpacity>
                {/** scren Mirror */}
                <TouchableOpacity onPress={()=>console.log("screen Mirrior")} style={styles.home_profile}>
                   <SingleBarIcon icon={icons.airplay} width={25} height={25} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.home_content}>
                <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background1}}>
                    {this._renderHeader()}
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    home_content:{
        marginTop: 20,
        backgroundColor: COLORS.background1,
    },
    home_header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding
    },
    home_profile:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50
    }
})
export default Home