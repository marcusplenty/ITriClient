import React, { Component } from 'react';


class Picture extends Component {
  render()  {
    return (
      <div className="Picture" onClick={e => { this.props.savedImageHandler(this.props.picture)}} >
          <img id="pic-profile"  src={this.props.picture} width="100" height="100" />
      </div>
      )
  }
}

export default Picture;
