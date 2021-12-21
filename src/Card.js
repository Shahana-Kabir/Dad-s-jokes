import React, {Component} from "react";
import axios from "axios";

class Card extends Component{
    render(){
        return(
            <div>
                <img className = "card" src = {this.props.image} alt = {this.props.name}/ >
            </div>
        )
    }
}
export default Card;