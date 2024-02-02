import { Router } from "express";

import { buildPDF } from "../libs/pdfkit.js";

const router = Router();

router.get("/home", (req, res) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": 'attachment; filename=home.pdf',
  });
  buildPDF(
    (data) => stream.write(data),
    () => stream.end()
  );
  res.send("hello world");
});

export default router;
