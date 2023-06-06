import { component$ } from '@builder.io/qwik';
import {
  type DocumentHead,
  routeLoader$,
} from '@builder.io/qwik-city';
import styles from './workshops.module.css';
import Card from '~/components/starter/card/card';

interface cardProps {
  name: string;
  description: string;
  author: string;
}

export const list: cardProps[] = [{
  name: 'Vallenato, cantaoras, oralidad y narrativas visuales',
  description: 'Hora: 3 p.m. a 6 p.m. Lugar: El Bukowski Casa Cultural: Narración Gráfica Laboratorio de investigación-creación - La Zineteca, Carrera 16 No.33a-50',
  author: 'Daniel pinzon'
}];

export const useListLoader = routeLoader$(() => {
  return list;
});

export default component$(() => {
  const list = useListLoader();

  return (
    <>
      <div class="container container-center">
        <h1 class={styles.h1}>
          Mis Talleres
        </h1>
      </div>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center">
        <section class={styles.articles}>
          {(list.value.length && (
            <ul class={styles.list}>
              {list.value.map((item, index) => (
                <li key={`items-${index}`}><Card {...item} /></li>
              ))}
            </ul>
          )) || <span class={styles.empty}>No items found</span>}
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'workshops',
};
