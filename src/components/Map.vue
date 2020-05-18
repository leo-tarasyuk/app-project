<template>
  <div class="map">
    <GmapMap :center="center" :zoom="zoom" :style="style">
      <GmapMarker
        v-for="elem in getMapData"
        :key="elem.id"
        :position="elem.position"
        :clickable="true"
        @click="ChangeState(elem.data)"
      />
    </GmapMap>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      zoom: 12,
      center: { lat: 52.1, lng: 23.7 },
      style: "width: 100%; height: 100%",
    };
  },
  computed: {
    ...mapGetters("map", ["getMapData"]),
  },
  methods: {
    ...mapActions("description", ["setDescriptionData"]),
    ...mapActions("description", ["setStateDescription"]),
    ChangeState(data) {
      this.setDescriptionData(data);
      this.setStateDescription(true);
    },
  },
};
</script>

<style lang="sass">
.map
  width: 100%
  height: 600px;
</style>
