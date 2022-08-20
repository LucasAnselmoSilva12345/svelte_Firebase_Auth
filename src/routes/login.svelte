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
</script>

<button
  class="bg-red-700 hover:bg-red-600 px-4 py-2 rounded-md text-white"
  on:click={login}
>
  Google
</button>
