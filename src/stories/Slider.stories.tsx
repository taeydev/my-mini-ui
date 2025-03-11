import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import styled from "@emotion/styled";
import Slider, { IndicatorInfo } from "@/components/Slider/Slider";
import "./slider.css";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    initialValue: {
      control: { type: "number" },
      description: "Initial value of the slider",
      defaultValue: 1,
    },
    onChange: {
      action: "changed",
      description: "Handler called when the slider value changes",
    },
    min: {
      control: { type: "number" },
      description: "Minimum value of the slider",
      defaultValue: 1,
    },
    max: {
      control: { type: "number" },
      description: "Maximum value of the slider",
      defaultValue: 10,
    },
    step: {
      control: { type: "number" },
      description: "Step increment/decrement value for the slider",
      defaultValue: 1,
    },
    stepIndicators: {
      control: { type: "object" },
      description:
        "Object containing indicator information for each step. You can set a name and render element for each step value.",
      defaultValue: undefined,
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS class name for customization",
      defaultValue: "",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "250px", padding: "20px", boxSizing: "border-box" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onChange: fn(),
    min: 0,
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValue: 30,
  },
};

export const WithMinMax: Story = {
  args: {
    initialValue: 20,
    min: 20,
    max: 80,
  },
};

export const WithStep: Story = {
  args: {
    initialValue: 20,
    step: 20,
  },
};

const stepValue: Record<number, IndicatorInfo> = {
  0: {
    render: <div style={{ fontSize: "12px", color: "#919191" }}>0</div>,
  },
  20: {
    render: <div style={{ fontSize: "12px", color: "#919191" }}>20</div>,
  },
  40: {
    render: <div style={{ fontSize: "12px", color: "#919191" }}>40</div>,
  },
  60: {
    render: <div style={{ fontSize: "12px", color: "#919191" }}>60</div>,
  },
  80: {
    render: <div style={{ fontSize: "12px", color: "#919191" }}>80</div>,
  },
  100: {
    render: <div style={{ fontSize: "12px", color: "#919191" }}>100</div>,
  },
};

export const WithIndicators: Story = {
  args: {
    initialValue: 0,
    step: 20,
    stepIndicators: stepValue,
  },
};

const CustomSlider = styled(Slider)`
  .slider-filled-track {
    background-color: rgb(255, 87, 143);
  }
  .slider-handle {
    background-color: rgb(255, 87, 143);
  }
`;

export const CustomStyledComponent: Story = {
  args: {
    initialValue: 50,
  },
  render: (args) => <CustomSlider {...args} />,
};

export const CustomStyle: Story = {
  args: {
    initialValue: 50,
    className: "custom-slider",
  },
};
