export const increment = val => ({
    type: 'INCREMENT',
    val,
})

export const decrement = val => ({
    type: 'DECREMENT',
    val,
})


export default function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + action.val }
      case 'DECREMENT':
        return { count: state.count - action.val }
      default:
        return state
    }
}
