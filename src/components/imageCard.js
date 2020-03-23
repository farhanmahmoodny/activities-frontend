import React from 'react';
import { withRouter } from 'react-router-dom';

class ImageCard extends React.Component {

  clickHandler = () => {
    let audio = new Audio(`${this.props.activity.audio}`)
    audio.play()
  }

  render() {
    return (
      <div className="imageCard">
        <img src={this.props.activity.img} onClick={this.clickHandler}/>
      </div>
    )
  }
}

export default withRouter(ImageCard);
