# Comic Page Template Creator
https://paleoarchitect.github.io/comic-page-template/

A desktop application for creating comic book page templates with customizable panels. Features a modern Material-UI interface with an AppBar, radio buttons for panel layout selection, and checkbox controls for export options.

## Features

- **Page Setup**
  - Standard comic book size (11" x 17")
  - Predefined margins
  - Clean, modern interface

- **Panel Management**
  - Panel layout presets (1, 4, 5, 6 panels)
  - Standardized panel heights across layouts
  - Automatic gutter spacing (0.25")
  - Panels positioned within the content area

- **Export**
  - Export to PDF format
  - Non-Photo Blue option for panel borders (light blue #a4dded)
  - Black borders when Non-Photo Blue is disabled

## Technology Stack

- **Frontend**: React with TypeScript
- **UI Components**: Material-UI (MUI)
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

1. **Choose Panel Layout**: Select from preset layouts (1, 4, 5, or 6 panels) using the radio buttons
2. **Configure Export Options**: 
   - Toggle "Non-Photo Blue" option for panel borders
   - When enabled, panels will have light blue borders (#a4dded)
   - When disabled, panels will have black borders (#000000)
3. **Export**: Click "Download PDF" to generate and download your template

## Future Enhancements

- Additional page size presets (Manga, European Album, Digest)
- Custom page dimensions
- Panel resizing functionality
- Panel rotation
- Multiple page support
- Template saving and loading
- Grid snapping
- Additional export formats (PNG, JPEG, SVG)
- Enhanced panel styling options
