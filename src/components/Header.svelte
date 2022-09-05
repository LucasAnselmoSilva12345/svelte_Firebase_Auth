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

<header class="bg-sky-900 p-5 w-full text-white">
  <div class="container m-auto flex items-center justify-between">
    <div>
      <h1 class="text-3xl font-bold">
        <a href="/" class="hover:underline transition-all">
          Firebase
          <span>Auth</span>
        </a>
      </h1>
    </div>
    <nav>
      <ul class="flex items-center gap-4">
        <li class="">
          <a href="/" class="text-slate-200 hover:opacity-50 transition-all">
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        </li>

        {#if $isLoggedIn}
          <li class="">
            <a
              href="/profile"
              class="text-slate-200 hover:opacity-50 transition-all"
            >
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </a>
          </li>
          <li class="">
            <a
              href="/"
              on:click={logoutUser}
              class="text-red-500 hover:opacity-50 transition-all"
            >
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </a>
          </li>
        {:else}
          <li class="">
            <a
              href="/login"
              class="text-slate-300 hover:opacity-50 transition-all"
            >
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </a>
          </li>
        {/if}
      </ul>
    </nav>
  </div>
</header>
