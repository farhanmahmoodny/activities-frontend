import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import ActivitiesContainer from './components/activitiesContainer';
import Activity from './components/activity';

class App extends React.Component {
  state = {
    activities: [],
    names: [],
    images: [],
    activity: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/activities')
    .then(res => res.json())
    .then(activities => {
      this.setState({activities})
      activities.map(activity => this.setState({
        names: [...this.state.names, activity.name],
        images: [...this.state.images, activity.image]
      }))
    })
  }

  activityHandler = (activity) => {
    this.setState({activity: activity})
  }

  render() {
    // console.log(this.state.activities)
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (<ActivitiesContainer activities={this.state.activities} activityHandler={this.activityHandler}/>) }/>
          <Route exact path='/:id' render={() => (<Activity activity={this.state.activity}/>) }/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
