<template>
  <div>
    <Titlebar></Titlebar>
    <Content></Content>
  </div>
</template>

<script>
import Titlebar from '../src/index'
import Content from './content'
import Back from './svg'
export default {
  components: {
    Titlebar,
    Content,
    Back
  },
  data () {
    return {

    }
  },
  methods: {
    
  },
  mounted () {
  }
}
</script>

<style>

</style>