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
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  sslValidate: true,
  tlsAllowInvalidCertificates: false,
  tlsAllowInvalidHostnames: false,
  retryWrites: true,
  w: 'majority'
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/predict', predictRoute);
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/chatbot', chatbotRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
