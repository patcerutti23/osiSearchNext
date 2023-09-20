// import "./App.css";
import { Menu, Button, rem } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

export function Header() {
  return <div>HEADER</div>;
}

export function Header2() {
  return (
    <Menu width={200} shadow="md">
      {/* <img src="/osiSearch.png" alt="logo" className="logo" /> */}
      <Menu.Target>
        <Button className="OsiSearch-button">OsiSearch</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>

        <Menu.Item
          icon={<IconExternalLink size={rem(14)} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default Header2;
