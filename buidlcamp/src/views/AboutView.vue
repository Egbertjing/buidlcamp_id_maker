<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
.item {
  margin-top: 2rem;
  display: flex;
}
.details {
  flex: 1;
  margin-left: 1rem;
}
.type_box {
  background: transparent;
  border-bottom: 2px solid #2d4682;
  padding: 4px 0;
  font-weight: 500;
  font-size: 14px;
  color: #7d8599;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #7d8599;
  }
}
</style>

<template>
</template>

<script>
import { initBuidlcamp, intoBuidlcamp } from "../api/buidlcamp_data.js";
export default {
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      show_id: false,
      result: "",
    };
  },
  mounted() {},
  methods: {
    async name_confirm() {
      let text = document.getElementById("content").value;
      if(!text){return;}
      this.result = await initBuidlcamp(text);
      console.log(this.result)
      this.show_id=true;
    },
  },
};

</script>

