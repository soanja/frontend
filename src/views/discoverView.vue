<template>
    <div>
      <!-- Other content in your discover view -->
      <recommended-songs></recommended-songs>
    </div>
  </template>
  
  <script>
  import RecommendedSongs from '@/components/RecommendedSongs.vue';
  
  export default {
    components: {
      RecommendedSongs,
    },
  };
  </script>
  