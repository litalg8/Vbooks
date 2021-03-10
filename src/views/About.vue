<template>
<main class="about container top">
  <h1>About Us</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, consectetur est accusamus, eaque numquam voluptas dicta harum quae temporibus officiis, asperiores nemo saepe esse culpa repellendus eius error fugit cum!</p>
  <h2>Our Team</h2>
  <ul>
    <li v-for="member in members" :key="member">{{member}}</li>
  </ul>
  </main>
</template>

<script>
export default {
  data(){
    return {
      members:['Lital', 'flava flave', 'mad season']
    }
  }
}
</script>
