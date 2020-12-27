<template>
  <div>
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/cmps/AppHeader';
import AppFooter from '@/cmps/AppFooter';
import UserMsg from '@/cmps/UserMsg';
export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg, 
  },
};
</script>