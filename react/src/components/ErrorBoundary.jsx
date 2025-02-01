import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  // This lifecycle method will catch any error in child components
  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true, errorMessage: error.toString() };
  }

  // This method allows us to log the error if needed
  componentDidCatch(error, info) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI when there's an error
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    // Render children components when no error
    "hi"
    return this.props.children;
  }
}

export default ErrorBoundary;





// import React, { Component } from 'react'

// export default class ErrorBoundary extends Component {
//   constructor(props){
//     super(props)
//     this.state = {hasError:false}
//   }

//   static getDerivedStateFromError(error){
//     return {hasError:true}
//   }

//   componentDidCatch(error){
//     console.log("error",error);
    
//   }

//   render() {
//     if(this.state.hasError){
//       return <h1>got error</h1>
//     }
//     return this.props.children
//   }
// }

