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
    data () {
      return {
        list: [
          {
            icon: 'fa-github',
            name: 'github',
            link: 'https://github.com/danielkagemann',
            isClass: true
          },
          {
            icon: 'fa-facebook',
            name: 'facebook',
            link: 'https://www.facebook.com/corefault',
            isClass: true
          },
          {
            icon: 'fa-xing',
            name: 'Xing',
            link: 'https://www.xing.com/profile/Daniel_Kagemann',
            isClass: true
          },
          {
            icon: 'fa-codepen',
            name: 'Codepen',
            link: 'https://codepen.io/danielkagemann',
            isClass: true
          },
          {
            icon: 'static/images/epi.png',
            name: 'EpilepsieTagebuch!',
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
    width:100%;
    position:absolute;
    bottom:20px;
    left:40px;
  }

  .trails a {
    color: #000;
    text-decoration: none;
    padding:10px;
  }

  .trails img {
    height:40px;
    vertical-align: middle;
  }


</style>
