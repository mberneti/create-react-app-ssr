import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import confugureStore from '../store/configureStore';

export default class _app extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={confugureStore({ count: 1234 })}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}