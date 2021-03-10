<template>
  <section class="home-categories">
   <img class="main-img" src="../assets/img/hero.jpg" />
    <span class="hero-text"> VBooks are Vonderful. </span>

  </section>
</template>

<script>
import bookService from '@/services/book.service.js';
import BookCategories from '@/cmps/BookCategories';
export default {
  data() {
    return {
      books: null,
    };
  },
  components: {
    BookCategories,
  },
  methods: {
    async loadBooks() {
      this.books = await bookService.query();
    },
  },
  computed: {
  },
  async created() {
    this.loadBooks();
  },
};
</script>

<style>
</style>
