<template>
  <ul class="book-list clean-list card-grid">
    <book-preview
      v-for="book in books"
      :key="book._id"
      :book="book"
      @remove="remove"
    />
  </ul>
</template>

<script>
import BookPreview from '@/cmps/BookPreview';
export default {
  props: ['books'],
  components: {
    BookPreview,
  },
  methods: {
    remove(id) {
      console.log('remove this book -list',id);
      this.$emit('removeBook', id);
    },
  },
};
</script>

<style>
</style>