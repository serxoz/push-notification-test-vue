<template>
  <div class="hello">
    <button type="button" @click="notify">Show notification</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    notify() {
      const notification = {
        title: "Your title",
        options: {
          body: "This is an example!",
        },
        events: {
          onerror: function () {
            console.log("Custom error event was called");
          },
          onclick: function () {
            console.log("Custom click event was called");
          },
          onclose: function () {
            console.log("Custom close event was called");
          },
          onshow: function () {
            console.log("Custom show event was called");
          },
        },
      };
      this.$notification.show(
        notification.title,
        notification.options,
        notification.events
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
