import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './counter.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const store = useStore({ count: 0 });

  return (
    <div className="container">
      <p>Count: {store.count}</p>
      <p>
        <button onClick$={() => store.count--}>Decrement</button>
        <button onClick$={() => store.count++}>Increment</button>
      </p>
    </div>
  );
});
