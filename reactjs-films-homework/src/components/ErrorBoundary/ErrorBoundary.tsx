import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.scss';

interface IErrorBoundaryProps {
  children: ReactNode;
  title: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.boundaryWrapper}>
          <h2>
            An error has occurred on the {this.props.title}. Please try to
            refresh the page
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
