# th-awesome-uniapp-design-md

Collection of DESIGN.md files for uni-app projects using ThorUI component library. Inspired by [awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

Drop one into your uni-app project, tell your AI agent "build me a page that looks like this", and get pixel-perfect UI using ThorUI components.

## What is DESIGN.md?

[DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) is a plain-text design system document that AI agents read to generate consistent UI. It's just a markdown file — no Figma exports, no JSON schemas, no special tooling.

| File | Who Reads It | What It Defines |
|------|--------------|-----------------|
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should look and feel |

## What's Inside Each DESIGN.md

Every file follows the Stitch DESIGN.md format with extended sections tailored for uni-app and ThorUI:

| # | Section | What It Captures |
|---|---------|------------------|
| 1 | Visual Theme & Atmosphere | Mood, density, design philosophy, platform adaptation |
| 2 | Color Palette & Roles | Semantic name + hex + functional role |
| 3 | Typography Rules | Font families, full hierarchy table |
| 4 | Component Stylings | Buttons, cards, inputs, navigation with ThorUI components |
| 5 | Layout Principles | Spacing scale, safe areas, grid |
| 6 | Depth & Elevation | Shadow system, surface hierarchy |
| 7 | Touch States & Interactions | Mobile-specific touch/active states |
| 8 | Platform Adaptation | iOS/Android safe area, notch handling |
| 9 | ThorUI Component Mapping | Design tokens → ThorUI components |
| 10 | Agent Prompt Guide | Quick reference + ready-to-use prompts |

Each package includes:

| File | Purpose |
|------|---------|
| `DESIGN.md` | The design system (what agents read) |
| `preview.html` | Visual catalog showing colors, type scale, components |
| `tokens.json` | W3C DTCG Design Token format (optional) |

## Collection

### Social & Communication
- *Coming soon* - Chat apps, community platforms

### E-commerce
- *Coming soon* - Shopping malls, O2O services

### Tool & Utility
- *Coming soon* - Productivity tools, government services

### Government & Public
- *Coming soon* - Public service platforms

## Quick Start

1. Copy a `DESIGN.md` into your uni-app project root
2. Tell your AI agent to use it when building pages
3. The agent will reference ThorUI components for implementation

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## Resources

- [ThorUI Official Documentation](https://thorui.cn/doc/)
- [Google Stitch DESIGN.md Guide](https://stitch.withgoogle.com/docs/design-md/format/)
- [Style Dictionary - Design Token Transform](https://amzn.github.io/style-dictionary/)

## License

MIT License - see [LICENSE](./LICENSE)
