import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import Newheader from '~/components/starter/newheader/newheader';

import styles from '../styles.css?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Newheader />
      <main>
        <Slot />
      </main>
    </>
  );
});
