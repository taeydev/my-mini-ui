import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "@/components/Carousel/Carousel";

const meta = {
  title: "Components/Media Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    slides: {
      control: false,
      description: "JSX element or custom ReactNode",
    },
    loop: {
      control: "boolean",
      description: "loop",
      defaultValue: true,
    },
    slideWidth: {
      control: {
        type: "number",
      },
    },
    slideHeight: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    slides: [
      {
        imageSrc: "/images/slide1.jpg",
        imageAlt: "Slide 1",
        onClick: () => alert("Slide 1 clicked!"),
      },
      {
        imageSrc: "/images/slide2.jpg",
        imageAlt: "Slide 2",
        onClick: () => alert("Slide 2 clicked!"),
      },
      {
        imageSrc: "/images/slide3.jpg",
        imageAlt: "Slide 3",
        onClick: () => alert("Slide 3 clicked!"),
      },
      {
        imageSrc: "/images/slide4.jpg",
        imageAlt: "Slide 4",
        onClick: () => alert("Slide 4 clicked!"),
      },
      {
        imageSrc: "/images/slide5.jpg",
        imageAlt: "Slide 5",
        onClick: () => alert("Slide 5 clicked!"),
      },
    ],
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slideWidth: 500,
    slideHeight: 350,
  },
};

export const NoLoop: Story = {
  args: {
    slideWidth: 300,
    slideHeight: 200,
    loop: false,
  },
};
