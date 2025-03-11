import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Card from "@/components/Card/Card";
import "./card.css";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: false,
      description: "JSX element or custom ReactNode",
    },
    title: {
      control: "text",
      description: "The title of the card.",
    },
    description: {
      control: "text",
      description: "The description of the card.",
    },
    onClick: {
      action: "clicked",
      description: "Handler function called when clicked the card.",
    },
    className: { control: "text" },
    width: { control: "number" },
    height: { control: "number" },
  },
  args: {
    onClick: fn(),
    image: null,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "This is Card",
    description: "This is the description of the card.",
  },
};

const Image = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#A5D6A7" />
  </svg>
);

export const CardWithImage: Story = {
  args: {
    title: "This is Card",
    description: "This is the description of the card.",
    image: <Image />,
  },
};

export const CardWithLongTitle: Story = {
  args: {
    title: "This is Looooooooooooooooong Card",
    description: "This is the description of the card.",
  },
};

export const CardWithLongDescription: Story = {
  args: {
    title: "This is Card",
    description:
      "This is the description of the card. This is the description of the card. This is the description of the card. This is the description of the card. This is the description of the card.",
  },
};

export const CardWithSize: Story = {
  args: {
    title: "This is Card",
    description: "This is the description of the card.",
    image: <Image />,
    width: 150,
    height: 200,
  },
};
