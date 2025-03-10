import { useState, useEffect } from 'react';
import usePageStore from '../store/usePageStore';
import { downloadPDF } from '../services/pdfService';

// MUI components
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DownloadIcon from '@mui/icons-material/Download';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Define panel layout options
const PANEL_LAYOUTS = [
  { id: '1', name: '1 Panel' },
  { id: '4', name: '4 Panels' },
  { id: '5', name: '5 Panels' },
  { id: '6', name: '6 Panels' }
];

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#5B21B6', // Purple color for primary elements
    },
    background: {
      default: '#F5F3FF', // Light purple background
      paper: '#F5F3FF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24, // Rounded button
          textTransform: 'none', // No uppercase text
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
          marginRight: 8,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          width: '100%',
          borderRadius: 24,
          marginBottom: 8,
          '&.Mui-checked': {
            backgroundColor: '#E9D5FF', // Light purple background when selected
          },
        },
        label: {
          fontSize: '0.875rem',
        },
      },
    },
  },
});

const Sidebar: React.FC = () => {
  const [selectedLayout, setSelectedLayout] = useState<string>('4');
  const [nonPhotoBlue, setNonPhotoBlue] = useState<boolean>(false);
  
  const {
    pageSize,
    margins,
    panels,
    setPanelPreset1,
    setPanelPreset4,
    setPanelPreset5,
    setPanelPreset6
  } = usePageStore();
  
  // Apply the selected layout when it changes
  useEffect(() => {
    if (selectedLayout === '1') {
      setPanelPreset1();
    } else if (selectedLayout === '4') {
      setPanelPreset4();
    } else if (selectedLayout === '5') {
      setPanelPreset5();
    } else if (selectedLayout === '6') {
      setPanelPreset6();
    }
  }, [selectedLayout, setPanelPreset1, setPanelPreset4, setPanelPreset5, setPanelPreset6]);

  const handleLayoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLayout(event.target.value);
  };

  const handleNonPhotoBlueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNonPhotoBlue(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper 
        elevation={0}
        sx={{ 
          p: 3, 
          maxWidth: 280, 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderRadius: 2
        }}
      >
        {/* Page Settings Section */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          Page Settings
        </Typography>
        
        <List disablePadding sx={{ mb: 4 }}>
          <ListItem disablePadding divider>
            <ListItemButton sx={{ py: 1, px: 0 }}>
              <ListItemText primary={`${pageSize.width}" x ${pageSize.height}"`} />
              <ChevronRightIcon color="action" />
            </ListItemButton>
          </ListItem>
        </List>

        {/* Panel Layout Section */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          Panel Layout
        </Typography>
        
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <RadioGroup
            value={selectedLayout}
            onChange={handleLayoutChange}
          >
            {PANEL_LAYOUTS.map((layout) => (
              <FormControlLabel
                key={layout.id}
                value={layout.id}
                control={
                  <Radio 
                    sx={{ 
                      color: '#9CA3AF',
                      '&.Mui-checked': {
                        color: '#581C87',
                      }
                    }} 
                  />
                }
                label={layout.name}
                sx={{
                  py: 1,
                  px: 2,
                  mb: 1,
                  borderRadius: 2,
                  bgcolor: selectedLayout === layout.id ? '#E9D5FF' : 'white',
                  '&:hover': {
                    bgcolor: selectedLayout === layout.id ? '#E9D5FF' : '#F5F3FF',
                  },
                  color: selectedLayout === layout.id ? '#581C87' : 'text.primary',
                }}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {/* Export Options Section */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
          Export Options
        </Typography>
        
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox 
                checked={nonPhotoBlue}
                onChange={handleNonPhotoBlueChange}
                sx={{ 
                  color: '#9CA3AF',
                  '&.Mui-checked': {
                    color: '#581C87',
                  }
                }}
              />
            }
            label="Non-Photo Blue"
            sx={{
              py: 1,
              px: 2,
              mb: 1,
              borderRadius: 2,
              bgcolor: 'white',
              '&:hover': {
                bgcolor: '#F5F3FF',
              },
            }}
          />
          
          {/* Download Button - Moved to Export Options section */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            fullWidth
            onClick={() => downloadPDF(pageSize, margins, panels, nonPhotoBlue)}
            sx={{ 
              py: 1.5,
              mt: 1,
              bgcolor: '#581C87', // Dark purple
              '&:hover': {
                bgcolor: '#4C1D95', // Slightly darker purple on hover
              }
            }}
          >
            Download PDF
          </Button>
        </FormControl>
      </Paper>
    </ThemeProvider>
  );
};

export default Sidebar;
