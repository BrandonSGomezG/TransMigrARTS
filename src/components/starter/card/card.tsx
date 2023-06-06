import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './card.module.css?inline';

interface cardProps {
  name: string;
  description: string;
  author: string;
}

export default component$<cardProps>((props) => {
  useStylesScoped$(styles);
  
  return (
      <article>
        <div class="article-wrapper">
          <figure>
            <img src="https://picsum.photos/id/1011/800/450" alt="" />
          </figure>
          <div class="article-body">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href="#" class="read-more">
              Coordinado por: &nbsp; <span class="sr-only">{props.author}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </article>
  );
});
