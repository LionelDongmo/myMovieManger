import React from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity, LogBox} from 'react-native';
import { uriSearchedText } from '../API/DRLmoviApi'
import FilmList from './FilmList'
import { COLORS,  icons, SIZES } from "../constants"
import { SearchIcon, LoaderIcon } from "./Icons"
import TranslateY from '../Animations/TranslateY'


class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          films: [],
          isLoading: false,
        }
        this.searchedText = ""
        this.page = 0
        this.totalPages = 0
        this.onPressFindMovie = this._searchFilms.bind(this)
        this.loadFilms = this._loadFilms.bind(this)
        this.initialPosition = SIZES.height/2-30
    }

    componentDidMount(){
      //LogBox.ignoreLogs(['Animated: `useNativeDriver`'])
    }
    _loadFilms() {
      if (this.searchedText.length > 0) {
        this.setState({ isLoading: true })
        fetch(uriSearchedText(6, this.page+1, this.searchedText)) 
          .then((response) => {
            this.totalPages = response.headers.get('X-WP-TotalPages') 
            return response.json()
          })
          .then((json) => {
            this.setState({
              films: [ ...this.state.films, ...json],
              isLoading: false
            })
           this.page += 1
          }) 
        .catch((error) => console.error(error))
      }
    }
  
    _searchTextInputChanged(text) {
      this.searchedText = text
    }
  
    _searchFilms() {
      this.page = 0
      this.totalPages = 0
      this.initialPosition = 0
      this.setState({
        films: [],
      }, () => {
          this._loadFilms()
      })
    }
  
    _displayDetailForFilm = (idFilm) => {
      console.log("Display film with id " + idFilm)
      this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }
  
    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <LoaderIcon icon={icons.loader} />
          </View>
        )
      }
    }



  render() {
    return (
      <View style={styles.mainContent}>
        <TranslateY initialPosition = {this.initialPosition}>
          <View style={styles.searchBar}>
            <TextInput  
              style={styles.textInput} 
              placeholder="Titre du film"
              onChangeText={(text) => this._searchTextInputChanged(text)}
              onSubmitEditing={this.onPressFindMovie}
            /> 
            <TouchableOpacity style={styles.touchable} onPress={this.onPressFindMovie}  >
              <SearchIcon icon={icons.search} />
            </TouchableOpacity> 
          </View>
        </TranslateY>
        <FilmList
          films={this.state.films}
          navigation={this.props.navigation}
          loadFilms={this.loadFilms}
          page={this.page}
          totalPages={this.totalPages}
          //favoriteList={false} // Ici j'ai simplement ajouté un booléen à false pour indiquer qu'on n'est pas dans le cas de l'affichage de la liste des films favoris. Et ainsi pouvoir déclencher le chargement de plus de films lorsque l'utilisateur scrolle.
        />
        {this._displayLoading()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContent : {
        flex : 1,
        backgroundColor: COLORS.background1,
        paddingBottom: 37,
        marginTop: 40
    },
    searchBar:{
      flexDirection: 'row',
      //marginTop: null,
    },
    textInput: {
      flex: 5,
      color: COLORS.primary,
      borderWidth: 1,
      borderColor: COLORS.primary,
      backgroundColor: COLORS.white,
      paddingLeft: 15
    },
    touchable: {
      flex: 1,
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    }
})

export default Search;
