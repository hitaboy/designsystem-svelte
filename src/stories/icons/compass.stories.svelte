<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Compass from "../../lib/icons/compass.svelte";
  </script>


  <Meta
    title="DSV/Compass"
    component={Compass}
    argTypes={{
      fill: { control: "color" },
      title: { control: "text" },
      class: { 
        table: {
          disable: true,
        }, 
      },
      onClick: { action: "onClick" },
    }}
  />


  <Template let:args>
    <Compass {...args} on:click={args.onClick} />
  </Template>


  <Story
    name="Primary"
    args={{
      title: "Close",
    }}
  />

  <Story
    name="Secondary"
    args={{
      title: "Close",
      class: "btn-primary2",
      fill: "#fc0"
    }}
  />


