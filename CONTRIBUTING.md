# Contributing to th-awesome-uniapp-design-md

Thank you for your interest in contributing!

## Ways to Contribute

1. **Add new DESIGN.md** - Create a design system document for a new app
2. **Improve existing files** - Fix wrong colors, missing tokens, weak descriptions
3. **Report issues** - Let us know if something looks off
4. **Share templates** - Help build the component mapping documentation

## How to Add a New DESIGN.md

### Step 1: Create the Directory

Create a new directory under the appropriate category:

```
design-md/
├── _template/           # Template files
├── social/              # Social & communication apps
│   └── your-app-name/
├── ecommerce/           # E-commerce apps
│   └── your-app-name/
├── tool/                # Tool & utility apps
│   └── your-app-name/
└── government/          # Government & public services
    └── your-app-name/
```

### Step 2: Create DESIGN.md

Use the template in `design-md/_template/DESIGN.md` as a starting point.

### Step 3: Create preview.html (Optional)

Create a visual preview file showing color swatches, typography, and component examples.

### Step 4: Submit a PR

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Quality Standards

- All colors must be valid HEX codes
- Typography must include both font-family and font-size in rpx
- Components must map to ThorUI component names
- Include mobile-specific considerations (safe areas, touch targets)
- Ensure all measurement values use rpx units

## Before Opening a PR

Please [open an issue](https://github.com/yourusername/th-awesome-uniapp-design-md/issues) first to discuss your idea and get feedback from maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
