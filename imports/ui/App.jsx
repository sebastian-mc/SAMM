import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createContainer} from 'meteor/react-meteor-data';

import Room from './Room.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {
        id: "B62",
        tempo: 120,
        key: "A#",
        progression: ["I", "V", "vi", "IV"],
        band: "Blue Eagle",
        drums: {
          user: "BlaBla",
          pattern: [
            "x---x---x---x---",
            "x---x-x-x---x-x-",
            "----------------",
            "----------------"
          ]
        }
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Room song={this.state.song}/>
      </div>
    );
  }
}

App.propTypes = {};

export default createContainer(() => {
  return {/*Props*/
  };
}, App);
