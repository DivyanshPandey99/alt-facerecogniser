import React, {Component} from "react";
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';
class Logo extends Component{
    render(){
        return (
            <div className="outDiv">
                <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                    <div className="Tilt-inner"> 
                        <img style={{"paddingTop":"0"}} src = {brain} alt ="brain-logo"></img> 
                    </div>
                </Tilt>
            </div>
        );
    }
}
export default Logo;