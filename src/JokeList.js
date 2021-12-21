import React, {Component} from "react";
import axios from "axios";
import Joke from "./Joke";
import './JokeList.css';
import imoji from './laugh.png';
const uuid = require('uuid').v4;

const joke_api = "https://icanhazdadjoke.com/";

class JokeList extends Component {
    

    static defaultProps = {
        numJokesToGet: 10
    }

    constructor(props){
        super(props);
        this.state = {jokes: []}
    }

    


    async componentDidMount(){             
       
        let jokes = [];
        while(jokes.length<this.props.numJokesToGet){
            let res = await axios.get("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json"
                }
            });
           jokes.push({id: uuid(), joke: res.data.joke, votes: 0}); 
           console.log(res.data);
        }
       
        this.setState({jokes: jokes});
        
    }


    handleVote = (id, delta)=>{
        this.setState(
            st => ({jokes: st.jokes.map(j => j.id === id? {...j, votes: j.votes + delta} : j)})
        )

    }
    
    render(){
        console.log(this.state.jokes);
        return(
            <div className = "JokeList">
                <div className = "JokeList__sideBar">
                    <h1 className = "JokeList__sideBar__title">Dad's jokes</h1>
                    <img className = "JokeList__sideBar__image" src = {imoji}/>
                    <button className = "JokeLIst__sideBar__button">New Jokes</button>
                </div>
                <div className = "JokeList__jokes">
                {this.state.jokes.map(j => <Joke key= {j.id} text = {j.joke} votes = {j.votes} downArrowClicked = {()=> this.handleVote(j.id, -1)} upArrowClicked = {()=> this.handleVote(j.id,1)}/>)}
                </div>
                </div>
        )
    }
}
export default JokeList;