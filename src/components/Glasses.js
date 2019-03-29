import React, { Component } from 'react';
import Draggable from 'react-draggable';


class Glasses extends Component {
  render()  {
    return (
      <div className="Glasses" id={this.props.glasses.id} onClick={(e) => {this.props.displayChosen(e, this.props.glasses)}} >
          <img id="img-profile" className="img-circle" src={this.props.glasses.img_url} width="100" height="50" />
      </div>
      )
  }
}

export default Glasses;
