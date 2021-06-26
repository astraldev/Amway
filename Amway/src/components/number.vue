<template>
  <div
    id="number"
    class="
      mx-auto
      inline-block
      p-0
      overflow-hidden
      rounded-sm
      border border-gray-400
    "
    :style="size_"
  >
    <div v-if="withTotal" class="h-p-50">
      <input
        type="number"
        class="
          p-1.5
          border-0
          w-full
          border-b
          border-gray-800
          bg-gray-100
          text-gray-900
          appearance-none
        "
        v-model.number="per1"
        disabled
      />
    </div>
    <div class="inline-flex w-full " :class="resize()">
      <button
        class="border-1 p-0.5 dec w-p-25 slide-effect hover:darken font-x-medium"
        @click="decrement"
        :disabled="decDisabled"
        :style="dec_Style()"
      >
        -
      </button>
      <input
        type="number"
        class="w-p-50 border-0 appearance-none px-0.5 h-full"
        :class="textPosition()"
        :style="inp_Style()"
        :disabled="inputDisabled"
        :min="min"
        :max="max"
        v-model.number="currentValue"
        @keydown.enter="valueChanged()"
        @blur="currentValue = value"
        @keydown.up.prevent="currentValue = value"
        @keydown.esc="currentValue = value"
        @keydown.down.prevent="currentValue = value"
      />
      <button
        class="border-1 p-0.5 dec w-p-25 slide-effec hover:darken font-x-medium"
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
    type: { default: "around", type: String },
    withTotal: { default: false },
    per1: { default: 1 },
    textposition: { default: "left" },
    btncolor: {default: "white"},
    textcolor:{default: "black"},
  },
  data() {
    return {
      currentValue: this.value,
      incDisabled: false,
      decDisabled: false,
      inputDisabled: false,
      size_: this.getSize(),
      oldval: this.per1,
      resize(){
        if(this.withTotal){
          return "h-p-50"
        }
        return "h-full"
      },
      textPosition(){
        this.textposition = this.textposition.toLowerCase()
        if (this.textposition == "left") return "text-left";
        if (this.textposition == "center") return "text-center";
        if (this.textposition == "right") return "text-right";
      },
      inc_Style() {
        if (this.type == "left") {
          return `order: 1; border-left: 1px solid #555; background-color: ${this.btncolor};color: ${this.textcolor}`; 
        } else if (this.type == "right") {
          return `order: 2; border-left: 1px solid #555; background-color: ${this.btncolor};color: ${this.textcolor}`;
        } else {
          return `order: 2; background-color: ${this.btncolor};color: ${this.textcolor}`;
        }
      },
      dec_Style() {
        if (this.type == "left") {
          return `order: 0; background-color: ${this.btncolor};color: ${this.textcolor}`;
        } else if (this.type == "right") {
          return `order: 1; border-left: 1px solid #555; background-color: ${this.btncolor};color: ${this.textcolor}`;
        } else {
          return `order: 0; background-color: ${this.btncolor};color: ${this.textcolor}`;
        }
      },
      inp_Style() {
        if (this.type == "left") {
          return "order: 2;";
        } else if (this.type == "right") {
          return "order: 0;";
        } else {
          return "order: 2;";
        }
      },
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
      this.$emit("input", this.currentValue);
    },
    type(val) {
      console.log(val);
    },
    per1(val) {
      this.per1 = val;
      console.log(this.oldval);
    },
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
    valueChanged(){
      this.updateValue(this.currentValue)
    }
  },
};
</script>
<style scoped>
.hover\:darken:hover{
  background: rgba(40,40,40,0.1);
  transition: background 10ms ease ;
}
.flat {
  border-radius: 0;
}
.container {
  display: flex;
  flex-direction: row;
}
.disabled {
  background-color: #fbfbfb;
  color: #000;
}
.button,
.number {
  border: 1px solid transparent;
  height: 32px;
}
.button {
  background-color: rgb(161, 161, 161);
  color: #000;
}
.total {
  border-bottom: 1px solid #444444;
}
.wrapper:hover {
  box-shadow: 0 0 0 0.15rem rgba(224, 224, 224, 0.804);
}

color-picker{
  color: rgb(49, 139, 243);
}
</style>