import React from 'react';
import {connect} from 'react-redux';
import {makeRequest} from '../actions/Actions';
import SomeComponent from '../components/SomeComponent';
class Home extends React.Component {
  componentDidMount() {
    return this.props.dispatch(makeRequest());
  }

  render() {
    return (
      <div className="container">
        <SomeComponent someText={this.props.someText} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    someText: state.someText.text,
  }),
  (dispatch) => ({dispatch}),
)(Home);
