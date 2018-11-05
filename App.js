import React, { Component } from 'react';
import AppNav from './app/config/Navigation';
import * as actions from './app/src/actions';
import {connect} from 'react-redux';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);


 class App extends Component{
  componentDidMount() {
    this.props.fetchArticles();
    
  }


  render(){
    return(
      <AppNav />
    );
  }
}
function mapStateToProps({articles}){
  return {
 articles,
  }
}

export default connect(mapStateToProps, actions) (App);