<template>
  <div class="card resource-card shadow20">
    <figure class="photo-container">
      <slot name="banner"></slot>
    </figure>
    <div class="credits">
      <h4 class="h5"><slot name="title"></slot></h4>
      <p class="regular12 uppercase"><slot name="director"></slot></p>
      <p class="bold12"><slot name="producer"></slot></p>
    </div>
    <div class="description">
      <p class="regular14"><slot name="description"></slot></p>
    </div>
    <a :href="href" class="bold14 uppercase read-more-link">En savoir plus</a>
  </div>
</template>

<script>
export default {
  name: "ResourceCard",
  props: {
    'href': {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.resource-card {
  padding: 8px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 10px;
}

figure {
  width: 100%;
  height: 100px;
  background: var(--black50);
}

figure>* {
  height: 100%;
}

.credits {
  display: flex;
  flex-flow: column nowrap;
  gap: 4px;
}

.description {
  color: var(--black70);
}

.read-more-link {
  color: var(--black50);
}

.read-more-link:hover {
  color: var(--black70);
}

</style>
