<template>
  <div class="collapsible-card card">
    <div class="content">

      <div class="top">
        <slot name="top"/>
      </div>
      <div ref="collapsibleContent" class="collapsible" :class="opened ? 'opened' : ''">
        <slot name="collapsible"/>
      </div>

    </div>

    <button class="button-orange" @click="collapse">
      <span class="bold14 button-text">{{ button_text }}</span>
      <span class="button-icon" :class="opened ? 'rotated' : ''">
        <svg class="icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.59375 5.46875L16.4062 13.2812L8.59375 21.0938" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>

  </div>
</template>

<script>
export default {
  name: "CollapsibleCard",
  data() {
    return {
      opened: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.refreshContentHeight)
  },
  methods: {
    refreshContentHeight() {
      if (this.opened) this.close();
    },
    collapse() {
      if (!this.opened) this.open();
      else this.close();
    },
    open() {
      const collapsibleContent = this.$refs.collapsibleContent;
      let contentHeight = collapsibleContent.scrollHeight;
      collapsibleContent.style.height = `${contentHeight}px`;
      this.opened = true;
    },
    close() {
      const collapsibleContent = this.$refs.collapsibleContent;
      collapsibleContent.removeAttribute('style');
      this.opened = false;
    }
  },
  computed: {
    button_text() {
      return this.opened ? "Fermer le déroulé" : "En savoir plus"
    }
  }
}
</script>

<style scoped>
.collapsible-card {
  padding: 16px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.content {
  max-width: 100%;
}

.top {
  margin-bottom: 50px;
}

.collapsible {
  height: 0;
  margin-bottom: 0;
  overflow-y: hidden;
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
  transition: height 250ms linear,
  margin-bottom 250ms linear
}

.collapsible.opened {
  margin-bottom: 50px;
}

.button-icon {
  margin-right: -8px;
}

.icon {
  background-image: url("../assets/fleche,blanc.svg");
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  transition: transform 50ms 150ms linear;
}

.button-icon.rotated {
  margin-right: unset;
}

.button-icon.rotated .icon {
  transform: rotate(-90deg);
}

@media screen and (min-width: 768px) {
  .collapsible-card {
    padding: 40px;
  }
}
</style>
