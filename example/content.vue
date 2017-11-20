<template>
  <div class="box">
    <div id="title" @touchstart="ontouch">这里是标题</div>
    <div class="ph"><h1>1</h1></div>
    <div class="ph"><h2>2</h2></div>
    <div class="ph"><h3>3</h3></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    ontouch: function (e) {
      console.log(e)
    }
  }
}
</script>

<style>
#title, .ph {
  width: 100%;
  height: 600px;
}
.box {
  padding-top: 100px;
}
</style>