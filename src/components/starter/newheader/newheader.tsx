
import { component$, useSignal, $ } from '@builder.io/qwik';
import styles from './header.module.css';

export default component$(() => {
  const menu = useSignal(false);

  const setOpen = $(() => {
    menu.value = !menu.value;
  });

  return (
    <header class={styles.header}>
      <button class={styles.btnmobile} onClick$={() => setOpen()}>
        <img height="20px" src="/static/icon-ham.svg" alt="burguer" />
      </button>
      <h1 class={styles.tittle}>TransMigrARTS</h1>
      <img class={styles.profile} src="/static/logo.svg" alt="logo" />
      <nav class={`${styles.navmobile} ${menu.value && styles.open}`}>
        <ul class={styles.menumobile}>
          <li class={styles.menili}><a href='#' class={styles.menua}>Perfil</a></li>
          <li class={styles.menili}><a href='#' class={styles.menua}>Agregar Taller</a></li>
          <li class={styles.menili}><a href='#' class={styles.menua}>Mis Talleres</a></li>
          <li class={styles.menili}><a href='#' class={`${styles.menua} ${styles.menuac}`}>Cerrar sesión</a></li>
        </ul>
      </nav>
    </header>
  );
});
