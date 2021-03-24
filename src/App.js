import './App.css';
import { increaseCounter, decreaseCounter } from './redux/Counter/actions/index'
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App" style={{position: 'absolute', left: props.counter}}>
      <div>Counter : <span>{props.counter}</span></div>
      <button onClick={() => props.increaseCounter(1)}>Increment</button>
      <button onClick={() => props.decreaseCounter(1)}>Decrement</button><br/><br/>
      <button onClick={() => props.increaseCounter(10)}>Increment 10</button>
      <button onClick={() => props.decreaseCounter(10)}>Decrement 10</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
  }
}
const mapDipatchToProps = dispatch => {
  return {
    increaseCounter: (countBy) => dispatch(increaseCounter(countBy)),
    decreaseCounter: (countBy) => dispatch(decreaseCounter(countBy)),
  }
}
export default connect(mapStateToProps, mapDipatchToProps)(App);
