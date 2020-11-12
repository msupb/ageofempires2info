import React from "react";
import ErrorBoundary from "./errorBoundary";

class ListBoundary extends ErrorBoundary {
  public render() {
    if (this.state.hasError) {
      return  <div className="container">
          <div className="error-container">
            <h1>Something went wrong with the List</h1>
          </div>
      </div>
    }

    return this.props.children;
  }
}

export default ListBoundary;