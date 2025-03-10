import { useRef } from 'react';
import { Panel as PanelType } from '../store/usePageStore';
import { Box } from '@mui/material';

interface PanelProps {
  panel: PanelType;
  scale: number; // Scale factor for display (e.g., 50 pixels per inch)
}

const Panel: React.FC<PanelProps> = ({ panel, scale }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  
  return (
    <Box 
      ref={panelRef}
      sx={{
        position: 'absolute',
        left: `${panel.x * scale}px`,
        top: `${panel.y * scale}px`,
        width: `${panel.width * scale}px`,
        height: `${panel.height * scale}px`,
        zIndex: panel.id,
        transform: 'translate(0, 0)',
        backgroundColor: 'white',
        border: '3px solid black', // Thicker border
      }}
    >
      {/* Panel number labels and resize handles removed */}
    </Box>
  );
};

export default Panel;
