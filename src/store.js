import create from 'zustand'
import { devtools } from 'zustand/middleware';

let useStore = create(devtools(set => ({
    count: 0,
    increment: val => set(state => ({ count: state.count + val })),
    decrement: val => set(state => ({ count: state.count - val })),
})))

export default useStore;
