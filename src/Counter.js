import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter';

export default function Counter() {
    const [changeBy, setChangeBy] = useState(1);
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count)

    return <>
        {count}
        <div>
            <button onClick={() => dispatch(decrement(changeBy))}>Decrement - {changeBy}</button>
            <button onClick={() => dispatch(increment(changeBy))}>Increment + {changeBy}</button>
        </div>
        <div>
            <button onClick={() => setChangeBy(Math.abs(changeBy - 1))}>Decrement ChangeBy</button>
            <button onClick={() => setChangeBy(1)}>Reset</button>
            <button onClick={() => setChangeBy(Math.abs(changeBy + 1))}>Increment ChangeBy</button>
        </div>
    </>
}
