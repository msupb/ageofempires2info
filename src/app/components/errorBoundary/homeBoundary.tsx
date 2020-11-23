import React from "react";
import ErrorBoundary from "./errorBoundary";

class HomeBoundary extends ErrorBoundary {
  public render() {
    if (this.state.hasError) {
      return  <div className="container">
          <div className="error-container">
            <div>
              <h1>Something went wrong with the Home Component</h1>
              <p>{this.state.error.toString()}</p>
              <p>{this.state.errorInfo.componentStack}</p>
            </div>
          </div>
      </div>
    }

    return this.props.children;
  }
}

export default HomeBoundary;