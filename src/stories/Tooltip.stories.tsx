import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "@components/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    content: { control: "text" },
    placement: {
      control: { type: "select", options: ["top", "bottom", "left", "right"] },
    },
    offsetX: { control: { type: "number", min: -50, max: 50, step: 1 } },
    offsetY: { control: { type: "number", min: -50, max: 50, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "150px 200px 150px 300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "기본 툴팁입니다.",
    children: <button>마우스를 올려보세요</button>,
  },
};

export const TopPlacement: Story = {
  args: {
    content: "위쪽에 표시되는 툴팁",
    placement: "top",
    children: <button>위쪽 툴팁</button>,
  },
};

export const BottomPlacement: Story = {
  args: {
    content: "아래쪽에 표시되는 툴팁",
    placement: "bottom",
    children: <button>아래쪽 툴팁</button>,
  },
};

export const LeftPlacement: Story = {
  args: {
    content: "왼쪽에 표시되는 툴팁",
    placement: "left",
    children: <button>왼쪽 툴팁</button>,
  },
};

export const RightPlacement: Story = {
  args: {
    content: "오른쪽에 표시되는 툴팁",
    placement: "right",
    children: <button>오른쪽 툴팁</button>,
  },
};

export const WithOffsetX: Story = {
  args: {
    content: "X축으로 오프셋된 툴팁",
    placement: "top",
    offsetX: 30,
    children: <button>X축 오프셋</button>,
  },
};

export const WithOffsetY: Story = {
  args: {
    content: "Y축으로 오프셋된 툴팁",
    placement: "left",
    offsetY: -20,
    children: <button>Y축 오프셋</button>,
  },
};

export const WithBothOffsets: Story = {
  args: {
    content: "X축과 Y축 모두 오프셋된 툴팁",
    placement: "right",
    offsetX: 15,
    offsetY: 15,
    children: <button>양축 오프셋</button>,
  },
};

export const LongContent: Story = {
  args: {
    content:
      "이것은 긴 내용의 툴팁입니다. 여러 줄의 텍스트를 포함할 수 있습니다.",
    placement: "bottom",
    children: <span>긴 내용 툴팁</span>,
  },
};
