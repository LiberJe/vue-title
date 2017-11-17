<template>
  <div>
    <div id="container" :style="containerStyle"></div>
    <div class="ph">1</div>
    <div class="ph">2</div>
    <div class="ph">3</div>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: 'auto'
      },
      height: {
        type: String,
        default: '50px'
      },
      color: {
        type: String,
        default: '#0074e8'
      },
      stick: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        containerStyle: {
          width: this.width,
          height: this.height,
          backgroundColor: this.color
        }
      }
    },

    computed: {

    },

    methods: {

    },

    created () {

    },

    mounted () {

    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.ph {
  width: 100%;
  height: 400px;
}
</style>