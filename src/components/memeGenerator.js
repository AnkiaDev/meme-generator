import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
        topText: "",
        botText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: ""
    };
  }

 componentDidMount() {
     fetch("http://i.imgflip.com/get_memes")
     .then(res => res.json())
     .then(data => this.setState({allMemeImgs: data}))
 }
  render() {
    return <div>
    {console.log(this.state.allMemeImgs)}
    </div>;
  }
}

export default MemeGenerator;
