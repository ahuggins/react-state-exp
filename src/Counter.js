import { useState } from 'react';

import useStore from './store';

export default function Counter() {
    const [changeBy, setChangeBy] = useState(1);
    const count = useStore(state => state.count);
    const increment = useStore(state => state.increment);
    const decrement = useStore(state => state.decrement);
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
