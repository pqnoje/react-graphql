import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './containers/Movies';
import AddMovie from './components/AddMovie';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Header/>
        <Movies/>
        <AddMovie/>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;