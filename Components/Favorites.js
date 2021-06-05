// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'
import {COLORS} from '../constants';
//import Avatar from './Avatar'

class Favorites extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        {/*<View style={styles.avatar_container}>
          <Avatar/>
        </View>*/}
        <FilmList
          films={this.props.favoritesFilm}
          navigation={this.props.navigation}
          favoriteList={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop:40,
    backgroundColor: COLORS.background1,
    paddingTop: 20
  },
  avatar_container: {
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
    //favoritesFilm: state.toggleFavorite.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)
