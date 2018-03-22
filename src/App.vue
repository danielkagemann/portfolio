<template>
  <div id="app">

    <div class="face"><img src="../static/images/myface.png" alt=""></div>
    <div class="message">
      Daniel Kagemann<br/>
      <vue-typer
        :text="['ui/ux design','father','apple fanboy','front-end development', 'comicnerd', 'mobile development']"
        :preTypeDelay="1000"
        :pre-erase-delay='2000'
        :erase-delay='1000'
        caretAnimation="smooth"></vue-typer>
    </div>
    <Trails/>

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
  }

  #app .message {
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -2px;
    text-transform: uppercase;
    color: #000;
    position: absolute;
    top: 50%;
    left: 40px;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    line-height: 0.8;
  }

  .vue-typer {
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 0;
    text-transform: none;
    margin-left:5px;
  }

  .vue-typer .custom.char.typed {
    color: #000;
  }

  .vue-typer .custom.char.selected {
    color: #fff;
    background-color: #000080;
  }

  .vue-typer .custom.caret {
    width: 2px;
    background-color: #000;
  }

  .face {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  }

  .face img {
    height: 100%;
    filter: blur(1px) opacity(0.6);
  }
</style>
