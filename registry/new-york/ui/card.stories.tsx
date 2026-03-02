import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { Button } from "./button";
import { Input } from "./input";

const meta = {
  title: "Registry/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content can contain any elements.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Compact: Story = {
  render: () => (
    <Card size="sm" className="w-[350px]">
      <CardHeader>
        <CardTitle>Compact Card</CardTitle>
        <CardDescription>Uses size=&quot;sm&quot; for tighter spacing.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Compact content.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const FormCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
        <CardDescription>Enter your details below.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="card-email" className="text-sm font-medium">
            Email
          </label>
          <Input id="card-email" type="email" placeholder="Email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="card-password" className="text-sm font-medium">
            Password
          </label>
          <Input id="card-password" type="password" placeholder="Password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign up</Button>
      </CardFooter>
    </Card>
  ),
};
