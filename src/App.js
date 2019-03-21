import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Draggable from 'react-draggable';
import logo from './logo.svg';
import './App.css';
import mergeImages from 'merge-images';
import mergeImg from 'merge-img'
import base64Img from "base64-img"
import Overlay from 'react-image-overlay'
import html2canvas from 'html2canvas';



class App extends Component {

  screenshot = () =>{
    let div = document.createElement("DIV")
    div.innerHTML = `<button onClick={this.screenshot}> Save Me</button>
    <button onClick={this.retake}> Retake Head Measurments</button>
    <button onClick={this.retake}> Readjust Glasses</button>`
    html2canvas(document.querySelector("#please"), {allowTaint: true}).then(function(canvas) {

    document.body.appendChild(canvas);
    document.body.appendChild(div)
});
  }
  state={
    image: null,
    pic: null,
    zeshawn: "https://pbs.twimg.com/media/CYsVZOzUEAAnHEr.jpg",
    hat: "",
    saved: false

  }

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
    console.log(document.querySelector('#black'))
  };



  onTakePhoto (dataUri) {
     // Do stuff with the dataUri photo...
     // var base64Str = dataUri;
     // var path ='/Users/marcusplenty/desktop/itri/my-project-client/src';
     // base64ToImage(base64Str,path)

     const imageSrc = dataUri
     console.log(imageSrc)
     this.setState({pic: imageSrc})


     // fetch('http://localhost:3000/api/v1/pictures', {method: "POST",
     //  headers: {
     //  "Content-Type": "application/json",
     //  "Accept": "application/json",
     //  },
     //  body: JSON.stringify({
     //    image_url: imageSrc
     //  })}).then(res => console.log(res.json()))
   }

   retake = () =>{
     this.setState({pic: null})
   }
  render() {
    return (
      <div className="App">
        {this.state.pic!=null?
          <div>
            <span> Move and readjust glasses to get a good fit </span>
            <div id="please">
              <img id="jump" src={this.state.pic}/>
              <Draggable onDrag={this.eventLogger}>
                <img src={"http://pngimg.com/uploads/glasses/glasses_PNG54356.png"} width="200" height="50"/>
              </Draggable>
            </div>
            <button onClick={this.screenshot}> Save Me</button>
            <button onClick={this.retake}> Retake Head Measurement </button>
          </div>:
          <div>
            <Camera onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } } />
            <p> take your photo for head measurements </p>
         </div>
      }

      </div>
    );
  }
}

export default App;
