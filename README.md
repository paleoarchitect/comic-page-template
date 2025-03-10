# Comic Page Template Creator

A desktop application for creating comic book page templates with customizable panels. Features a modern Material-UI interface with an AppBar, radio buttons for panel layout selection, and checkbox controls for export options.

## Features

- **Page Setup**
  - Standard comic book size presets (Standard Comic, Manga, European Album, Digest)
  - Custom page dimensions
  - Adjustable margins

- **Panel Management**
  - Add/delete panels
  - Drag panels to position them
  - Panel information display
  - Panel layout presets (1, 4, 5, 6 panels)
  - Standardized panel heights across layouts

- **Export**
  - Export to PDF format
  - Non-Photo Blue option for panel borders
  - Configurable border colors

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

1. **Select Page Size**: Choose from standard presets or create a custom size
2. **Set Margins**: Adjust the top, right, bottom, and left margins
3. **Choose Panel Layout**: Select from preset layouts (1, 4, 5, or 6 panels)
4. **Position Panels**: Drag panels to position them on the page
5. **Configure Export Options**: 
   - Toggle "Non-Photo Blue" option for panel borders
   - When enabled, panels will have light blue borders (#a4dded)
   - When disabled, panels will have black borders (#000000)
6. **Export**: Click "Download PDF" to generate and download your template

## Future Enhancements

- Panel resizing functionality
- Panel rotation
- Multiple page support
- Template saving and loading
- Grid snapping
- Gutter settings
