  <template>
  <header class="app-header">
    <nav class="main-nav container flex justify-between">
      <div class="logo nav-item"><router-link to="/">VBooks</router-link></div>
        <ul class="route-nav flex align-center">
          <li class="item nav-item"><router-link to="/about">About</router-link></li> 
          <li class="item nav-item"><router-link to="/book">Books</router-link></li> 
        </ul>
    </nav>
    <nav class="mobile-nav">
        <div class="burger-nav">☰</div>
        <div class="close-nav">x</div>
    </nav>
  </header>
</template>