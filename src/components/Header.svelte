<script>
  import { signOut, onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../firebase.js';
  import { user, isLoggedIn } from '../stores.js';

  const logoutUser = async () => {
    try {
      await signOut(auth);
      $user = {};
      $isLoggedIn = false;
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(auth, (authUser) => {
    $user = authUser;
    $isLoggedIn = !!authUser;
  });
</script>

<header class="bg-neutral-900 p-4 text-white">
  <div class="container m-auto">
    <div>
      <h1 class="text-3xl font-bold mb-3">
        Firebase
        <span>Auth</span>
      </h1>
    </div>
    <nav>
      <ul class="flex">
        <li class="mr-6">
          <a href="/" class="text-blue-500 hover:text-blue-800">Home</a>
        </li>

        {#if $isLoggedIn}
          <li class="mr-6">
            <a href="/profile" class="text-blue-500 hover:text-blue-800"
              >Profile</a
            >
          </li>
          <li class="mr-6">
            <a
              href="/"
              on:click={logoutUser}
              class="text-red-500 hover:text-red-800">Logout</a
            >
          </li>
        {:else}
          <li class="mr-6">
            <a href="/login" class="text-blue-500 hover:text-blue-800">Login</a>
          </li>
        {/if}
      </ul>
    </nav>
  </div>
</header>
