import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
          userInfo:{
            name:"dummy",
            location:"Kanpur",
            avatar_url:"https://avatars.githubusercontent.com/u/103443565?v=4"
          }
        }
        console.log(this.props.name+"constructor");
    }

    async componentDidMount( ){
        const data = await fetch("https://api.github.com/users/rachitgupta763");
        const json = await data.json();
        
        this.setState({
            userInfo:json,
        })
        console.log(this.props.name+"Component did mount");
        
      
    }
    componentDidUpdate(){
        console.log("Component did Update");
    }
    render(){
    const {name, location,avatar_url}= this.state.userInfo;
    console.log(this.props.name+"render");
    return (
        <div>
           <img src={avatar_url}></img>
           <h2>{name}</h2>
           <h2>{location}</h2>
        </div>
    )
   }
}

export default UserClass;