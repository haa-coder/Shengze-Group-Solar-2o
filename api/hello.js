// Vercel serverless function - simple API endpoint for testing
export default function handler(req, res) {
  // Enable CORS for your React app
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  res.status(200).json({ 
    message: 'Shengze Group API is working!',
    timestamp: new Date().toISOString()
  });
}