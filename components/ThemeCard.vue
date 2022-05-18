<template>
  <div class="theme-card">
    <div class="title-box">
      <p class="regular14 title"><slot name="title"></slot></p>
    </div>
    <div class="text">
      <p class="regular14"><slot name="text"></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeCard"
}
</script>

<style scoped>
.theme-card {
  padding: 2px;
}

.title-box {
  background: var(--violet100);
  width: max-content;
  padding: 5px 8px;
  margin-left: 2px;
  position: relative;
  transform: rotate(-4deg);
  margin-bottom: 10px;
}

.title {
  width: max-content;
  color: var(--white);
}

.text {
  padding: 3px;
}
</style>
