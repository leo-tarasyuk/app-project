<template>
  <nav class="navigation" @mousemove="offScroll" @mouseleave="onScroll">
    <figure
      @mouseleave="onScroll"
      class="button-place"
      v-for="num of getDataMenu"
      :key="num.id"
    >
      <div class="picture-place" @click="clickButtonPlace(num.listMarkers)">
        <img class="place" :src="require(`../assets/places/${num.name}.jpg`)" />
        <p>{{ num.name }}</p>
      </div>
    </figure>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    offScroll() {
      document.querySelector("body").style.overflow = "hidden";
    },
    onScroll() {
      document.querySelector("body").style.overflow = "auto";
    },
    ...mapActions("map", ["setMapData"]),
    clickButtonPlace(data) {
      this.setMapData(data);
    },
  },
  computed: {
    ...mapGetters("menu", ["getDataMenu"]),
  },
};
</script>

<style lang="sass">
.navigation
  min-width: 190px;
  height: 600px;
  background-color: #e8e8e8;;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .button-place
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .picture-place
      width: 100%;
      height: 100%;
      position: relative;
      &:hover
        &:before
          position: absolute;
          content: ""
          width: 100%;
          height: 100%;
          background-color: #fff;
          opacity: 1;
          top: 0;
          left: auto;
          right: 0;
          z-index: 10;
      &:active
        &:before
          background-color: #fff;
          opacity: 0;
      .place
        width: 180px;
        height: 120px;
        position: relative;
        z-index: 1;
        background-color: #fff;
        opacity: 0.5;
      @media (max-width: 1024px)
        .place
          width: 140px;
          height: 90px;
      p
        width: 100%;
        color: black;
        font-weight: 800;
        font-family: "Lobster", Georgia, Times, serif;
        font-size: 20px;
        text-align: center;
        position: absolute;
        z-index: 100;
        top: calc(50% - 11px);
      @media (max-width: 1024px)
        p
          font-size: 16px;
  @media (max-width: 1024px)
    .button-place
      width: auto;
@media (max-width: 1024px)
  .navigation
    width: 0 auto;
    height: 100%;
    flex-direction: row;
</style>
