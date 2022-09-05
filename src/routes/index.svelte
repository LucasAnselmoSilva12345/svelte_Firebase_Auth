<script>
  import { user, isLoggedIn } from '../stores.js';
</script>

<main>
  {#if $isLoggedIn}
    <h2>Logado</h2>
  {:else}
    <h2>Não tá logado</h2>
  {/if}
</main>
