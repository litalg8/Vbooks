<template>
  <section class="user-msg" :class="msgColor" v-show="data.msg">
    <div class="close-msg">X</div>
    <h2 :class="setColor">{{ data.type }}</h2>
    <p>{{ data.msg }}</p>
    <template v-if="data.id"> 
        <router-link :to="`/book/${data.id}`" class="check-msg"> Check Book</router-link>
    </template>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  created(){
      eventBus.$on('showMsg',(data)=>{
          this.data = data; 
          setTimeout(()=>{
              this.data = {};

          },3000)
      })
  },
  methods:{
      closeMsg(){
          this.data ={};

      }
  },
  computed:{
      setColor(){
      if(this.data.type === 'success') return 'good-msg'
      else return 'bad-msg'    
      }
  },
  destroyed(){
      eventBus.$off('showMsg')
  }
};
</script>

<style>
</style>