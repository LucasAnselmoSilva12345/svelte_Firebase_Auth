<header class="header">
  <div class="titleHeader">
    <h1>Firebase
      <span>Auth</span>
    </h1>
  </div>
  <nav class="navBar">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/#">Logout</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  .header{
    width: 100%;
    padding: 1.25rem 1.5625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3b4252;
  }

  .titleHeader{
    margin-bottom: 1.5rem;
    padding: .875rem;
  }

  .titleHeader h1{
    font-size: 2rem;
    font-weight: 700;
  }

  .titleHeader h1 > span{
    color: #5e81ac;
  }

  .navBar ul{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .navBar ul li{
    margin-bottom: 1.5rem;
  }

  .navBar ul li a{
    padding: .875rem;
    font-size: 16px;
    font-weight: 300;
    border: 1px solid #e5e9f0;
    border-radius: 0.5rem;
    color: #485167;
    background-color: #e5e9f0;
    transition: ease-in-out 0.3s;
  }

  .navBar ul li a:hover{
    filter: opacity(0.7);
 
  }

</style>