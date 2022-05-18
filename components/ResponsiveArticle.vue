<template>
  <div class="responsive-article" :class="reversed ? 'reversed' : ''">
    <slot name="top" />
    <slot name="bot" />
  </div>
</template>

<script>
export default {
  name: "ResponsiveArticle",
  props: {
    'reversed': Boolean
  }
}
</script>

<style scoped>

.responsive-article {
  display: flex;
  flex-flow: column nowrap;
  gap: 30px;
}

@media screen and (min-width: 992px){
  .responsive-article {
    flex-flow: row nowrap;
    align-items: stretch;
    gap: 40px;
  }
  .responsive-article>* {
   flex-basis: 100%;
  }
  .responsive-article.reversed {
   flex-flow: row-reverse nowrap;
 }
}

</style>
