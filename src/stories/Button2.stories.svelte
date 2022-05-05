<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Button2 from "../lib/Button2/Button2.svelte";
  </script>


  <Meta
    title="DSV/Button2"
    component={Button2}
    argTypes={{
      label: { control: "text" },
      primary: { control: "boolean" },
      backgroundColor: { control: "color" },
      size: {
        control: { type: "select", options: ["small", "medium", "large"] },
      },
      onClick: { action: "onClick" },
    }}
  />


  <Template let:args>
    <Button2 {...args} on:click={args.onClick} />
  </Template>


  <Story
    name="Primary"
    args={{
      primary: true,
      label: "Button2",
    }}
  />


  <Story
    name="Secondary"
    args={{
      label: "Button2",
    }}
  />
  <Story
    name="Large"
    args={{
      size: "large",
      label: "Button2",
    }}
  />


  <Story
    name="Small"
    args={{
      size: "small",
      label: "Button2",
    }}
  />
