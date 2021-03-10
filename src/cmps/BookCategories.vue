<template>
  <li class="book-categories">
    <img :src="book.thumbnail" />
    <section class="category-section">
      <h3>{{ book.title }}</h3>
      <h5>{{ book.author }}</h5>
      <section class="actions-section flex">
        <button>
          <router-link :to="`/book/${book._id}`"> Details </router-link>
        </button>
      </section>
    </section>
  </li>
</template>

<script>
export default {
  props: ['book'],
};
</script>

<style>
</style>