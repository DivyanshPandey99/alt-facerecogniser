import React, {Component} from "react";
import './Rank.css';

class Rank extends Component{
    render(){
        return (
            <div >
                <div className="nameText">
                    {"Divyansh, your current rank is..."}
                </div>
                <div className="rankText">
                    {"#5"}
                </div>
            </div>
        );
    }
}
export default Rank;