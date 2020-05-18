<template>
  <div class="footer">
    <div class="center-footer">
      <p>© 2020 Leonid Tarasyuk</p>
      <span class="social">
        <a
          href=" https://www.linkedin.com/in/leonid-tarasyuk-8860821a3/"
          class="footerlink"
        >
          <img
            src="../assets/icons/lin.jpg"
            alt="linkedin"
            width="30px"
            height="30px"
          />
        </a>
        <a href="https://www.facebook.com/leo.tarasyuk52/" class="footerlink">
          <img
            src="../assets/icons/face.jpg"
            alt="facebook"
            width="30px"
            height="30px"
          />
        </a>
        <a href="https://www.instagram.com/leonid_tarasyuk/" class="footerlink">
          <img
            src="../assets/icons/inst.jpg"
            alt="instagram"
            width="30px"
            height="30px"
          />
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.footer
  width: 100%;
  height: auto;
  background-color: rgba(0,0,0, 0.4);
  .center-footer
    width: 80%;
    margin: 0 auto;
    padding: 5px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p
      font-family: "Lobster", Georgia, Times, serif;
      text-align: center;
    .social
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      .footerlink
        height: 30px;
        width: 30px;
        margin: 0px 5px;
</style>
