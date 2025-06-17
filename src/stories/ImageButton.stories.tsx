import type { Meta, StoryObj } from "@storybook/react";
import ImageButton from "@/components/Button/ImageButton";
import Image from "@/components/Image";

const meta = {
  title: "Components/Input Components/ImageButton",
  component: ImageButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    image: {
      control: "text",
      description: "URL of the image to display in the button",
    },
    alt: {
      control: "text",
      description: "Alternative text for the image",
    },
    width: {
      control: "text",
      description: "Width of the image",
    },
    height: {
      control: "text",
      description: "Height of the image",
    },
    className: {
      control: "text",
      description: "Additional class for styling",
    },
  },
} satisfies Meta<typeof ImageButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: <Image src="/assets/youtube.svg" alt="Youtube Icon" width="30px" height="30px" />,
    alt: "Youtube Icon",
    onClick: () => alert("Button clicked!"),
    width: "30px",
    height: "30px",
  },
};

export const CustomSize: Story = {
  args: {
    image: <Image src="/assets/youtube.svg" alt="Youtube Icon" width="50px" height="50px" />,
    alt: "Youtube Icon",
    onClick: () => alert("Button clicked!"),
    width: "50px",
    height: "50px",
  },
};
