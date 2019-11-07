import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      botText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        const { memes } = data.data;
        console.log(memes[1]);
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault()
    const randomNbr = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const newRandomImg = this.state.allMemeImgs[randomNbr].url
    this.setState({randomImg: newRandomImg})
  }

  render() {
  
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          
          <input
            type="text"
            name="botText"
            value={this.state.botText}
            placeholder="Bot Text"
            onChange={this.handleChange}
          />

          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt=""/>
         <h2 className="top">{this.state.topText}</h2>
         <h2 className="bottom">{this.state.botText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
