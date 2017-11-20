<template>
  <div>
    <div id="container" :style="containerStyle">
      <p id="ani-title" :style="titleStyle">{{localtitle}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: '100%'
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
        default: true
      },
      animation: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: "测试"
      }
    },

    data () {
      return {
        containerStyle: {
          position: this.stick ? 'fixed' : 'static',
          width: this.width,
          height: this.height,
          backgroundColor: this.color,
        },
        titleStyle: {
          lineHeight: this.height,
          textAlign: "center",
          marginTop: this.height,
        },
        localtitle: this.title,
        gap: this.hight,
      }
    },
    computed: {
      marginStyle: function () {
        // return {
        //   lineHeight: this.height,
        //   textAlign: "center",
        //   marginTop: this.gap
        // }
      }
    },
    methods: {
      handleScroll (title, titlebar) {
        return e => {
          let titleRect = title.getBoundingClientRect()
          let titlebarRect = titlebar.getBoundingClientRect()
          let titleY = titleRect.y
          let titlebarHeight = parseInt(titlebar.style.height.replace(/\s+|px/gi,""))
          let titlebarY = titlebarRect.y + titlebarHeight
          let gap = titlebarY - titleY
          console.log(gap)
          if (gap<50 && gap>0) {
            this.titleStyle= {
              lineHeight: this.height,
              textAlign: "center",
              marginTop: `${titlebarHeight - gap}px`,
            }
          }
          console.log(this.titleStyle)
        }
      }
    },

    created () {

    },

    mounted () {
      let title = document.getElementById('title')
      let titlebar = document.getElementById('container')
      this.animation
        ? window.addEventListener('scroll', this.handleScroll(title, titlebar))
        : null
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>