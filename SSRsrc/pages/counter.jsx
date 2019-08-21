import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../store/actions';
import Menu from './menu';

class Index extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h1>Counter Page</h1>
        <div>
          Counter: {this.props.count}
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

const mapStateToProps = state => ({
  count: state.count
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);