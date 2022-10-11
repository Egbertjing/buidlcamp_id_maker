<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
    margin: auto;
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
.icon {
  clear: both;
  display: block;
  margin: auto;
}
#code_vessel{

  font-size: 0;
  width: auto;
  margin: 0 auto;
  margin-top: 20%;

}
.code_frame{


  margin-left: 3px;
  font-size: 0;
  display: inline-block;
  width: 40px;
  height: 49px;

}

.code_input{

  border: 1px solid darkgray;
  background: cornsilk;
  font-size: 28px;
  width: 37px;
  height: 44px;
  border-radius: 3px 3px 3px 3px;
  text-align: center;
  box-shadow: 0 5px 10px 2px rgba(0,0,0,.1);
}
</style>

<template>
  <div class="about" v-if="!show_id">
    <h2 style="margin-left:20px;">Enter your name and we have prepared a little gift for you</h2>
    <div class="display:inline;">
      <input
        id="content"
        class="block type_box mt-10px"
        maxLength="64"
        placeholder="Add your Name..."
        style="display:block;width:350px; margin-top:20px;margin-bottom:20px; text-align:center;vertical-align:middel;" 
      />
      <div class="mt-20px" >
        <img  id="type" src="@/assets/confirm_dark.svg" width="60" class="icon" @click="name_confirm()"/>
      </div>
    </div>
  </div>
  <div class="about" v-if="show_id">
    <h2>Your Buidlcamp ID is</h2>
    <!-- <h1> <mark style="color: white; background-color:grey">{{result.Buidlcamp_list[0]['user_id']}}</mark> </h1> -->
    <div id="code_vessel" align="center">
      <div class="code_frame">
          <input class="code_input" id="char1"  data-index="0"  :value="result.Buidlcamp_list[0]['user_id']['0']" maxlength="1" readonly="readonly">
      </div>
      <div class="code_frame">
          <input class="code_input" id="char2"  data-index="1" :value="result.Buidlcamp_list[0]['user_id']['1']" maxlength="1" readonly="readonly">
      </div>
      <div class="code_frame">
          <input class="code_input" id="char3"  data-index="2" :value="result.Buidlcamp_list[0]['user_id']['2']" maxlength="1" readonly="readonly">
      </div>
      <div class="code_frame">
          <input class="code_input" id="char4"  data-index="3" :value="result.Buidlcamp_list[0]['user_id']['3']" maxlength="1" readonly="readonly">
      </div>
      <div class="code_frame">
          <input class="code_input" id="char5"  data-index="4" :value="result.Buidlcamp_list[0]['user_id']['4']" maxlength="1" readonly="readonly">
      </div>
      <div class="code_frame">
          <input class="code_input" id="char6"  data-index="5" :value="result.Buidlcamp_list[0]['user_id']['5']" maxlength="1" readonly="readonly">
      </div>
    </div>

    <h4 style="margin-top:30px;">(This id will only show you one time, remember to take a !!Screenshot!!)</h4>
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
      this.show_id=true;
      for (let i = 0; i < 6; i++) {
        document.getElementById("char" + (i + 1)).value =
          this.result.Buidlcamp_list[0]["user_id"][i];
      }
    },
  },
};


</script>

