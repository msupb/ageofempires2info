import React, { Component, ErrorInfo, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
  error: any;
  errorInfo: any;
}

abstract class ErrorBoundary extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  // protected static getDerivedStateFromError(error: Error): IState {
  //   // Update state so the next render will show the fallback UI.
  //   return { error: error, hasError: true };
  // }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
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