import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import tenderRoutes from './routes/tender.js';
import websiteRoutes from './routes/website.js';
import leadRoutes from './routes/lead.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS Configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL || '*'
    : ['http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:5173'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware (development only)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
}

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/tenders', tenderRoutes);
app.use('/api/websites', websiteRoutes);
app.use('/api/leads', leadRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    port: PORT,
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Serve static files from frontend in production
if (process.env.NODE_ENV === 'production') {
  const frontendPath = path.join(__dirname, '..', 'frontend', 'dist');
  app.use(express.static(frontendPath));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error',
    error: process.env.NODE_ENV !== 'production' ? err.message : undefined
  });
});

// For Vercel serverless function
if (process.env.VERCEL) {
  // Connect to DB once
  connectDB();
  // Export the Express app as a serverless function
} else {
  // Traditional server for local development
  app.listen(PORT, () => {
    connectDB();
    console.log(`
╔══════════════════════════════════════════════════════════╗
║  HPCL Lead Intelligence Agent Server                     ║
╠══════════════════════════════════════════════════════════╣
║  Status: Running                                         ║
║  Port: ${PORT}                                             ║
║  Environment: ${process.env.NODE_ENV || 'development'}                              ║
║  API Base: http://localhost:${PORT}/api                    ║
║  Health Check: http://localhost:${PORT}/api/health         ║
╚══════════════════════════════════════════════════════════╝
    `);
  });
}
