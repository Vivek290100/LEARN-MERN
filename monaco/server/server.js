const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs').promises;
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/monaco-editor', express.static(path.join(__dirname, '../node_modules/monaco-editor')));

app.post('/run-code', async (req, res) => {
  const { code } = req.body;
  const scriptPath = path.join(__dirname, 'temp_script.js');

  try {
    await fs.writeFile(scriptPath, code);

    exec(`node ${scriptPath}`, (error, stdout, stderr) => {
      fs.unlink(scriptPath).catch(console.error);

      if (error) {
        return res.json({ error: error.message, output: stderr });
      }
      res.json({ output: stdout, error: stderr });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});