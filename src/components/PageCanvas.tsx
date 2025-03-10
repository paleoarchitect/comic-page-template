import { useEffect } from 'react';
import usePageStore from '../store/usePageStore';
import Panel from './Panel';
import { Paper, Typography, Box } from '@mui/material';

interface PageCanvasProps {
  scale?: number; // Scale factor for display (pixels per inch)
}

const PageCanvas: React.FC<PageCanvasProps> = ({ scale = 96 }) => {
  const { 
    pageSize, 
    margins, 
    panels,
    setPanelPreset6 // Import the preset function
  } = usePageStore();

  // Force the 6-panel layout on component mount
  useEffect(() => {
    // Ensure panels are created on initial render
    if (panels.length === 0) {
      setPanelPreset6();
    }
  }, [panels.length, setPanelPreset6]);

  // Get dimensions from the page size
  const dimensions = { width: pageSize.width, height: pageSize.height };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        width: '100%', 
        p: 2, 
        bgcolor: 'white', 
        borderRadius: 2 
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: '#374151' }}>
        Preview
      </Typography>
      
      {/* Page Preview */}
      <Box 
        sx={{ 
          position: 'relative',
          bgcolor: '#fff',
          border: '2px solid #D1D5DB',
          mx: 'auto',
          overflow: 'visible',
          width: `${dimensions.width * scale}px`,
          height: `${dimensions.height * scale}px`,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Inner area (accounting for margins) */}
        <Box
          sx={{
            position: 'relative', // Changed from absolute to relative to contain panels
            top: `${margins.top * scale}px`,
            left: `${margins.left * scale}px`,
            width: `${(dimensions.width - margins.left - margins.right) * scale}px`,
            height: `${(dimensions.height - margins.top - margins.bottom) * scale}px`,
          }}
        >
          {/* Render panels */}
          {panels.map(panel => (
            <Panel key={panel.id} panel={panel} scale={scale} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default PageCanvas;
