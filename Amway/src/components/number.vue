<template>
  <div id="number" class="wrapper" :style="size_">
    <div v-if="withTotal">
      <input 
        type="number"
        class="number flat w-full total disabled"
        v-model.number="per1"
        disabled
      >
    </div>
    <div class="container">
      <button
        class="button dec w-25p slide-effect"
        @click="decrement"
        :disabled="decDisabled"
        :style="dec_Style()"
      >
        -
      </button>
      <input
        type="number"
        class="number w-50p flat"
        :style="inp_Style()"
        :disabled="inputDisabled"
        :min="min"
        :max="max"
        v-model.number="currentValue"
        @blur="currentValue = value"
        @keydown.up.prevent="currentValue = value"
        @keydown.esc="currentValue = value"
        @keydown.down.prevent="currentValue = value"
      />
      <button
        class="button inc w-25p slide-effect"
        @click="increment"
        :disabled="incDisabled"
        :style="inc_Style()"
      >
        +
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    max: { type: Number, default: 10 },
    value: { type: Number, default: 1 },
    min: { type: Number, default: 0 },
    size: { default: "60" },
    type: { default: "around", type: String},
    withTotal: {default: false},
    per1 : {default: 1},
    textposition: {default: "left"}
  },
  data() {
    return {
      currentValue: this.value,
      incDisabled: false,
      decDisabled: false,
      inputDisabled: false,
      size_: this.getSize(),
      oldval: this.per1,
      textPosition: (()=> {
        this.textposition = this.textposition.toLowerCase()
        if(this.textposition == "left") return "text-align: left;"
        if(this.textposition == "center") return "text-align: center;"
        if(this.textposition == "right") return "text-align: right;"
      })(),
      inc_Style(){
        if(this.type == "left"){
          return "order: 1; border-left: 1px solid #646464"
        }else if(this.type == "right"){
          return "order: 2; border-left: 1px solid #646464"
        }else{
          return "order: 2;"
        }
      },
      dec_Style(){
        if(this.type == "left"){
          return "order: 0;"
        }else if(this.type == "right"){
          return "order: 1; border-left: 1px solid #646464"
        }else{
          return "order: 0;"
        }
      },
      inp_Style(){
        if(this.type == "left"){
          return "order: 2;"
        }else if(this.type == "right"){
          return "order: 0;"
        }else{
          return "order: 2;"
        }
      },
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
      this.$emit("input", this.currentValue);
    },
    type(val){
      console.log(val)
    },
    per1(val){
      this.per1 = val
      console.log(this.oldval)
    }
  },
  methods: {
    getSize() {
      this.size_ = "width: " + this.size + "%;";
      return this.size_;
    },
    increment() {
      if (this.incDisabled) return;
      if (this.currentValue > this.max) {
        this.decDisabled = true;
        return;
      } else {
        this.decDisabled = false;
      }
      this.currentValue++;
      this.updateValue(this.currentValue);
    },
    decrement() {
      if (this.decDisabled) return;
      if (this.currentValue <= 0) {
        this.decDisabled = true;
        return;
      } else {
        this.decDisabled = false;
      }
      this.currentValue--;
      this.updateValue(this.currentValue);
    },
    updateValue(val) {
      this.$emit("input", val);
      this.currentValue = val;
    },
  },
};
</script>
<style scoped>
.flat {
  border-radius: 0;
}
.container{
  display: flex;
  flex-direction: row;
}
.disabled{
  background-color: #fbfbfb;
  color: #000;
}
.button,
.number {
  border: 1px solid transparent;
  height: 32px;
}
.number {
  padding: 5px;
}
.button {
  background-color: rgb(161, 161, 161);
  color: #000;
}
.wrapper {
  border: 1.5px solid rgb(68, 68, 68);
  margin: auto;
  display: inline-block;
  padding: 0;
  width: 60%;
  border-radius: 4px;
  overflow: hidden;
}
.total{
  border-bottom: 1px solid #444444;
}
.wrapper:hover {
  box-shadow: 0 0 0 0.15rem rgba(224, 224, 224, 0.804);
}

.w-40p {
  width: 40%;
}
.w-60p {
  width: 60%;
}
.w-20p {
  width: 20%;
}
.w-25p {
  width: 25%;
}
.w-50p {
  width: 50%;
}
.w-90p{
  width: 90%;
}
</style>