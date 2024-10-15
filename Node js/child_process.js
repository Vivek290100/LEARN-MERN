const { spawn } = require('child_process');

const exc =`
const res = 2 +2;
console.log(res);
`
const child = spawn('node', ['-e',exc]);

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});





// const { exec } = require('child_process');

// // Use 'python' or 'python3' depending on your Python installation
// exec('node generator', (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//     }
//     if (stderr) {
//         console.error(`stderr: ${stderr}`);
//     }
//     console.log(`stdout: ${stdout}`);
// });







// const {fork} = require ('child_process')

// const child = fork("generator")

// child.on("message",(message)=>{
//     console.log(message);
    
// })
