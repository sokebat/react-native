const semanticTokens = Object.fromEntries(
  [
    "primary",
    "secondary",
    "muted",
    "accent",
    "success",
    "warning",
    "info",
    "destructive",
    "popover",
    "card",
  ].map((token) => [
    token,
    {
      DEFAULT: `hsl(var(--${token}))`,
      foreground: `hsl(var(--${token}-foreground))`,
    },
  ])
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ...semanticTokens,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
