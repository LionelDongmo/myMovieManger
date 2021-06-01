import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Share, Alert, Platform, ImageBackground} from 'react-native'
import { color } from 'react-native-reanimated'
import { COLORS, icons, SIZES} from '../constants'
import {StarIcon, SingleBarIcon} from './Icons'
import HyperLink from './HyperLink'

export default class Single extends Component {
    constructor(props){
        super(props)
        this.film =  this.props.route.params.film
    }

    infoFilmLabel(label, value){
        if(value !== ''){
            return(
                <View style={styles.info_item}>
                    <Text style={styles.label} > {label} </Text>
                    <Text style={styles.texte}> {value} </Text>
                </View>
            )
        }else{
            return null
        }
    }
    infoFilm(value){
        if(value !== ''){
            return(
                <View style={styles.info_itemRadus}>
                    <Text style={styles.texte}> {value} </Text>
                </View>
            )
        }else{
            return null
        }
    }
    infoFilmNote(){
        if(this.film.postMeta.note !== ''){
           return(
                <View style={styles.info_itemRadus}>
                    <StarIcon icon={icons.star} />
                    <Text style={styles.texte}> {this.film.postMeta.note} </Text>
                </View>
            ) 
        }else{
            return null
        }
    }

    subHeaderYeasLang(){
        return(
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10}} >
                {this.infoFilm(this.film.postMeta.dateSortie)}
                {this.infoFilmNote()}
                {this.infoFilm("FRENCH")}
            </View>
        )
    }

    SousHeaderGenrePays(){
        return(
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 10}} >
                {this.infoFilm(this.film.taxonomies.tag)}
                {this.infoFilm(this.film.taxonomies.genre)}
            </View>
        )
    }

    renderHeaderBar(){
        return(
            <View style={styles.heade_bar}>
                {/** Back button */}
                <TouchableOpacity style={[styles.header_item, styles.back]} onPress={()=> this.props.navigation.goBack()}>
                    <SingleBarIcon icon={icons.left_arrow} />
                </TouchableOpacity>
                {/** favoris */}
                <TouchableOpacity style={[styles.header_item, styles.isFavorite]} onPress={()=> {}}>
                    <SingleBarIcon icon={icons.add_favorite} width={25} height={25} />
                </TouchableOpacity>
                {/** share */}
                <TouchableOpacity style={[styles.header_item, styles.share]} onPress={()=> {}}>
                    <SingleBarIcon icon={Platform.OS === 'ios' ? icons.upload: icons.share} />
                </TouchableOpacity>
            </View>
        )
    }
    renderHeaderSectionB(){
        const image = { uri: this.film.imageUrl}
        return(
            <ImageBackground source={image} style={styles.header}>
               {this.renderHeaderBar()}
            </ImageBackground>
        )
    }

    renderHeaderBar(){
        return(
            <View style={styles.heade_bar}>
                {/** Back button */}
                <TouchableOpacity style={[styles.header_item, styles.back]} onPress={()=> this.props.navigation.goBack()}>
                    <SingleBarIcon icon={icons.left_arrow} />
                </TouchableOpacity>
                {/** favoris */}
                <TouchableOpacity style={[styles.header_item, styles.isFavorite]} onPress={()=> {}}>
                    <SingleBarIcon icon={icons.add_favorite} width={25} height={25} />
                </TouchableOpacity>
                {/** share */}
                <TouchableOpacity style={[styles.header_item, styles.share]} onPress={()=> {}}>
                    <SingleBarIcon icon={Platform.OS === 'ios' ? icons.upload: icons.share} />
                </TouchableOpacity>
            </View>
        )
    }
    renderHeaderSection(){
        const image = { uri: this.film.imageUrl}
        return(
            <View>
                <Image resizeMode="cover" source={image} style={styles.header} />
                {this.renderHeaderBar()}
            </View>
            
        )
    }

    render() {
        return (
            <View style={{position: 'relative'}}>
                {this.renderHeaderSection()}  
                <ScrollView style={StyleSheet.main_content}>  
                    <View style={styles.info_film} >
                        <View style={styles.info_content}>
                            {this.subHeaderYeasLang()}
                            <Text style={styles.title}> {this.film.title.rendered} </Text>
                            {this.SousHeaderGenrePays()}
                            {this.infoFilmLabel("Durée :", this.film.postMeta.duree)}
                            {this.infoFilmLabel("Réalisateur :", this.film.postMeta.Realisateur)}
                            {this.infoFilmLabel("Acteurs :", this.film.postMeta.Acteurs)}
                            <View style={styles.info_itemResum}>
                                <Text style={styles.label} > Resumé: </Text>
                                <Text style={styles.texte}> {this.film.postMeta.description} </Text>
                            </View>
                            <View style={styles.link_film}> 
                                <HyperLink url={this.film.postMeta.url} title= {"Voir | Télécharger"} />
                            </View>
                        </View>    
                    </View>    
                </ScrollView>
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        width: "100%",
        height: SIZES.height
    },
   
    heade_bar:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios'? 40 : 20,
        paddingHorizontal: SIZES.padding,
        position: 'absolute',
        zIndex: 999 
    },
    header_item:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: COLORS.transparentBlack,
    },
   
    main_content: {
       position: 'relative',
      // backgroundColor: COLORS.background1,
        flex: 1,
        zIndex: 5
    },
    info_film:{
       paddingTop: SIZES.height/1.45
    },
    info_content:{
        backgroundColor: COLORS.background1,
        paddingHorizontal: 10,
        paddingBottom: 30
    },
    title: {
      color: COLORS.primary,
      fontSize: SIZES.h2,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: COLORS.background2,
      padding: 5
    },
    info_item:{
        flexDirection: 'row',
        paddingVertical: 5
    },
    info_itemRadus:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: COLORS.transparentWhite,
        borderRadius: 5,
        marginHorizontal: 5
    },
    label: {
        color: COLORS.Secondary,
        fontWeight: 'bold',
        fontSize: SIZES.h3
    },
    texte:{
        color: COLORS.white,
        fontStyle: 'italic',
    },
    link_film: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
  });
  