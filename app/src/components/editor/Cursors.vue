<template>
  <div>
    <p>sldkfj</p>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 18 18" :aria-labelledby="iconName" role="presentation">
      <title :id="iconName" lang="en">{{ iconName }} icon</title>
      <g :fill="iconColor">
        <slot />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  name: "Cursors",
  data() {
    return {
      iconName: "box",
      width: 18,
      height: 18,
      iconColor: "red"
    };
  }
};
</script>
