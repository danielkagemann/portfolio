<template>
  <div class="trails">
    <a v-for="t in list" :href="t.link" target="_blank">
      <i class="fab" v-if="t.isClass" :class="t.icon"></i>
      <img :src="t.icon" v-else alt="">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Trails',
    data() {
      return {
        list: [
          {
            icon: 'fa-github',
            link: 'https://github.com/danielkagemann',
            isClass: true
          },
          {
            icon: 'fa-facebook',
            link: 'https://www.facebook.com/corefault',
            isClass: true
          },
          {
            icon: 'fa-xing',
            link: 'https://www.xing.com/profile/Daniel_Kagemann',
            isClass: true
          },
          {
            icon: 'fa-codepen',
            link: 'https://codepen.io/danielkagemann',
            isClass: true
          },
          {
            icon: 'static/images/epi.png',
            link: 'http://hallo-ich-bin-epi.de',
            isClass: false
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .trails {
    color: #fff;
    font-size: 28px;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
  }

  .trails a, .trails img {
    color: #fff;
    text-decoration: none;
    padding: 10px;
  }

  .trails img {
    height:40px;
    vertical-align: middle;
  }
</style>
