import React, {Component} from "react";
import axios from "axios";
import './Joke.css';
// import 'semantic-ui-css/semantic.min.css'
import ArrowKeysReact from 'arrow-keys-react';
import { ArrowDownward, ArrowUpward, BorderColor} from '@mui/icons-material';

class Joke extends Component{

    constructor(props){
            super(props);                
        } 
    getColor = ()=> {
        if(this.props.votes >= 15){
            return "#4CAF50";
        }
        else if(this.props.votes >= 12){
            return "#8BC34A";
        }
        else if(this.props.votes >= 9){
            return "##CDDC39";
        }
        else if(this.props.votes >= 6){
            return "#FFC107";
        }
        else if(this.props.votes >= 3){
            return "#FF9800";
        }
        else if(this.props.votes >= 0){
            return "#f44336";
        }
        else{
            return "#f44336";
        }
    }

    getEmoji = ()=> {
        if(this.props.votes >= 15){
            return "em em-rolling_on_the_floor_laughing";
        }
        else if(this.props.votes >= 12){
            return "em em-laughing";
        }
        else if(this.props.votes >= 9){
            return "em em-smiley";
        }
        else if(this.props.votes >= 6){
            return "em em-slightly_smiling_face";
        }
        else if(this.props.votes >= 3){
            return "em em-neutral_face";
        }
        else if(this.props.votes >= 0){
            return "em em-confused_face";
        }
        else{
            return "em em-angry";
        }
    }


    render(){
        return(<div className ="joke">
                <div className = "joke__buttons"> 
                    <ArrowDownward className = "joke__downWardArrow" onClick = {this.props.downArrowClicked} />
                    <ArrowUpward className = "joke__upWardArrow" onClick = {this.props.upArrowClicked}/>
                    <span className = "joke__votes" style = {{borderColor: this.getColor()}} >{this.props.votes}</span>
                    <i className = "fas fa-arrow-down"/>
                </div>
                <div className = "joke__text">
                    {this.props.text}
                </div>
                <div className = "joke__smiley"> 
                    <i className = {this.getEmoji()} aria-role="presentation" aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
                </div>
            </div>)
    }
}
export default Joke;