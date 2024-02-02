import PDFDocument from "pdfkit";

export function buildPDF(datacallback,endcallback) {
  const doc = new PDFDocument();

  doc.on("data", datacallback);
  doc.on("end", endcallback);

doc.fontSize(25).text('lorem messi el mejor ',100,100);
  doc.moveTo(0, 20)                               // set the current point
   .lineTo(100, 160)                            // draw a line
   .quadraticCurveTo(130, 200, 150, 120)        // draw a quadratic curve
   .bezierCurveTo(190, -40, 200, 200, 300, 150) // draw a bezier curve
   .lineTo(400, 90)                             // draw another line
   .stroke();         

  doc.end();
}
