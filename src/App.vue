<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass">
*
  margin: 0px
  padding: 0px


  ::-webkit-scrollbar-button
    background-image: url("#");
    background-repeat: no-repeat;
    width: 5px;
    height: 0px;
  
  ::-webkit-scrollbar-track
    background-color: rgba(255, 255, 255, 0.6);
  
  ::-webkit-scrollbar-thumb
    -webkit-border-radius: 0px;
    border-radius: 3px;
    background-color: #d0cccc;
  
  ::-webkit-resizer
    background-image: url("#");
    background-repeat: no-repeat;
    width: 8px;
    height: 0px;
  
  ::-webkit-scrollbar
    width: 8px;
</style>
