<script>
  import { user, isLoggedIn } from '../stores.js';
</script>

{#if $isLoggedIn}
  <main class="main">
    <div class="containerUser">
      <div class="containerImg">
        <img src={user.photoURL} alt={$user.displayName} />
      </div>
      <div class="containerInfoUser">
        <h2>{$user.displayName}</h2>
        <p>{$user.email}</p>
      </div>
    </div>
  </main>
{/if}

<style>
  .main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
