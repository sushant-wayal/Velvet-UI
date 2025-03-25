# Velvet UI CLI

A command-line interface tool for easily adding Velvet UI components to your Typescript Next project.

## Installation

```bash
npm install -g velvet-ui
# or
yarn global add velvet-ui
```

## Usage

The CLI provides a simple command to add Velvet UI components to your project:

```bash
velvet-ui add <component-name>
or
npx velvet-ui add <component-name>
```

### Example

```bash
velvet-ui add Button
```

This will:
1. Download the component code from the Velvet UI repository
2. Create a `velvet` directory in your project's components folder (either in `src/components` or `components`)
3. Add the component file to the `velvet` directory

## Features

- 🚀 Quick component installation
- 📦 Automatic directory structure creation
- 🎨 Direct integration with Velvet UI components

## Requirements

- Node.js 14.x or higher
- npm or yarn package manager
- A Typescript Next project

## Directory Structure

The CLI will automatically create the following structure in your project:

```
your-project/
├── src/
│   └── components/
│       └── velvet/
│           └── <component-name>.tsx
```

If your project doesn't have a `src` directory, it will create:

```
your-project/
├── components/
│   └── velvet/
│       └── <component-name>.tsx
```

## Error Handling

The CLI provides clear error messages if:
- No component name is provided
- The component doesn't exist in the library
- There are network issues
- File system operations fail
