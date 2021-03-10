<template>
  <section class="main-filter flex align-center justify-space" :class="toggleFilter">
    <span class="filter-title">search by:</span>
    <input @input="setFilter" type="text" class="wrap-input" v-model="filterBy.title" placeholder="vbook name.." />
    <input @input="setFilter" type="number" class="wrap-input" v-model="filterBy.minPrice" placeholder="lowest price" />
    <input @input="setFilter" type="number" class="wrap-input" v-model="filterBy.maxPrice" placeholder="highest price" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        title: '',
        minPrice: null,
        maxPrice: null
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit('filtered', this.filterBy);
    },
    toggleFilter(){

    }
  },
  // mounted(){
  //   this.$refs.filterInput.focus()
  // }
};
</script>
