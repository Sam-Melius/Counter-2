import { useReducer } from 'react';
import styles from './Counter.css';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};
const initialState = { count: 0 };

const initialColor = { color:  colors.yellow };

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return { count: state.count + action.payload };
  }
  if (action.type === 'decrement') {
    return { count: state.count - action.payload };
  }
  if (action.type === 'reset') {
    return { count: state.count === initialState };
  }
};

// const colorReducer = (state, action) => {
//   if (count === 0) {
//     return { colors: state.colors.yellow };
//   }

//   if (count > 0) {
//     return { colors: state.colors.green };
//   }

//   if (count < 0) {
//     return { colors: state.colors.red };
//   }
// };

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [colorState, colorDispatch] = useReducer(colorReducer, initialColor);

  return (
    <main className={styles.main}>
      <h1 style={{ initialColor }}>{state.count}</h1>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: 'increment', payload: 1 })}
          aria-label="increment"
          //style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
          aria-label="decrement"
          //style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={() => dispatch({ type: 'reset', payload: 1 })}
          //style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
