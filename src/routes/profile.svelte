<script>
  import { user, isLoggedIn } from '../stores.js';
</script>

<main>
  <section
    class="bg-blue-800 px-10 py-10 flex flex-col items-center justify-center gap-y-4 contSection"
  >
    {#if $isLoggedIn}
      <div
        class="bg-sky-600 h-4/5 w-2/3 pt-7 flex flex-col items-center justify-center gap-7 text-center"
      >
        <div>
          <img
            src={$user.photoURL}
            alt={$user.displayName}
            class="w-20 h-20 rounded-full m-auto"
          />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-blue-100 mb-2">
            {$user.displayName}
          </h2>
          <p class="text-lg font-bold text-blue-100">{$user.email}</p>
        </div>
      </div>
    {/if}
  </section>
</main>

<style>
  .contSection {
    height: 89vh;
  }
</style>
