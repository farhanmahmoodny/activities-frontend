import React from 'react';
import { withRouter } from 'react-router-dom';
import ActivityCard from './activityCard';

class ActivitiesContainer extends React.Component {

  activityHandler = (activity) => {
    this.props.activityHandler(activity)
    this.props.history.push(`/${activity.id}`)
  }

  render(){
    let actCards = this.props.activities.map(activity => <ActivityCard activity={activity} key={activity.id} activityHandler={this.activityHandler}/>)
    return (
      <div>
        {actCards}
      </div>
    )
  }
}

export default withRouter(ActivitiesContainer);
