<template>
  <div class="objective-card">
    <h3 class="h6"><slot name="title"></slot></h3>
    <p class="regular16"><slot name="text"></slot></p>
    <div class="inner" :class="inner ? 'show' : ''">
      <p class="regular16"><slot name="inner-text"></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ObjectiveCard",
  props: {
    'inner': Boolean
  }
}
</script>

<style scoped>
.objective-card {
  padding: 16px;
  border-left: 10px solid var(--orange50);
  border-radius: 8px;
  background: var(--white70);
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
}

.inner {
  padding: 8px;
  border-radius: 8px;
  background: var(--white);
  display: none;
}
.inner.show {
  display: block;
}
</style>
