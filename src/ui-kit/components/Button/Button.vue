<template>
  <StyledButton :variant="variant" :rounded="rounded">
    <slot></slot>
  </StyledButton>
</template>

<script>
import { StyledButton } from './button.style';

export default {
  name: 'button',

  components: {
    StyledButton,
  },

  props: {
    variant: {
      type: String,
      default: 'primary',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
