import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Можно отправить ошибку на сервер или выполнить другие действия
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Вы можете отобразить любой запасной UI
      return this.props.fallback || <p>Something went wrong.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
