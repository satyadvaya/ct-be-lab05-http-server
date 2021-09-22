import http from 'http';
import app from './lib/app.js';

const PORT = process.env.PORT || 7890;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('server is running on PORT', PORT);
});
