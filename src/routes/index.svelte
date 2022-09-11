<script>
  import { auth } from '../firebase.js';
  import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
  import { user, isLoggedIn } from '../stores.js';
  import { goto } from '$app/navigation';

  const initLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      $user = response.user;
      $isLoggedIn = true;

      if ($user && $isLoggedIn) {
        goto('/profile');
      }
    } catch (error) {
      console.log(error);
    }
  };
</script>

<main>
  {#if $isLoggedIn}
    <section
      class="bg-sky-800 flex items-center justify-center contSection text-center"
    >
      <div class="bg-sky-600 p-10 flex flex-col gap-6">
        <h1 class="text-4xl font-bold text-blue-100">Usuario já autenticado</h1>
        <a
          class="bg-sky-400 hover:bg-sky-200 text-lg text-blue-50 flex items-center justify-center gap-2 p-4"
          href="/profile"
          >Ir para página de perfil
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  {:else}
    <section
      class="bg-sky-800 flex items-center justify-center contSection text-center"
    >
      <div class="bg-sky-600 p-10 flex flex-col gap-6">
        <h1 class="text-4xl font-bold text-blue-100">Meu dados Google</h1>
        <p class="text-xl font-normal text-blue-200">
          Realize login e descubra informações sobre sua conta Google
        </p>

        <button
          class="bg-red-700 hover:bg-red-600 flex items-center justify-center gap-2 p-2 rounded-md text-blue-50 text-lg"
          on:click={initLoginWithGoogle}
        >
          Google
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
      </div>
    </section>
  {/if}
</main>

<style>
  .contSection {
    height: 89vh;
  }
</style>
