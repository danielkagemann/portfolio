<template>
  <div id="app">

    <ul class="cb-slideshow">
      <li><span></span></li>
      <li><span></span></li>
      <li><span></span></li>
    </ul>

    <div class="message">
      <Trails/>
      Daniel Kagemann<br/>
      <vue-typer :text="['ui/ux design','father','apple fanboy','front-end development', 'comicnerd', 'mobile development']"
                 :preTypeDelay="1000"
                 :pre-erase-delay='2000'
                 :erase-delay='1000'
                 caretAnimation="smooth"></vue-typer>
    </div>

  </div>
</template>

<script>
  import {VueTyper} from 'vue-typer'
  import Trails from './components/Trails'

  export default {
    name: 'App',
    components: {
      VueTyper,
      Trails
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #app .message {
    font-size: 48px;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .vue-typer {
    font-size: 32px;
    font-weight: normal;
  }

  .vue-typer .custom.char.typed {
    color: #fff;
  }

  .vue-typer .custom.char.selected {
    color: #fff;
    background-color: #000;
  }

  .vue-typer .custom.caret {
    width: 2px;
    background-color: #fff;
  }

  li {
    list-style-type: none;
  }

  .cb-slideshow,
  .cb-slideshow:after {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .cb-slideshow:after {
    content: '';
    background: transparent url(../static/images/pattern.png) repeat top left;
  }

  .cb-slideshow li span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    -webkit-backface-visibility: hidden;
    -webkit-animation: imageAnimation 21s linear infinite 0s;
    -moz-animation: imageAnimation 21s linear infinite 0s;
    -o-animation: imageAnimation 21s linear infinite 0s;
    -ms-animation: imageAnimation 21s linear infinite 0s;
    animation: imageAnimation 21s linear infinite 0s;
  }

  .cb-slideshow li:nth-child(1) span {
    background-image: url(../static/images/work.jpg)
  }

  .cb-slideshow li:nth-child(2) span {
    background-image: url(../static/images/father.jpg);
    -webkit-animation-delay: 7s;
    -moz-animation-delay: 7s;
    -o-animation-delay: 7s;
    -ms-animation-delay: 7s;
    animation-delay: 7s;
  }

  .cb-slideshow li:nth-child(3) span {
    background-image: url(../static/images/clinic.jpg);
    -webkit-animation-delay: 14s;
    -moz-animation-delay: 14s;
    -o-animation-delay: 14s;
    -ms-animation-delay: 14s;
    animation-delay: 14s;
  }

  @keyframes imageAnimation {
    0% {
      opacity: 0;
      animation-timing-function: ease-in;
    }
    4% {
      opacity: 0.9;
      transform: scale(1.05);
      animation-timing-function: ease-out;
    }
    34% {
      opacity: 0.9;
      transform: scale(1.2);
    }
    38% {
      opacity: 0;
      -webkit-transform: scale(1.1) translateY(-20%);
    }
    40% {
      opacity: 0;
      transform: scale(1.1) translateY(-100%);
    }
    100% {
      opacity: 0
    }
  }
</style>
