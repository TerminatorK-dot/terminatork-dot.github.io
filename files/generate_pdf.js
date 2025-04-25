// This is a simple script to demonstrate how you could create a PDF from HTML
// In a real implementation, you would use libraries like jsPDF or html-pdf
// For this demo, we'll create a placeholder

const fs = require('fs');
const pdf = require('html-pdf');

console.log("Generating PDF from Kartik_Thapa_CV.pdf.html...");
// Generate the PDF
console.log("PDF file available at: files/Kartik_Thapa_CV.pdf");

// Set options for PDF generation
const options = {
    format: 'A4',
    border: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
    }
};

// Read the HTML file
const html = fs.readFileSync('./files/Kartik_Thapa_CV.pdf.html', 'utf8');

// Create PDF from HTML
pdf.create(html, options).toFile('./files/Kartik_Thapa_CV.pdf', (err, res) => {
    if (err) {
        console.error("Error generating PDF:", err);
        return;
    }
    console.log("PDF successfully created:", res.filename);
});

/*
To actually generate a PDF from HTML, you would need to:
1. Install Node.js
2. Install a package: npm install html-pdf
3. Create a script like this:

const fs = require('fs');
const pdf = require('html-pdf');
const html = fs.readFileSync('./files/Divyansh_Atri_CV.pdf.html', 'utf8');
const options = { 
  format: 'A4',
  border: {
    top: '20mm',
    right: '20mm',
    bottom: '20mm',
    left: '20mm'
  }
};

pdf.create(html, options).toFile('./files/Divyansh_Atri_CV.pdf', (err, res) => {
  if (err) return console.log(err);
  console.log('PDF created successfully:', res);
});
*/ 