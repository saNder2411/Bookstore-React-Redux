import React from 'react';
import Spinner from '../components/spinner/spinner';
import ErrorIndicator from '../components/error-indicator/error-indicator';


export const compose = (...hocs) => (Component) => {

  return hocs.reduceRight((prevResult, hoc) => hoc(prevResult), Component);
};

export const getContent = (loading, error, Component, props) => {
  const hasData = !(loading || error);
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorIndicator /> : null;
  const content = hasData ? <Component {...props} /> : null;

  return spinner || errorMessage || content;
};
