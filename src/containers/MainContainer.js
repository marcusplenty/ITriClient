import React, { Component } from 'react';
import WebcamContainer from './WebcamContainer'
import Header from '../components/Header'
import GlassesContainer from './GlassesContainer'
import PictureContainer from './PictureContainer'
import Glasses from "../components/Glasses"
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';

let x = 1
let counter = 0



class MainContainer extends Component {


  state={
    glassList: [],
    chosen: {},
    headpic: null,
    savedImage: null,
    savedPics: [],
    saveToggle: true,
    canvas: null,
    buttonToggle: false,

  }


  


  reset = () => {
    let img = document.body.querySelector("canvas")
    console.log(img)
    if (img != null){
      console.log(img)
      document.body.removeChild(img)
    }
    this.setState({
      savedImage: null,
      headpic: null,
      saveToggle: true,
      buttonToggle: false
    })

  }


retake = () => {
  this.setState({
    savedImage: null,
    buttonToggle: true,
    saveToggle: true
  } )

}

  sendToPictures = () => {

    this.setState({
      savedPics: [...this.state.savedPics, this.state.savedImage],
      saveToggle: false,
      buttonToggle: false
    })

  }

  convertCanvasToImage = () => {
  let img1= document.body.querySelectorAll("canvas")
  if (img1.length == 2){
    document.body.removeChild(img1[0])
  }
  let img= document.body.querySelectorAll("canvas")[0]
  console.log(img)
  if (this.state.savedImage == null){
    var image = new Image();
    image.crossOrigin = "Anonymous"
    image.src = img.toDataURL();
    this.setState({
      savedImage: image.src,
      buttonToggle: false
    })
    document.body.removeChild(img)
  }
  counter++

}

  screenshot = () =>
  {
    console.log(this.state)
    if (this.state.savedImage != null){
      console.log(7)
    }
    let div = document.createElement("DIV")
    html2canvas(document.querySelector("#pic-glasses"), {useCORS: true} ).then(function(canvas) {
    document.body.appendChild(canvas);
    document.body.appendChild(div)
}).then(c=> {
  this.convertCanvasToImage()
  })

}


  photoHandler = (picture) => {

    this.setState({
      headpic: picture,
      buttonToggle: true
    })
  }

  savedImageHandler = (picture) => {
    console.log(picture)

    this.setState({
      savedImage: picture,
    })
  }


  componentDidMount(){
    fetch("http://localhost:3000/api/v1/specs")
    .then(r => r.json())
    .then(glasses => this.setState({
      glassList: glasses
    }))
  }
  displayChosen = (e, glasses) => {
    this.setState({
      chosen: glasses
    })
  }

  render(){
    return(
      <div>
        <Header/>
        <div className="MainContainer">
          <GlassesContainer glasses={this.state.glassList} displayChosen={this.displayChosen}/>
          {this.state.headpic == null ?
          <div>
          <WebcamContainer photoHandler={this.photoHandler}/>
        </div>

           :
          <div id="pic/glasses/buttons">
            <div id="pic-glasses">
              {this.state.savedImage == null ?
              <div id="please1">
                <img  id="starter" crossOrigin="Anonymous" src={this.state.headpic} width="450" height="350"/>
                <Draggable>
                  <img id="mover" src="https://res.cloudinary.com/itri/image/upload/v1553758893/glasses_PNG54356.png" width="220" height="50"/>
                </Draggable>
              </div>
              :
              <div >
                <img src={this.state.savedImage} width="475" height="350"/>
                <div className="btns">
                  {this.state.saveToggle? <button  className="btns" onClick={this.sendToPictures}> Send to Pictures Container</button> : null}
                  <button className="btns" onClick={this.reset}> Retake Head Measurments</button>
                  <button className="btns" onClick={this.retake}> Readjust Glasses</button>
                </div>
              </div>
              }
            </div>
            {this.state.buttonToggle == true?
              <div>
              <button onClick={this.reset}> Remeasure Head </button>
              <button onClick={this.screenshot}> Save Me</button>
              </div> : null
            }
          </div>

          }

        </div>
            {console.log(this.state.savedPics)}
            {console.log(this.state.canvas)}
        <PictureContainer savedPics={this.state.savedPics} savedImageHandler={this.savedImageHandler}/>
        <div>
        </div>
      </div>

    )
  }

}

export default MainContainer;
