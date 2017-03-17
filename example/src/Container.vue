<template lang="html">
  <Hai ref="p" class="p" :talks="talks" :theme="'light'" :callback="callback"/>
</template>

<script>
import Hai from 'components/Hai';

export default {
  components: {
    Hai
  },
  data() {
    return {
      talks: [
        {
          name: 'question',
          message: 'question message',
          button: [
            ['Yes', function (next, names) {
              next(names.done);
            }],
            ['No', function (next, names, actions) {
              next(actions.cancel);
            }]
          ]
        },
        {
          name: 'done',
          message: 'done message',
          button: [
            ['Done', function (next, names, actions) {
              next(actions.done);
            }]
          ]
        }
      ]
    };
  },
  methods: {
    callback(answers) {
      console.log('callback!');
      console.log(answers)
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.p {
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  background: #ccc;
  margin: 1em;
  height: 2em;
  width: 30%;
}
</style>
