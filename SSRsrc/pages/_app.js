import React from 'react';
import App from 'next/app';
import Menu from './menu';
// redux imports
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={configureStore({ count: 1234 })}>
        <Menu />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;