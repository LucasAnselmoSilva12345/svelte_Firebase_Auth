<script>
  import { user, isLoggedIn } from '../stores.js';
</script>

<div class="bg-zinc-700 px-10 py-10 flex flex-col items-center gap-y-4">
  {#if $isLoggedIn}
    <img
      src={user.photoURL}
      alt={$user.displayName}
      class="w-20 h-20 rounded-full m-auto"
    />
    <h2>{$user.displayName}</h2>
    <p>{$user.email}</p>
  {/if}
</div>
