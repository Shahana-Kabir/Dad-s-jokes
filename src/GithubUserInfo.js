import React, {Component} from "react";
import axios from "axios";

class GitHubUserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    async componentDidMount(){
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        let data = response.data;
        console.log(data);
        this.setState({imgUrl: data.avatar_url, name: data.name})

    }
    render(){
        return(
            <div>
                <h1>
                    GitHub user:{this.state.name}
                </h1>
                <img src = {this.state.imgUrl} />
                
            </div>
        )
    }
}
export default GitHubUserInfo;