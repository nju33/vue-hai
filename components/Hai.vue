<template>
  <div @click="handleClick($event)"></div>
</template>

<script>
import Hai from '@nju33/hai/dist/hai.umd';

export default {
  props: {
    talks: {
      type: Array,
      required: true
    },
    callback: {
      type: Function,
      default: answers => console.log(answers)
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  watch: {
    theme(val) {
      Hai.config.theme = val;
    }
  },
  methods: {
    handleClick(ev) {
      const hai = new Hai(this.talks);
      hai.open(ev.currentTarget).then(this.callback);
    }
  },
  mounted() {
    Hai.config.theme = this.theme;
  }
};
</script>
