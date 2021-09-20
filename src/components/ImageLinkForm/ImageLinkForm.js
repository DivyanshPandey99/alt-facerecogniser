import React, {Component} from "react";
import './ImageLinkForm.css';

class ImageLinkForm extends Component{
    render(){
        return(
            <div >
                <p className="text">{"This magic brain will detect faces in your picture"}</p>
                <div className="theParentDiv">
                    <div className="theParentDiv form">
                        <input type="text" onChange={this.props.onInputChange}></input>
                        <button className="button" onClick={this.props.onButtonSubmit}>Detect</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ImageLinkForm;