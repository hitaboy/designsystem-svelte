<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Close from "../../lib/icons/close.svelte";
  </script>


  <Meta
    title="DSV/Close"
    component={Close}
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
    <Close {...args} on:click={args.onClick} />
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


