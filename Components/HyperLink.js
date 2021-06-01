import React, { Component } from 'react';
import {
  Linking,
  Text,
  StyleSheet
} from 'react-native';
import {COLORS} from '../constants'

export default class HyperLink extends Component {

  constructor(){
      super();
      this._goToURL = this._goToURL.bind(this);
  }

  // static propTypes = {
  //   url: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  // }

  render() {

    const { title} = this.props;

    return(
      <Text style={styles.title} onPress={this._goToURL}>
          {title}
      </Text>
    );
  }

  _goToURL() {
    const { url } = this.props;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#acacac',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: COLORS.primary
  }
});