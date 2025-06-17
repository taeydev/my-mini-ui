import type { Meta, StoryObj } from "@storybook/react";
import Image, { ImageErrorFallback, ThreeDots } from "@/components/Image";

const meta = {
  title: "Components/Media Components/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source URL",
    },
    alt: {
      control: "text",
      description: "Alternative text for the image.",
    },
    width: {
      control: "text",
      description: "Width of the image.",
    },
    height: {
      control: "text",
      description: "Height of the image.",
    },
    fallback: {
      control: false,
      description: "Component displayed while the image is loading.",
    },
    errorFallback: {
      control: false,
      description: "Component displayed when image loading fails.",
    },
  },
  args: {
    width: "300px",
    height: "200px",
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/300/200",
    alt: "Default Image",
  },
};

export const Error: Story = {
  args: {
    src: "https://this-is-not-real-image/404",
    alt: "Error Image",
  },
};
