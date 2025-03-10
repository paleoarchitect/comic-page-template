import { PDFDocument, rgb } from 'pdf-lib';
import { Panel, PageSize, Margins } from '../store/usePageStore';

// Convert inches to points (1 inch = 72 points in PDF)
const inchesToPoints = (inches: number) => inches * 72;

// Function to create a PDF with the comic page layout
export const generatePDF = async (
  pageSize: PageSize,
  margins: Margins,
  panels: Panel[],
  nonPhotoBlue: boolean = true
): Promise<Uint8Array> => {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  
  // Get dimensions from the page size
  const dimensions = { width: pageSize.width, height: pageSize.height };
  
  // Add a page with the specified dimensions
  const page = pdfDoc.addPage([
    inchesToPoints(dimensions.width),
    inchesToPoints(dimensions.height)
  ]);
  
  
  
  // Draw each panel
  panels.forEach(panel => {
    // Convert panel coordinates to PDF coordinates (PDF origin is bottom-left)
    const x = margins.left + panel.x;
    const y = dimensions.height - margins.top - panel.y - panel.height;
    
    // Draw panel rectangle
    page.drawRectangle({
      x: inchesToPoints(x),
      y: inchesToPoints(y),
      width: inchesToPoints(panel.width),
      height: inchesToPoints(panel.height),
      borderColor: nonPhotoBlue 
        ? rgb(0.643, 0.867, 0.929) // #a4dded (non-photo blue)
        : rgb(0, 0, 0), // #000000 (black)
      borderWidth: 2,
    });
    
    // Panel label text removed as requested
  });
  
  // Page size information removed as requested
  
  // Serialize the PDF to bytes
  return await pdfDoc.save();
};

// Function to download the PDF
export const downloadPDF = async (
  pageSize: PageSize,
  margins: Margins,
  panels: Panel[],
  nonPhotoBlue: boolean = true
): Promise<void> => {
  try {
    // Generate the PDF
    const pdfBytes = await generatePDF(pageSize, margins, panels, nonPhotoBlue);
    
    // Create a blob from the PDF bytes
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create a link element
    const link = document.createElement('a');
    link.href = url;
    link.download = 'comic-page-template.pdf';
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Click the link to trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
};
