<template>
  <section class="book-txt flex column">
      <p class="pointer" @click="toggleTxt">{{txtToShow}}</p>
  </section>
</template>

<script>
export default {
  props:{
    txt: String, 
    maxChar: Number, 
  },
  data() {
    return {
      isLongTxtShown: false,
    }
  },
  computed: {
    txtToShow() {
      return this.isLongTxtShown ? this.txt : this.txt.substr(0,this.maxChar -1) + '...'
    }
  },
  methods: {
    toggleTxt() {
      this.isLongTxtShown = !this.isLongTxtShown
    }
  }
}
</script>

<style>
</style>

      // let txtToShow = this.desc;
      // if (this.isLongTxtShown && this.desc.length > 100) {
      //   txtToShow = txtToShow.slice(0, 99) + '...'
      // }
      <!-- <button >{{getBtnTxt}}</button> -->
    //       getBtnTxt() {
    //   const btnTxt = this.isLongTxtShown ? 'Read Less' : 'Read More'
    //   return btnTxt;
    // },