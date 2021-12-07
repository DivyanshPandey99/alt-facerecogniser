import React, {Component} from "react";
import Tilt from 'react-tilt';
import './Logo.css';
import face from './facial-recognition.png';
class Logo extends Component{
    render(){
        return (
            <div className="outDiv">
                <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                    <div className="Tilt-inner"> 
                        <img style={{"paddingTop":"0"}} src = {face} alt ="face-logo" width="100" height="100"></img> 
                    </div>
                </Tilt>
            </div>
        );
    }
}
export default Logo;
