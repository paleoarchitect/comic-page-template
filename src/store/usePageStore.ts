import { create } from 'zustand';

// Define types
export interface Panel {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PageSize {
  width: number;
  height: number;
  name: string;
}

export interface Margins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface PageState {
  // Page setup
  pageSize: PageSize;
  margins: Margins;
  
  // Panel management
  panels: Panel[];
  nextPanelId: number;
  
  // Actions
  setPageSize: (size: PageSize) => void;
  setMargins: (margins: Margins) => void;
  addPanel: () => void;
  deletePanel: (id: number) => void;
  updatePanel: (id: number, updates: Partial<Panel>) => void;
  
  // Panel presets
  setPanelPreset1: () => void;
  setPanelPreset4: () => void;
  setPanelPreset5: () => void;
  setPanelPreset6: () => void;
}

// Define comic book size
export const COMIC_SIZE = { width: 11, height: 17, name: 'Comic Page (11" x 17")' };

// Create the store
const usePageStore = create<PageState>((set) => ({
  // Initial state
  pageSize: COMIC_SIZE,
  margins: { top: 1.325, right: 1, bottom: 1.325, left: 1 },
  panels: [],
  nextPanelId: 1,
  
  // Actions
  setPageSize: (size) => set({ pageSize: size }),
  
  setMargins: (margins) => set({ margins }),
  
  addPanel: () => set((state) => {
    // Calculate position based on the number of existing panels
    // to avoid stacking all panels at the same position
    const offset = state.panels.length * 0.5;
    
    const newPanel = {
      id: state.nextPanelId,
      x: 1 + offset,
      y: 1 + offset,
      width: 3,
      height: 3
    };
    
    return {
      panels: [...state.panels, newPanel],
      nextPanelId: state.nextPanelId + 1
    };
  }),
  
  deletePanel: (id) => set((state) => ({
    panels: state.panels.filter(panel => panel.id !== id)
  })),
  
  updatePanel: (id, updates) => set((state) => ({
    panels: state.panels.map(panel => 
      panel.id === id ? { ...panel, ...updates } : panel
    )
  })),
  
  // Panel presets
  setPanelPreset1: () => set((state) => {
    // Calculate available width and height based on page size and margins
    const getAvailableDimensions = () => {
      const dimensions = { width: state.pageSize.width, height: state.pageSize.height };
      
      return {
        width: dimensions.width - state.margins.left - state.margins.right,
        height: dimensions.height - state.margins.top - state.margins.bottom
      };
    };
    
    const available = getAvailableDimensions();
    
    // Create a single panel that fills the entire content area
    const panel = {
      id: 1,
      x: 0,
      y: 0,
      width: available.width,
      height: available.height
    };
    
    return {
      panels: [panel],
      nextPanelId: 2
    };
  }),
  
  setPanelPreset4: () => set((state) => {
    // Calculate available width and height based on page size and margins
    const getAvailableDimensions = () => {
      const dimensions = { width: state.pageSize.width, height: state.pageSize.height };
      
      return {
        width: dimensions.width - state.margins.left - state.margins.right,
        height: dimensions.height - state.margins.top - state.margins.bottom
      };
    };
    
    const available = getAvailableDimensions();
    const gutter = 0.25; // 0.25 inch gutter between panels
    
    // Calculate panel dimensions accounting for gutters
    // For a 2x2 grid with gutters, we need to subtract 1 gutter from total width and height
    // and then divide by 2 to get the panel width and height
    const panelWidth = (available.width - gutter) / 2;
    const panelHeight = (available.height - gutter) / 2;
    
    // Create 4 panels in a 2x2 grid with gutters
    const panels = [
      { id: 1, x: 0, y: 0, width: panelWidth, height: panelHeight },
      { id: 2, x: panelWidth + gutter, y: 0, width: panelWidth, height: panelHeight },
      { id: 3, x: 0, y: panelHeight + gutter, width: panelWidth, height: panelHeight },
      { id: 4, x: panelWidth + gutter, y: panelHeight + gutter, width: panelWidth, height: panelHeight }
    ];
    
    return {
      panels,
      nextPanelId: 5
    };
  }),
  
  setPanelPreset5: () => set((state) => {
    // Calculate available width and height based on page size and margins
    const getAvailableDimensions = () => {
      const dimensions = { width: state.pageSize.width, height: state.pageSize.height };
      
      return {
        width: dimensions.width - state.margins.left - state.margins.right,
        height: dimensions.height - state.margins.top - state.margins.bottom
      };
    };
    
    const available = getAvailableDimensions();
    const gutter = 0.25; // 0.25 inch gutter between panels
    
    // Calculate panel dimensions
    const panelWidth = (available.width - gutter) / 2; // Width for the panels
    const panelHeight = (available.height - (2 * gutter)) / 3; // Same height as in 6 Panel layout
    
    // Create 5 panels: 2 on top, 1 wider in middle, 2 on bottom
    const panels = [
      // Top row - 2 panels
      { id: 1, x: 0, y: 0, width: panelWidth, height: panelHeight },
      { id: 2, x: panelWidth + gutter, y: 0, width: panelWidth, height: panelHeight },
      
      // Middle row - 1 wider panel
      { id: 3, x: 0, y: panelHeight + gutter, width: available.width, height: panelHeight },
      
      // Bottom row - 2 panels
      { id: 4, x: 0, y: (panelHeight * 2) + (2 * gutter), width: panelWidth, height: panelHeight },
      { id: 5, x: panelWidth + gutter, y: (panelHeight * 2) + (2 * gutter), width: panelWidth, height: panelHeight }
    ];
    
    return {
      panels,
      nextPanelId: 6
    };
  }),
  
  setPanelPreset6: () => set((state) => {
    // Calculate available width and height based on page size and margins
    const getAvailableDimensions = () => {
      const dimensions = { width: state.pageSize.width, height: state.pageSize.height };
      
      return {
        width: dimensions.width - state.margins.left - state.margins.right,
        height: dimensions.height - state.margins.top - state.margins.bottom
      };
    };
    
    const available = getAvailableDimensions();
    const gutter = 0.25; // 0.25 inch gutter between panels
    
    // Calculate panel dimensions accounting for gutters
    // For a 2x3 grid with gutters, we need to subtract 1 gutter from total width
    // and 2 gutters from total height, then divide by 2 and 3 respectively
    const panelWidth = (available.width - gutter) / 2;
    const panelHeight = (available.height - (2 * gutter)) / 3;
    
    // Create 6 panels in a 2x3 grid with gutters
    const panels = [
      { id: 1, x: 0, y: 0, width: panelWidth, height: panelHeight },
      { id: 2, x: panelWidth + gutter, y: 0, width: panelWidth, height: panelHeight },
      { id: 3, x: 0, y: panelHeight + gutter, width: panelWidth, height: panelHeight },
      { id: 4, x: panelWidth + gutter, y: panelHeight + gutter, width: panelWidth, height: panelHeight },
      { id: 5, x: 0, y: (panelHeight * 2) + (2 * gutter), width: panelWidth, height: panelHeight },
      { id: 6, x: panelWidth + gutter, y: (panelHeight * 2) + (2 * gutter), width: panelWidth, height: panelHeight }
    ];
    
    return {
      panels,
      nextPanelId: 7
    };
  })
}));

export default usePageStore;
