import React from "react";
import ErrorBoundary from "./errorBoundary";

class ListBoundary extends ErrorBoundary {
  public render() {
    if (this.state.hasError) {
      return  <div className="container">
          <div className="error-container">
            <div>
              <h1>Something went wrong with the List</h1>
              <p>{this.state.error.toString()}</p>
              <p>{this.state.errorInfo.componentStack}</p>
            </div>
          </div>
      </div>
    }

    return this.props.children;
  }
}

export default ListBoundary;