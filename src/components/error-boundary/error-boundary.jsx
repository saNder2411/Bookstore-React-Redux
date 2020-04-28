import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundary extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {hasError: false};

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return  <ErrorIndicator />;
      ;
    }

    return this.props.children;
  }
}