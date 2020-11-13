import React, { Component, ErrorInfo, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
}

abstract class ErrorBoundary extends Component<IProps, IState> {
  public state: IState = {
    hasError: false
  };

  protected static getDerivedStateFromError(_: Error): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return  <div className="container">
        <h1>Something went wrong! This is an error from Error boundary</h1>
      </div>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;