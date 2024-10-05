const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        const data = req.body;

        // Spawn a new Python process
        const pythonProcess = spawn('python', ['./files/prediction.py', JSON.stringify(data)]);
        let output = '';

        pythonProcess.stdout.on('data', (data) => {
            output += data;
            console.log(`stdout: ${output}`);
            pythonProcess.kill();
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        pythonProcess.on('close', () => {
            const [OutputValues] = output.split('\n').map(item => item.trim());
            res.json({ outputValues: OutputValues });
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;