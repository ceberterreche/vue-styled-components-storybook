import Button from './Button.vue';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    rounded: { control: 'boolean', table: { cateory: 'Radius' } },
    variant: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  rounded: false,
};

export const Secondary = Template.bind({});
Primary.args = {
  variant: 'secondary',
  rounded: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
  variant: 'primary',
  rounded: true,
};
