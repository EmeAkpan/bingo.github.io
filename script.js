
import fs from 'fs';
import { parse } from 'csv-parse';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

console.log('WebSocket server is running on ws://localhost:8080');
    const bingo = await getarray();
console.log(bingo)
wss.on('connection',  (ws) => {
  console.log('Client connected!');

  try {

    ws.on('message', (message) => {
      const request = message.toString();

      console.log(`Received: ${request}`);

      if (request === 'get_array') {
        ws.send(JSON.stringify(bingo));
      }
    });
  } catch (err) {
    console.error('Error:', err.message);
    ws.close();
  }
}); 
  
async function getarray() {
  const arr = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(
      "C:\\Users\\user\\Downloads\\hallowingo\\costumes.csv"
    )
      .pipe(parse({
        columns: true,
        trim: true,
        bom: true, 
        skip_empty_lines: true
      }))
      .on('data', row => arr.push(row))
      .on('end', () => {
        if (arr.length === 0) {
          reject(new Error('No costumes found in CSV'));
          return;
        } 

        let  bingo = []; 
      for (let i = 0; i < 24; i++) {
  const j = Math.floor(Math.random() * (arr.length - i));
  bingo.push(arr[j])
arr[j]=arr[arr.length-1-i]
}
        resolve(bingo);
      })
      .on('error', reject);
  });
} 
   