<template>
  <div class="instruction">
    <div class="main-instruction">
      <h2 class="logo-instruction">Instruction</h2>
      <div class="instruction-steps">
        <section class="step">
          <h2>Step 1</h2>
          <img src="../assets/navigation.png" alt="">
          <p>To view a specific place, you should click on one of the buttons that you will see to the left of the map.</p>
        </section>
        <section class="step">
          <h2>Step 2</h2>
          <img src="../assets/map.png" alt="">
          <p>Then, the map displays all available places in the city, that you have selected. Click on one of these places on the map.</p>
        </section>
        <section class="step">
          <h2>Step 3</h2>
          <img src="../assets/example.png" alt="">
          <p>After that, a description field for this place will appear to the right of the map.</p>
        </section>
      </div>
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
.instruction
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-instruction
    width: 90%;
    height: 100%;
    .logo-instruction
      width: 100%;
      height: 100%;
      font-size: 48px;
      text-align: center;
      padding: 30px 0px 15px 0px;
    .instruction-steps
      width: 100%
      height: auto;
      display: flex
      flex-wrap: no wrap
      .step
        width: 100%
        height: 100%;
        display: flex
        flex-direction: column
        align-items: center;
        padding: 0px 5px;
        div
          width: 270px;
          height: 240px;
          background-color: black
        img
          width: 250px;
          height: 250px;
          background: cover;
        h2
          font-size: 36px;
          padding: 15px 0px 30px 0px;
        @media (max-width: 1024px)
          h2
            padding: 0px 0px 30px 0px;
        p
          font-size: 24px;
          text-align: justify;
          padding: 20px;
        @media (max-width: 1024px)
          p
            text-align: center;
        @media (max-width: 775px)
          p
            font-size: 18px;
            padding: 30px 10px;
    @media (max-width: 1024px)
      .instruction-steps
        display: inline;
</style>
