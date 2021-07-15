<template>
  <CustomThemeProvider>
    <Button :variant="'primary'" :rounded='true'>button</Button>
  </CustomThemeProvider>
</template>

<script lang="ts">
import Button from './ui-kit/components/Button/Button.vue';
import CustomThemeProvider from './ui-kit/components/ThemeProvider.vue';

export default ({
  name: 'App',
  components: {
    CustomThemeProvider,
    Button,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
