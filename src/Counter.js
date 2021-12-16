import { useState } from 'react';

import { connect } from 'react-redux';
import { increment, decrement } from './redux/counter';

function Counter({ count, increment, decrement }) {
    const [changeBy, setChangeBy] = useState(1);
  return <>
    {count}
      <div>
        <button onClick={() => decrement(changeBy)}>Decrement - {changeBy}</button>
        <button onClick={() => increment(changeBy)}>Increment + {changeBy}</button>
      </div>
      <div>
        <button onClick={() => setChangeBy(changeBy - 1)}>Decrement ChangeBy</button>
        <button onClick={() => setChangeBy(1)}>Reset</button>
        <button onClick={() => setChangeBy(changeBy + 1)}>Increment ChangeBy</button>
      </div>

    </>
}

export default connect(state => ({
    count: state.count,
}), dispatch => ({
    increment: val => dispatch(increment(val)),
    decrement: val => dispatch(decrement(val)),
}))(Counter)
