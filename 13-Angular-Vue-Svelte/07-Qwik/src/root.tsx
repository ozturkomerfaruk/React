import { component$, useStyles$ } from '@builder.io/qwik';
import { QwikCityProvider } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import Counter from './components/counter/counter'
import globalStyles from './global.css?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <h1 style={{textAlign: 'center'}}>Counter Using Qwik</h1>
        <Counter />
      </body>
    </QwikCityProvider>
  );
});
