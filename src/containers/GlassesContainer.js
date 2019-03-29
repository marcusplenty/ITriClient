import React, { Component } from 'react';
import GlassesHeader from "../components/GlassesHeader"
import '../layouts/GlassesContainer.css'
import WebcamContainer from './WebcamContainer'
import Glasses from "../components/Glasses"

class GlassesContainer extends Component{


render(){
  return(
      <div className="GlassesContainer">
        <GlassesHeader/>
        {this.props.glasses.length == 0? null: this.props.glasses.map(glasses =>{ return (<Glasses glasses={glasses} displayChosen={this.props.displayChosen}/>)}
        )}
      </div>

  )
}

}

export default GlassesContainer
