import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions/actions';


function App() {
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.counter);

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment())}>
        increment
      </button>
      <button onClick={() => dispatch(decrement())}>
        decrement
      </button>
    </div>
  );
}

export default App;
