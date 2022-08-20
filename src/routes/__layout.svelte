<script>
  import Header from '../components/Header.svelte';
  import '../styles/app.css';
</script>

<Header />
<main class="bg-zinc-900 text-white h-screen">
  <div class="container m-auto py-10 h-full flex justify-center items-center">
    <div>
      <slot />
    </div>
  </div>
</main>
