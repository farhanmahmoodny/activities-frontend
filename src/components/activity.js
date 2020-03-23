import React from 'react';
import { withRouter } from 'react-router-dom';
import ImageCard from './imageCard'

class Activity extends React.Component {

    render() {
      // console.log(this.props.activity.alphabets)
      let imageCards = this.props.activity.alphabets.map(act => <ImageCard activity={act}/>)
      return (
        <div>
          {imageCards}
        </div>
      )
    }
}

export default withRouter(Activity);
