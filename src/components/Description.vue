<template>
  <div v-if="getStateDescription" class="description">
    <div class="close" @click="ChangeState"></div>
    <div class="description-place">
      <h2>{{ getDescriptionData.name }}</h2>
      <img
        :src="require(`../assets/marker-place/${getDescriptionData.name}.jpg`)"
      />
    </div>
    <p>
      {{ getDescriptionData.description }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("description", ["getStateDescription"]),
    ...mapGetters("description", ["getDescriptionData"]),
  },
  methods: {
    ...mapActions("description", ["setStateDescription"]),
    ChangeState() {
      this.setStateDescription(false);
    },
  },
};
</script>

<style lang="sass">
.description
  width: 40%;
  height: 600px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .close
    position: absolute;
    right: 0px;
    top: 0px;
    width: 30px;
    height: 30px;
    opacity: 0.3;
    background-color: #999;
    &:hover
      opacity: 1;
    &:before,
    &:after
      position: absolute;
      left: 15px;
      content: " ";
      height: 30px;
      width: 2px;
      background-color: #333;
    &:before
      transform: rotate(45deg);
    &:after
      transform: rotate(-45deg);
  .description-place
    width: 100%;
    min-width: 260px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    h2
      width: 100%
      text-align: center;
      font-size: 36px;
      padding-bottom: 25px;
    img
      width: 250px;
      height: 200px;
      background: cover;
  @media (max-width: 1024px)
    .description-place
      min-width: 30%
      padding: 25px 0px;
  p
    height: 100%;
    padding: 20px;
    text-indent: 30px;
    text-align: justify;
  @media (max-width: 1024px)
    p
      font-size: 20px;
@media (max-width: 1024px)
  .description
    width: 100%;
    height: 100%;
    flex-direction: row;
@media (max-width: 775px)
  .description
    flex-direction: column;
</style>
