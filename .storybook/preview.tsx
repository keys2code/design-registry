import type { Preview } from "@storybook/react";
import React from "react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#0a0a0a" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[200px] p-6 bg-background text-foreground font-sans antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview;
