import React from 'react';
import { withRouter } from 'react-router-dom';

class ActivityCard extends React.Component {

  render() {
    return (
      <div className="activityCard" onClick={() => this.props.activityHandler(this.props.activity)}>
        <img src={this.props.activity.image}/>
      </div>
    )
  }

}

export default withRouter(ActivityCard);
