import React, { Component } from 'react';
import Picture from '../components/Picture'
import '../layouts/PictureContainer.css'

class PictureContainer extends Component {

  render(){
    return(
      <div className="PictureContainer">
      {this.props.savedPics.length == 0? null: this.props.savedPics.map(picture  =>{ return (<Picture picture={picture} savedImageHandler={this.props.savedImageHandler} />)}
      )}
      </div>
    )
  }

}

export default PictureContainer
