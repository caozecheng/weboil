<template>
  <div>
    这是welcome页面
  </div>
</template>

<script >
  import mix from "./welcome-mixins"
  export default{
    mixins : [mix]
  };
</script>

<style>
 @import url(
   "./welcome.less"
 );
</style>
