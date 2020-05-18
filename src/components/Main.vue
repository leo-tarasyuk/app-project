<template>
  <div class="main-construction">
    <Introdaction></Introdaction>
    <div class="main-block">
      <Navigation></Navigation>
      <Map></Map>
      <Description></Description>
    </div>
    <Instruction></Instruction>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Introdaction from "./Introdaction";
import Map from "./Map";
import Navigation from "./Navigation";
import Instruction from "./Instruction";
import Description from "./Description";
export default {
  components: {
    Introdaction,
    Map,
    Navigation,
    Instruction,
    Description,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("menu", ["SetData"]),
  },
  created() {
    this.resource = this.$resource("menu");
    this.resource
      .get()
      .then((response) => response.json())
      .then((data) => {
        this.SetData(data);
      });
  },
};
</script>

<style lang="sass" scoped>
.main-construction
  width: 100%;
  height: 100%;

.main-block
  width: 100%
  height: 100%
  display: flex
@media (max-width: 1024px)
  .main-block
    display: block;
</style>
