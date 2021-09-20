import React, {Component} from "react";
import "./Navigation.css";

class Navigation extends Component{
    render(){
        if(this.props.isSingedIn){
            return(
                <nav style={{"display":"flex", "justifyContent":"flex-end"}}>
                <p onClick={() => this.props.onRouteChange('signout')} className="SignOut">Sign out</p>
                </nav>
            )
        }else{
            return (
                <nav style={{"display":"flex", "justifyContent":"flex-end"}}>
                    <p onClick={() => this.props.onRouteChange('signin')} className="SignOut">Sign In</p>
                    <p onClick={() => this.props.onRouteChange('register')} className="SignOut">Register</p>
                </nav>
            );
        }
    }
}
export default Navigation;