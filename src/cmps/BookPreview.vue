<template>
<router-link :to="`/book/${book._id}`">
  <li class="book-preview clean-list">
  <button class="sale-btn" v-if="book.listPrice.isOnSale">sale</button>
    <div class="img-area">
    <img :src="book.thumbnail" />
    </div>
    <section class="preview-section flex column justify-center">
      <span class="preview-title text"> {{ book.title }} </span>
      <li v-for="(author,idx) in book.authors" :key="idx" class="preview-author text">
         <span class="preview-author"> {{author}} </span>
        </li>
      <h5>{{ bookPrice }}</h5>
          </section>
  </li>
</router-link>
</template>

<script>
import {Utils} from '@/services/util.service.js'
export default {
  props: ['book'],
  methods: {
    remove(ev) {
      ev.preventDefault()
      this.$emit("remove", this.book._id);
    },
  },
  computed: {
    bookPrice() {
      return Utils.getPrice(
        this.book.listPrice.amount,
        this.book.listPrice.currencyCode
      )
    },
  },
};
</script>

<style>
</style>