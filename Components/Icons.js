import React from "react"
import {
    View,
    Image,
} from "react-native"
import { COLORS} from "../constants"

export const TabIcon = ({ focused, icon }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 15,
                    height: 15,
                    tintColor: focused ? COLORS.white : COLORS.gray
                }}
            />
        </View>
    )
}

export const SearchIcon = ({icon}) =>{
    return (
        <View style={{ 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            padding: 10 , 
            }}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white,
                }}
            />
        </View>
    )
}

export const LoaderIcon = ({icon}) => {
    return(
        <Image
            source ={icon}
            resizeMode="contain"
            style={{
                width: 150,
                height: 150
            }}
        />
    ) 
}

export const StarIcon = ({icon}) => {
    return(
        <Image
            source ={icon}
            resizeMode="contain"
            style={{
                width: 15,
                height: 15
            }}
        />
    ) 
}
export const SingleBarIcon = ({icon, width=15, height=15, color=COLORS.white}) => {
    return(
        <Image
            source ={icon}
            resizeMode="contain"
            style={{
                width: width,
                height: height,
                tintColor: color
            }}
        />
    ) 
}