// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, icons, SIZES} from '../constants'
import {StarIcon} from './Icons'
//import FadeIn from '../Animations/FadeIn'

class FilmItem extends React.Component {

  /*_displayFavoriteImage() {
    if (this.props.isFilmFavorite) {
      // Si la props isFilmFavorite vaut true, on affiche le 🖤
      return (
        <Image
          style={styles.favorite_image}
          source={require('../Images/ic_favorite.png')}
        />
      )
    }
  } */

  render() {
    const { film, displayDetailForFilm } = this.props
    return (
        <TouchableOpacity
          style={styles.main_container}
          onPress={() => displayDetailForFilm(film)}>
          <View style={styles.thumb_container}>  
            <Image
              style={styles.image}
              source={{uri: film.imageUrl}}
            />
            <Text style={styles.date_sortie} > {film.postMeta.dateSortie} </Text>
          </View>  
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{film.title.rendered}</Text>
              {/*this._displayFavoriteImage()*/}
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={5}>{film.postMeta.description}</Text>
            </View>
            <View style={styles.film_moreInfo }>
              <View style={{flexDirection: 'row'}} >
                <StarIcon icon={icons.star} /> 
                <Text style={{color: COLORS.white}}> {film.postMeta.note} </Text>
              </View> 
              <Text style={styles.lang_text}> French </Text>
            </View>
          </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 180,
    flexDirection: 'row',
    backgroundColor: COLORS.background2,
    margin: 8
  },
  thumb_container: {
    position: 'relative'
  },
  image: {
    width: 120,
    height: 180,
    zIndex: 1
  },
  date_sortie:{
    position: 'absolute',
    zIndex: 5,
    padding: 3,
    color: COLORS.white,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderRadius: 2,
    backgroundColor: COLORS.primary
  },
  content_container: {
    flex: 1,
    margin: 5,
    backgroundColor: COLORS.background2
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: SIZES.h3,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    fontSize: SIZES.font,
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: SIZES.font
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  },
  lang_text:{
    color: COLORS.Secondary
  },
  film_moreInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default FilmItem
