import Button from "./Button.vue";

export default {
  title: "Camino/Components/Button",
  component: Button,
  argTypes: {
    slot: {
      type: "string",
      default: "Default Slot Text",
    },
    icon: {
      type: "string",
    },
    variant: {
      options: ["primary", "secondary"],
      control: "radio",
      defaultValue: "secondary",
    },
    iconPosition: {
      options: ["start", "end"],
      control: "radio",
      defaultValue: "start",
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args">${args.slot}</Button>`,
});

export const Default = Template.bind({});
Default.args = {
  slot: "Read More",
};

export const Primary = Template.bind({});
Primary.args = {
  slot: "Save",
  variant: "primary",
};

export const Icon = Template.bind({});
Icon.args = {
  slot: "Continue",
  icon: "arrow_forward",
  iconPosition: "end",
};
