<template>
  <ul :style='menuStyle'>
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: 'ContextMenu',
  props: {
    maxWidth: [Number, String],
    visible: Boolean,
    location: Object
  },
  computed: {
    menuStyle () {
      if (!this.maxWidth) return null;
      const visibility = this.visible === false ? 'hidden' : 'visible';
      const style = {
        'max-width': typeof this.maxWidth === 'number' ? `${this.maxWidth}px` : this.maxWidth,
        'visibility': visibility,
        'top': `${this.location.y}px`,
        'left': `${this.location.x}px`
      }
      return style;
    }
  }
}
</script>
<style scoped>
ul {
  position: fixed;
  list-style: none;
  border: 1px solid #e8e8e8;
  box-shadow: 2px 2px 8px 0 hsla(0,0%,59%,.2);
  border-radius: 5px;
  padding: 3px 0px;
  font-size: 14px;
  cursor: pointer;
  z-index: 3000;
  background-color: #fff;
}
</style>
