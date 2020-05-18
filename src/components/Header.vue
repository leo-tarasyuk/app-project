<template>
  <div class="header">
    <div class="center-header">
      <label class="logo">
        <img src="../assets/icon.png" width="28px" height="40px" alt="Logo picture" />
        <h2>Click Place</h2>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="sass">
.header
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-color: rgba(0,0,0, 0.4);
  .center-header
    width: 85%;
    height: auto;
    margin: 0 auto;
    padding: 5px 0px;
    position: relative;
    display: flex;
    align-items: center;
  .logo
    display: flex;
    align-items: center;
    h2
      padding-left: 10px;
      font-family: "Lobster", Georgia, Times, serif;
      color: #ffffff;
</style>
