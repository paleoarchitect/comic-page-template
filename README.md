# Comic Page Template Creator

A desktop application for creating comic book page templates with customizable panels.

## Features

- **Page Setup**
  - Standard comic book size presets (Standard Comic, Manga, European Album, Digest)
  - Custom page dimensions
  - Adjustable margins

- **Panel Management**
  - Add/delete panels
  - Drag panels to position them
  - Panel information display

- **Export**
  - Export to PDF format

## Technology Stack

- **Frontend**: React with TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **PDF Generation**: pdf-lib

## Development

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or pnpm

### Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Building

To build the application for production:

```
npm run build
```

## Usage

1. **Select Page Size**: Choose from standard presets or create a custom size
2. **Set Margins**: Adjust the top, right, bottom, and left margins
3. **Add Panels**: Click "Add Panel" to create new panels
4. **Position Panels**: Drag panels to position them on the page
5. **Export**: Click "Export to PDF" to download your template

## Future Enhancements

- Panel resizing functionality
- Panel rotation
- Multiple page support
- Template saving and loading
- Grid snapping
- Gutter settings
