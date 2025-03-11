import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TextField from "@/components/TextField/TextField";
import styled from "@emotion/styled";

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "The value of the input field.",
    },
    placeholder: {
      control: "text",
      description: "The placeholder text for the input field.",
    },
    helpText: {
      control: "text",
      description: "The help message displayed below the input field.",
    },
    errorMessage: {
      control: "text",
      description: "The error message displayed below the input field.",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input field is disabled.",
    },
    onChange: {
      action: "changed", // Storybook 액션을 사용해 이벤트 추적
      description: "Handler function called when the input value changes.",
    },
    className: { control: "text" },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const StyledTextField = styled(TextField)`
  width: 300px;
`;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "입력하세요.",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <StyledTextField {...args} value={value} onChange={setValue} />;
  },
};

export const WithInitialValue: Story = {
  ...Default,
  args: {
    ...Default,
    value: "기본값",
    placeholder: "입력하세요.",
  },
};

export const WithHelpText: Story = {
  ...Default,
  args: {
    value: "",
    placeholder: "입력하세요.",
    helpText: "한글, 영문, 숫자만 입력하세요.",
  },
};

export const WithErrorMessage: Story = {
  args: {
    value: "",
    placeholder: "입력하세요.",
    errorMessage: "",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    // value에 따라 errorMessage를 업데이트하는 로직
    const isValid = /^[a-zA-Z]*$/.test(value);

    if (!isValid) {
      args.errorMessage = "영문만 입력하세요.";
    } else {
      args.errorMessage = "";
    }

    return (
      <StyledTextField
        {...args}
        value={value}
        onChange={setValue}
        errorMessage={args.errorMessage}
      />
    );
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    value: "",
    placeholder: "입력하세요.",
    disabled: true,
  },
};

const CustomTextField = styled(TextField)`
  width: 300px;
  &:focus {
    border-width: 2px;
    border-color: rgb(255, 87, 143);
  }
`;

export const CustomStyle: Story = {
  args: {
    value: "",
    placeholder: "전화번호를 입력하세요.",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <CustomTextField {...args} value={value} onChange={setValue} />;
  },
};
