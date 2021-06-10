import Vue from 'vue'

Vue.directive("click-outside", {
  bind: function(el, binding, vonde){
    el.clickOutsideEvent = function(e){
      if(!(el == e.target || el.contains(e.target))){
        vonde.context[binding.expression](e)
      }
    }
    document.body.addEventListener("click", el.clickOutsideEvent)
  },
  unbind: function(el){
    document.body.removeEventListener("click", el.clickOutsideEvent)
  }
})
