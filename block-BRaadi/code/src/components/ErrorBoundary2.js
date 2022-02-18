import React from 'react';

export default class ErrorBoundary2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error){
    return {
      hasError: true
    }
  }

  render(){
    if(this.state.hasError){
      return (
        <h1>An Error Occurred!!</h1>
      )
    }
    return this.props.children;
  }
}