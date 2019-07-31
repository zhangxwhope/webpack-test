<template>
  <div class="mod-test">
    <a-button>Test</a-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState('home', [
      'data'
    ])
  },
  methods: {
    ...mapActions('home', [
      'getData'
    ])
  },
  created () {
    this.$nextTick(() => {
      // this.getData()
    })
  }
}
</script>

<style lang="scss" scoped>
.mod-test{
  width: 100%;
  height: 200px;
  // background: lightblue;
}
</style>
