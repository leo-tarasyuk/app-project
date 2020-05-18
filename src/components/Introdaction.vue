<template>
  <div class="introdaction">
    <div class="logo-name">
      <h1>Welcome to Click Place</h1>
      <div @click.prevent="checkInstruction" class="button-check">
        <a href>Check inctruction</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    checkInstruction() {
      let windowWidth = document.documentElement.clientWidth;
      if (windowWidth > 1024) {
        window.scrollBy(0, 1150);
      } else {
        if (windowWidth > 775) {
          window.scrollBy(0, 1550);
        } else {
          window.scrollBy(0, 1850);
        }
      }
    }
  }
};
</script>

<style lang="sass">
.introdaction
  width: 100%;
  height: 600px;
  background: no-repeat url("../assets/desktop.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-name
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    h1
      color: white;
      text-align: center;
      font-size: 60px;
      padding: 25px 25px;
    .button-check
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 25px;
      a
        font-weight: 800;
        font-size: 24px;
        font-family: "Lobster", Georgia, Times, serif;
        color: white;
        text-decoration: none;
        border-radius: 3px;
        background: rgb(0, 200, 250);
        padding: 12px 16px;
        transition: 0.2s;
        background: #1374e9;
        &:hover
          background: #4086f4;
        &:active
          background: #5f98f1;
      @media (max-width: 1024px)
        a
          font-size: 16px;
    @media (max-width: 1024px)
      h1
        font-size: 48px;
        text-align: center;
    @media (max-width: 775px)
      h1
        font-size: 36px;
      .logo-name
        width: 70%;
@media (max-width: 775px)
  .introdaction
    height: 500px;
</style>
