import { Meta, StoryObj } from "@storybook/react";
import Menu from "@/components/Menu/Menu";
import MenuItem from "@/components/Menu/MenuItem";
import "./menu.css";
import { useState } from "react";
import styled from "@emotion/styled";

const meta = {
  title: "Components/Navigation Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    horizontal: { control: "boolean" },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleSelect = (index: number) => {
      setSelectedIndex(index);
      console.log(`Selected index: ${index}`);
    };

    return (
      <Menu {...args}>
        <Menu.Item
          selected={selectedIndex === 0}
          onClick={() => handleSelect(0)}
        >
          Item 1
        </Menu.Item>
        <Menu.Item
          selected={selectedIndex === 1}
          onClick={() => handleSelect(1)}
        >
          Item 2
        </Menu.Item>
        <Menu.Item
          selected={selectedIndex === 2}
          onClick={() => handleSelect(2)}
        >
          Item 3
        </Menu.Item>
        <Menu.Item disabled>Item 4 (Disabled)</Menu.Item>
      </Menu>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    className: "",
  },
};

const CustomMenu = styled(Menu)`
  width: 400px;
  background-color: rgba(255, 87, 143, 0.1);
`;

const CustomMenuItem = styled(Menu.Item)`
  &:hover:not(:disabled) {
    background-color: rgba(255, 87, 143, 0.3);
    color: white;
  }

  &.menu-item-selected {
    background-color: rgba(255, 87, 143, 0.6);
  }
`;

export const CustomStyleWithStyledComponent: Story = {
  render: (args) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleSelect = (index: number) => {
      setSelectedIndex(index);
      console.log(`Selected index: ${index}`);
    };

    return (
      <CustomMenu {...args}>
        <CustomMenuItem
          selected={selectedIndex === 0}
          onClick={() => handleSelect(0)}
        >
          Item 1
        </CustomMenuItem>
        <CustomMenuItem
          selected={selectedIndex === 1}
          onClick={() => handleSelect(1)}
        >
          Item 2
        </CustomMenuItem>
        <CustomMenuItem
          selected={selectedIndex === 2}
          onClick={() => handleSelect(2)}
        >
          Item 3
        </CustomMenuItem>
        <CustomMenuItem disabled>Item 4 (Disabled)</CustomMenuItem>
      </CustomMenu>
    );
  },
};

export const CustomStyle: Story = {
  args: {
    className: "custom-menu",
  },
  render: (args) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleSelect = (index: number) => {
      setSelectedIndex(index);
      console.log(`Selected index: ${index}`);
    };

    return (
      <Menu {...args}>
        <Menu.Item
          selected={selectedIndex === 0}
          onClick={() => handleSelect(0)}
        >
          Item 1
        </Menu.Item>
        <Menu.Item
          selected={selectedIndex === 1}
          onClick={() => handleSelect(1)}
        >
          Item 2
        </Menu.Item>
        <Menu.Item
          selected={selectedIndex === 2}
          onClick={() => handleSelect(2)}
        >
          Item 3
        </Menu.Item>
      </Menu>
    );
  },
};

export const HorizontalMenu: Story = {
  ...Template,
  args: {
    horizontal: true,
  },
};

// export const Default: Story = {
//   args: {
//     className: "",
//     selectedIndex: null,
//     onSelect: () => {},
//   },
//   render: (args) => {
//     const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//     const handleSelect = (index: number) => {
//       setSelectedIndex(index);
//       console.log(`Selected index: ${index}`);
//     };

//     return (
//       <Menu {...args} selectedIndex={selectedIndex} onSelect={handleSelect}>
//         <Menu.Item>Home</Menu.Item>
//         <Menu.Item>About</Menu.Item>
//         <Menu.Item>Contact</Menu.Item>
//         <Menu.Item disabled>Settings (Disabled)</Menu.Item>
//       </Menu>
//     );
//   },
// };

// export const CustomStyle: Story = {
//   args: {
//     ...Default.args,
//     className: "custom-menu",
//   },
//   render: (args) => (
//     <Menu {...args}>
//       <Menu.Item className="custom-menu-item">Home</Menu.Item>
//       <Menu.Item className="custom-menu-item">About</Menu.Item>
//       <Menu.Item className="custom-menu-item">Contact</Menu.Item>
//       <Menu.Item className="custom-menu-item" disabled>
//         Settings
//       </Menu.Item>
//     </Menu>
//   ),
// };

// export const HorizontalMenu: Story = {
//   args: {
//     ...Default.args,
//     className: "horizontal-menu",
//   },
//   render: (args) => (
//     <Menu {...args}>
//       <Menu.Item>Home</Menu.Item>
//       <Menu.Item>About</Menu.Item>
//       <Menu.Item>Contact</Menu.Item>
//     </Menu>
//   ),
// };

// MenuItem
const menuItemMeta = {
  title: "Components/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof MenuItem>;

export const MenuItemStory: StoryObj<typeof menuItemMeta> = {
  render: () => (
    <Menu.Item onClick={() => console.log("Clicked")}>Menu Item</Menu.Item>
  ),
};

export const DisabledMenuItem: StoryObj<typeof menuItemMeta> = {
  render: () => (
    <Menu.Item onClick={() => console.log("Clicked")} disabled>
      Disabled Item
    </Menu.Item>
  ),
};
