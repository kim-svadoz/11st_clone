<template>
  <section 
    ref="lazyLoadElement"
    class="wide-banner">
    <div class="inner"></div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$lazyLoad(this.$refs.$lazyLoadElement)
  }
}
</script>

<style lang="scss" scoped>
  section {
    background-color: #FBB93F;
    .inner {
      height: 220px;
    }
  }
</style>
