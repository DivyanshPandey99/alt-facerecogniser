import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';

import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '6563971f321442888d8003be43fbd2cf'
});

const particlesOptions = {
  particles: {
    number: {
      value:150,
      density:{
        enable:true,
        value_area:800
      }
    }
  },
  interactivity:{
    events: {
      onhover:{
      enable:true,
      mode:"repulse"
      }
    },
    detect_on:"canvas"
  }
}

class App extends Component{
  constructor(){
    super();
    this.state={
      input:"",
      imageURL:'',
      box:{},
      route:'signin',
      isSingedIn:false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }


  onInputChange = (event) =>{
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({imageURL:this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSingedIn:false})
    }else if(route === 'home'){
      this.setState({isSingedIn:true})
    }
    this.setState({route:route});
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles"
                params={particlesOptions}
        />
        <Navigation isSingedIn={this.state.isSingedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={this.state.box} imageURL={this.state.imageURL} />
            </div>
          : (
             this.state.route === 'signin'
             ? <Signin  onRouteChange={this.onRouteChange}/>
             : <Register onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
