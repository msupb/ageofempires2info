import React from "react";
import ErrorBoundary from "./errorBoundary";

class DetailsBoundary extends ErrorBoundary { 
  public render() {
    if (this.state.errorInfo) {
      return  <div className="container">
          <div className="error-container">
            <div>
              <h1>Something went wrong with the Details</h1>
              <p>{this.state.error.toString()}</p>
              <p>{this.state.errorInfo.componentStack}</p>
            </div>
          </div>
      </div>
    }

    return this.props.children;
  }
}

export default DetailsBoundary;