<template>
  <div @click="navigate">
    Some text
  </div>
</template>

<script>
export default {
  name: "MasterPage",
  methods: {
    navigate() {
      this.$router.push({
        path: "/DetailPage",
        query: {},
      });
    },
  },
};
</script>