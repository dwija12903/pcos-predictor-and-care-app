// const express = require('express');
// const bodyParser = require('body-parser');
// const { spawn } = require('child_process');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const path = require('path');
// const cors = require('cors');
// const UserModel = require('./models/Users');
// const { sendEmail } = require('./emailUtil');

// const app = express();
// require('dotenv').config();
// const PORT = process.env.PORT;
// const mongodbUrl = process.env.MONGODB_URL;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(cors({
//     origin: "*",                // Allow only this origin
//     credentials: true           // Allow credentials (cookies, authentication headers, etc.)
// }));

// mongoose.connect(mongodbUrl);

// // Routes
// app.post('/predict', (req, res) => {
//     try {
//         const data = req.body;

//         // Spawn a new Python process
//         const pythonProcess = spawn('python', ['prediction.py', JSON.stringify(data)]);
//         let output = '';
        
//         pythonProcess.stdout.on('data', (data) => {                     // Handle output from Python process
//             output += data;
//             console.log(`stdout: ${ output }`);
//             pythonProcess.kill();
//         });

//         pythonProcess.stderr.on('data', (data) => {                     // Handle error output from Python process
//             console.error(`stderr: ${ data }`);
//         });
    
//         pythonProcess.on('close', () => { 
//             const [OutputValues] = output.split('\n').map(item => item.trim());
//             res.json({ outputValues: OutputValues });
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.post('/register', (req, res) => {
//     const { name, email, password } = req.body;

//     bcrypt.hash(password, 10, (err, hashedPassword) => {
//         if (err) {
//             return res.status(500).json({ success: false, message: "Error hashing password" });
//         }
//         const newUser = new UserModel({
//             name,
//             email,
//             password: hashedPassword    // Save hashed password
//         });
//         newUser.save()
//             .then(() => res.json({ success: true, message: "User registered successfully" }))
//             .catch(err => res.status(500).json({ success: false, message: "Error saving user" }));
//     });
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     UserModel.findOne({ email: email })
//         .then(user => {
//             if (!user) {
//                 return res.json({ success: false, message: "No Record Found" });
//             }

//             bcrypt.compare(password, user.password, (err, isMatch) => {
//                 if (err) {
//                     return res.status(500).json({ success: false, message: "Server error" });
//                 }
//                 if (isMatch) {
//                     sendEmail(
//                         email,
//                         "Welcome to Women's EndoInsights",
//                         `<h3>Welcome, ${user.name}!</h3>
//                         <p>We're thrilled to have you on board with the Women's EndoInsights: PCOS Predictor and Care App.</p>
//                         <p>Thank you for logging in. You can now explore all the features and resources we offer to help you manage PCOS effectively.</p>
//                         <p>Best regards,<br><a href="https://www.linkedin.com/in/dwijapanchal" target="_blank">Dwija Panchal</a></p>`
//                     )
//                         .then(() => {
//                             res.json({ success: true, message: "Successfully logged in", name: user.name });
//                         })
//                         .catch(error => {
//                             console.error('Error sending email:', error);
//                             res.json({ success: true, message: "Successfully logged in, but failed to send email", name: user.name });
//                         });
//                 } else {
//                     return res.json({ success: false, message: "Password is incorrect" });
//                 }
//             });
//         })
//         .catch(err => {
//             return res.status(500).json({ success: false, message: "Server error" });
//         });
// });

// app.post("/chatbot", (req, res) => {
//     const userMessage = req.body.message;
//     const python = spawn("python", ["chatbot.py", userMessage]);
//     let chatbotResponse = "";

//     python.stdout.on("data", (data) => {
//         chatbotResponse += data.toString();
//     });

//     python.on("close", (code) => {
//         res.json({ response: chatbotResponse });
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const predictRoute = require('./routes/predict');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const chatbotRoute = require('./routes/chatbot');

const app = express();
const PORT = process.env.PORT;
const mongodbUrl = process.env.MONGODB_URL;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: "*",
    credentials: true
}));

// Connect to MongoDB
mongoose.connect(mongodbUrl);

// Use routes
app.use('/predict', predictRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/chatbot', chatbotRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});