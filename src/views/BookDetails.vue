<template>
  <section class="book-details container top">
    <div class="navigation-header">
      <button @click="goBack" class="back-btn">Back</button>
    </div>
    <div class="main-details flex container" v-if="book">
      <button class="sale-btn" v-if="book.listPrice.isOnSale">sale</button>
      <img :src="book.thumbnail" />
      <div class="book justify-center column">
        <ul class="text-details">
        <li><h2>{{ book.title }}</h2></li>
        <li v-for="(author,idx) in book.authors" :key="idx">
         <h4> {{author}}</h4>
        </li>
        </ul>
        <ul class="number-details">
          <li> <h5> {{ publishDate }} </h5></li>
          <li><h5>{{ pageCount }} </h5></li>
          <li :class="salePrice"> {{ bookPrice }}</li>
        </ul>
        <p>Description:</p>
        <long-txt :txt="book.description" :maxChar="50"/>
      </div>
    </div>
    <div v-else class="loading flex justify-center align-center">
      <img src="@/assets/img/loading.svg" />
    </div>
  </section>
</template>

<script>
import bookService from '@/services/book.service.js';
import { Utils } from '@/services/util.service.js'
import LongTxt from '@/cmps/LongTxt.vue'

export default {
  data() {
    return {
      book: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.book = await bookService.get(id);
  },
  computed: {
    bookPrice() {
      return Utils.getPrice(
        this.book.listPrice.amount,
        this.book.listPrice.currencyCode
      )
    },
    salePrice() {
      const { amount } = this.book.listPrice;
      if (amount > 150) return 'red';
      if (amount < 25) return 'green';
      return ''
    },
    pageCount() {
      const { pageCount } = this.book;
      let lengthTxt;
      if (pageCount < 100) lengthTxt = ' light reading';
      if (pageCount > 200) lengthTxt = ' Decent reading';
      if (pageCount > 500) lengthTxt = ' long reading';
      let str = 'Length: ' + pageCount + ' pages'
      str += lengthTxt ? lengthTxt : '';
      return str;
    },
    publishDate() {
      const currYear = new Date().getFullYear();
      const calcYear = currYear - this.book.publishedDate;
      let publishedTxt;
      if (calcYear < 1) publishedTxt = '(Brand New!)'
      if (calcYear > 10) publishedTxt = '(Veteran Book)'
      let str = 'Published ' + calcYear + ' Years  Ago ';
      str += publishedTxt ? publishedTxt : '';
      return str;
    },

  },
  methods:{
    goBack() {
      this.$router.push("/book");
  },
  },
  components: {
    LongTxt,
  }
};

</script>

<style>
</style>
      <!-- <section class="actions-section flex justify-between">
        <button class="delete-btn" @click.prevent="remove"><span class="fas fa-trash"></span></button>
      </section> -->