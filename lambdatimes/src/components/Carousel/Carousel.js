import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
        images: [],
        currentImage: 0
    }
  }
  componentDidMount(){
    this.setState({images: carouselData})
  }

  leftClick = () => {
    if (this.state.currentImage <= 0) {
       return this.setState({currentImage: 0})
    } else {
      return this.setState({currentImage: this.state.currentImage - 1})
    }
  }

  rightClick = () => {
    if (this.state.currentImage >= 3) {
      return this.setState({currentImage: 3})
    } else {
      return this.setState({currentImage: this.state.currentImage + 1})
    }
  }

  selectedImage = () => {
    const image = this.state.images
    const showImage = image[this.state.currentImage]
    return <img src={showImage} style={{display: 'block'}}  alt='carousel'/>
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
          {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}