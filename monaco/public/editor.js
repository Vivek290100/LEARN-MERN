// Load Monaco Editor
const script = document.createElement('script');
script.src = '/monaco-editor/min/vs/loader.js';
script.onload = () => {
  require.config({ paths: { 'vs': '/monaco-editor/min/vs' }});
  require(['vs/editor/editor.main'], function() {
    const editor = monaco.editor.create(document.getElementById('editor-container'), {
      value: '// Write your code here\nconsole.log("Hello, MERN world!");',
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true
    });

    const runButton = document.getElementById('run-button');
    const output = document.getElementById('output');

    runButton.addEventListener('click', () => {
      const code = editor.getValue();
    //   output.textContent = 'Running code...\n';

      fetch('/run-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      })
      .then(response => response.json())
      .then(data => {
        output.textContent += data.output || '';
        if (data.error) {
          output.textContent += '\nError: ' + data.error;
        }
      })
      .catch(error => {
        output.textContent += '\nError: ' + error.message;
      });
    });
  });
};
document.head.appendChild(script);