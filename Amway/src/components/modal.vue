<template>
  <div
    v-if="value"
    class="fixed top-0 w-full z-30 h-full blur-md grid place-items-center"
    style="background: rgba(10, 10, 10, 0.3)"
    tabindex="0"
    @click="close()"
  >
    <div
      class="
        mx-auto
        border-2 border-blue-500
        p-2
        bg-white
        shadow-md
        rounded-md
        z-50
        absolute
        w-p-80
        md:w-p-60
        lg:w-p-40
      "
    >
      <div class="flex space-x-2 justify-between m-1 border-b border-gray-300">
        <div class="text-gray-600 font-bold text-lg">
          <slot name="title" class="text-gray-200 font-bold text-lg"
            >Modal</slot
          >
        </div>
        <button
          class="border-0 bg-gray-50 hover:bg-gray-200 p-1.5 h-6 rounded-md"
          @click="close()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="SVGRoot"
            version="1.1"
            viewBox="0 0 24 24"
            class="h-3 w-3"
          >
            <g>
              <path
                d="m 2.35,1.8 19.139567,20 v 0"
                style="
                  fill: none;
                  stroke: #000000;
                  stroke-width: 3;
                  stroke-linecap: round;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 4;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
              />
              <path
                d="m 2.35,21.8 19,-20"
                style="
                  fill: none;
                  stroke: #000000;
                  stroke-width: 3;
                  stroke-linecap: round;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 4;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
              />
            </g>
          </svg>
        </button>
      </div>
      <div class="px-1 text-lg font-medium text-gray-800 my-2 box-border">
        <slot name="content">Body of the modal</slot>
      </div>
      <div class="p-1">
        <slot name="footer" class="border-t border-gray-300"
          >Foot of the modal</slot
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: { default: false },
  },
  methods: {
    close() {
      if(this.value)
      setTimeout(()=>{this.$emit("close")}, 100);
    },
  },
};
</script>
<style scoped>
.z-1000 {
  z-index: 1000;
}
</style>