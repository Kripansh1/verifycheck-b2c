// Simple Express server to handle contact form email via Nodemailer
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['POST', 'OPTIONS'],
  })
);

// Validate minimal fields
function validate(payload) {
  const errors = [];
  if (!payload.name || payload.name.trim().length < 2) errors.push('name');
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) errors.push('email');
  if (!payload.phone || payload.phone.trim().length < 6) errors.push('phone');
  return errors;
}

// Create transporter using Gmail SMTP
function createTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = port === 465; // true for port 465, false for 587
  const user = process.env.SMTP_USER; // your Gmail address
  const pass = process.env.SMTP_PASS; // your App Password

  if (!user || !pass) {
    throw new Error('SMTP_USER/SMTP_PASS are not set');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone } = req.body || {};
    const errors = validate({ name, email, phone });
    if (errors.length) {
      return res.status(400).json({ ok: false, error: 'Invalid fields', fields: errors });
    }

    const transporter = createTransporter();

    const to = process.env.TO_EMAIL || process.env.SMTP_USER;
    const from = process.env.FROM_EMAIL || process.env.SMTP_USER;

    const subject = `New Enquiry from ${name}`;
    const text = `New enquiry received:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto;">
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr />
        <p>Sent from Verify Check website.</p>
      </div>
    `;

    await transporter.verify();
    await transporter.sendMail({ to, from, subject, text, html });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

app.get('/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Mail server running on http://localhost:${PORT}`);
});
