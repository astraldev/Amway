<template>
  <div>
    <div class="modal">
      <div class="header">
        <slot name="title">Modal</slot>
        <button class="btn btn-round close">x</button>
      </div>
      <div class="body">
        <slot name="content">Body of the modal</slot>
      </div>
      <div class="foot">
        <slot name="footer">Foot of the modal</slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.modal {
  position: fixed;
  border: 1px solid rgb(90, 90, 90);
  border-radius: 10px;
  height: 50vh;
  width: 90vw;
  padding: 5px;
  margin-right: calc(5vw);
  margin-left: calc(5vw);
  background: #fff;
  z-index: 10000;
}
.header{
  height: 20%;
  font-size: 20px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid rgb(158, 158, 158);
}
.close{
  box-shadow: none;
  padding: 0;
  height: 1.3em;
  width: 1.3em;
}
</style>