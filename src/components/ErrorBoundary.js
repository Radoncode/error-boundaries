import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          hasError: false
         };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
        return { 
            hasError: true
         };
    }
  
    componentDidCatch(error, info) {
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
      //logComponentStackToMyService(info.componentStack);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return  (
            <div className="col bg-danger">
                <p style={{color: '#ffffff'}}>Oups, we have a problem!</p>
            </div>
        )
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary;