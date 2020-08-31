<template>
  <div>
    <my-component v-if="showComponent" />
    <div @click="showComponent = true">Show Component</div>
  </div>
</template>

<script>
const MyComponent = () => import(/* webpackChunkName: "MyComponent-chunk" */ "@/components/HelloWorld.vue");
export default {
  name: "DetailPage",
  components: {
    MyComponent,
  },
  data() {
    return {
      showComponent: false
    }
  }
};
</script>