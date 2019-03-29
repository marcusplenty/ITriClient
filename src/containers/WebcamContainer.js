import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import '../App.css'


class WebcamContainer extends Component {

  onTakePhoto (dataUri) {
     // Do stuff with the dataUri photo...
     // var base64Str = dataUri;
     // var path ='/Users/marcusplenty/desktop/itri/my-project-client/src';
     // base64ToImage(base64Str,path)

     const imageSrc = dataUri
     console.log(imageSrc)
     this.props.photoHandler(imageSrc)


     // fetch('http://localhost:3000/api/v1/pictures', {method: "POST",
     //  headers: {
     //  "Content-Type": "application/json",
     //  "Accept": "application/json",
     //  },
     //  body: JSON.stringify({
     //    image_url: imageSrc
     //  })}).then(res => console.log(res.json()))
   }


  render(){
    return(
      <Camera
      onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri)}}
      idealResolution = {{width: 450, height: 450}}
      sizeFactor={1}

      />
    )
  }

}

export default WebcamContainer;
