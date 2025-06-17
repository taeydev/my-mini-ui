import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Input Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: "select", // select로 variant를 고를 수 있도록 설정
        options: ["primary", "secondary", "outline", "success", "error"], // variant 옵션
      },
    },
    outline: {
      control: "boolean",
    },
    size: {
      control: {
        type: "select", // select로 size를 고를 수 있도록 설정
        options: ["small", "medium", "large"], // size 옵션
      },
    },
    rounded: {
      control: "boolean",
    },
    disabled: {
      control: "boolean", // boolean control로 disabled 상태를 토글할 수 있게 설정
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: () => console.log("Button clicked"), // onClick 기본 핸들러
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Outline: Story = {
  args: {
    variant: "secondary",
    outline: true,
  },
};

export const OutlineLight: Story = {
  args: {
    variant: "light",
    outline: true,
  },
};

export const Rounded: Story = {
  args: {
    variant: "primary",
    rounded: true,
  },
};
