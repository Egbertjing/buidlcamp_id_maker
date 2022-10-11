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
  <div class="about" v-if="!show_id">
    <h1>Enter your name and we prepare a little gift for you</h1>
    <div class="display:inline;">
      <input
        id="content"
        class="block type_box mt-10px"
        maxLength="64"
        placeholder="Add your Name..."
        style="display:block;width:400px; margin-top:20px;margin-bottom:20px;" 
      />
      <div class="mt-10px" >
        <img  id="type" src="@/assets/confirm_dark.svg" width="80" class="icon" @click="name_confirm()"/>
      </div>
    </div>
  </div>
  <div class="about" v-if="show_id">
    <h1>Your Buidlcamp ID is</h1>
    <h1> {{result.Buidlcamp_list[0]['user_id']}} </h1>
    <h2>(This id will only show you one time, remember to take a !!Screenshot!!)</h2>
  </div>
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

