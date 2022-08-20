<script>
  import { auth } from '../firebase.js';
  import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
  import { user, isLoggedIn } from '../stores.js';
  import { goto } from '$app/navigation';

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);
      $user = response.user;
      $isLoggedIn = true;
      goto('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  import { GoogleLogo } from 'phosphor-svelte';
</script>

<h1>Login with Google</h1>

<button class="btnLoginGoogle" on:click={login}>
  Google
  <GoogleLogo color="#e5e9f0" size={20} />
</button>

<style>
  .btnLoginGoogle {
    margin: 1.25rem auto;
    padding: 0.625rem 1.5625rem;
    border: 0rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 1.125rem;
    font-weight: 700;

    background-color: #f03e3e;
    color: #e5e9f0;
  }
</style>
