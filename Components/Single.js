import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Share, Alert, Platform, ImageBackground} from 'react-native'
import { COLORS, icons, SIZES} from '../constants'
import {StarIcon, SingleBarIcon} from './Icons'
import HyperLink from './HyperLink'
import {connect} from 'react-redux'

class Single extends Component {
    constructor(props){
        super(props)
        this.film =  this.props.route.params.film
        this.toggleFavorite = this._toggleFavorite.bind(this)
    }

    _toggleFavorite() {
        const action = { type: "TOGGLE_FAVORITE", value: this.film }
        this.props.dispatch(action)
    }

    _displayFavoriteImage() {
        var sourceImage = icons.add_favorite
        var color = COLORS.white
        //var shouldEnlarge = false // Par défaut, si le film n'est pas en favoris, on veut qu'au clic sur le bouton, celui-ci s'agrandisse => shouldEnlarge à true
        if (this.props.favoritesFilm.findIndex(item => item.id === this.film.id) !== -1) {
          sourceImage = icons.is_favorite
          color = COLORS.primary 
          //shouldEnlarge = true // Si le film est dans les favoris, on veut qu'au clic sur le bouton, celui-ci se rétrécisse => shouldEnlarge à false
        }
        return (
            <SingleBarIcon icon={sourceImage} width={20} height={20} color={color} />
         /*<EnlargeShrink
            shouldEnlarge={shouldEnlarge}>
            <Image
              style={styles.favorite_image}
              source={sourceImage}
            />
         </EnlargeShrink>*/
        )
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
                <TouchableOpacity style={[styles.header_item, styles.isFavorite]} onPress={this.toggleFavorite}>
                    {this._displayFavoriteImage()}
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
        paddingTop: Platform.OS === 'ios'? 40 : 20,
        paddingBottom: 5,
        paddingHorizontal: SIZES.padding,
        position: 'absolute',
        zIndex: 999,
        backgroundColor: COLORS.transparentPrimary
    },
    header_item:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 30,
        borderRadius: 20,
        backgroundColor: COLORS.background2,
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
        //backgroundColor: COLORS.background1,
        backgroundColor: COLORS.transparentBackground,
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

const mapStateToProps = (state) =>{
    return {
        favoritesFilm: state.favoritesFilm
    }
} 
export default connect(mapStateToProps)(Single)