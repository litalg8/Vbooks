<template>
  <main class="books container">
    <book-filter @filtered="setFilter"/>
    <book-list :books="booksToShow" @removeBook="removeBook" />
  </main>
</template>

<script>
import bookService from '@/services/book.service.js';
import BookFilter from '@/cmps/BookFilter'
import BookList from '@/cmps/BookList';
export default {
  data() {
    return {
      books: null,
      filterBy: {
        title: '',
        minPrice: 0,
        maxPrice: Infinity,
      },
    };
  },
  methods: {
    async loadBooks() {
      this.books = await bookService.query();
      console.log(this.books);
    },
    async removeBook(id) {
      console.log('remove book app ', id);
      await bookService.remove(id);
      this.loadBooks();
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },

  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      return this.books?.filter((book) => {
        if (this.filterBy && this.filterBy.title) {
          if (!book.title.toLowerCase().includes(this.filterBy.title.toLowerCase()))
            return false;
        }
        if (this.filterBy && this.filterBy.minPrice) {
          if (!(book.listPrice.amount >= this.filterBy.minPrice)) return false;
        }
        if (this.filterBy && this.filterBy.maxPrice) {
          if (!(book.listPrice.amount <= this.filterBy.maxPrice)) return false;
        }
        return true;
      });
    }
  },

  created() {
    this.loadBooks();
  },
  components: {
    BookList,
    BookFilter
  },
}
</script>

<style>
</style>

