// Animations/EnlargeShrink.js

import React from 'react'
import { Animated } from 'react-native'
import {SIZES } from "../constants"

class EnlargeShrink extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      positionTop: new Animated.Value(this._getSize())
    }
  }

  _getSize() {
    if (this.props.initialPosition != SIZES.height/2-30) {
      return 0
    }
    return SIZES.height/2-30
  }
  // La méthode componentDidUpdate est exécuté chaque fois que le component est mise à jour, c'est l'endroit parfait pour lancer / relancer notre animation.
  componentDidUpdate() {
    Animated.spring(
      this.state.positionTop,
      {
        toValue: this._getSize()
      }
    ).start()
  }

  render() {
    return (
        <Animated.View
          style={{ marginTop: this.state.positionTop }}>
          {this.props.children}
        </Animated.View>
    )
  }
}

export default EnlargeShrink
