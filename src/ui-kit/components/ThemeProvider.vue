<template>
  <div id="theme-provider">
    <ThemeProvider :theme="theme">
      <slot></slot>
    </ThemeProvider>
  </div>
</template>

<script>
import { ThemeProvider } from 'vue-styled-components';
import theme from '../theme';

export default {
  name: 'CustomThemeProvider',
  components: {
    ThemeProvider,
  },
  data() {
    return { theme };
  },
};
</script>
