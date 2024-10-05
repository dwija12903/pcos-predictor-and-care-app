# Women's EndoInsights: PCOS Prediction and Care App 🌸🔍

## Overview 📖
The **PCOS Prediction and Care App** is a comprehensive web application designed to assist women in predicting and understanding Polycystic Ovary Syndrome (PCOS) using advanced machine learning algorithms and an intuitive, user-friendly interface. The goal is to empower users with actionable insights into their health, seamlessly combining AI-driven prediction models with educational resources and a chatbot to provide a holistic care experience.

## Tech Stack 💻🚀
- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, TailwindCSS
- **Analysis**: Python, Scikit-learn, Matplotlib, Seaborn, Pandas, Pyplot, Joblib
- **External Libraries**: Bcrypt, Nodemailer, Axios, CORS, Body Parser, Child Process

## System Architecture 🏗️
The platform is built using a microservices architecture, ensuring flexibility, scalability, and maintainability. Key services include:

1. **Authentication Service**: Handles user registration, login, and session management.
2. **Prediction Engine**: Integrates machine learning models via Python for PCOS risk assessment.
3. **Chatbot Service**: Utilizes natural language processing for interactive query handling.
4. **Data Management**: MongoDB manages data storage and retrieval operations.
5. **Frontend Service**: Responsive UI built with React.js to enhance user experience.

## Features 🌟

### Backend 🖥️

1. **User Authentication**:
   - Secure registration and login system.
   - Password hashing with **bcrypt**.
   - Welcome email notifications using **Nodemailer**.

2. **PCOS Prediction Engine**:
   - Integrated **Python-based machine learning model**.
   - Real-time prediction based on user input data.

3. **Intelligent Chatbot**:
   - **NLP-powered** chatbot for PCOS-related queries.
   - **Fuzzy matching** to improve response accuracy.

4. **API Security**:
   - **Authentication** for protected routes.

5. **Data Management**:
   - **MongoDB** integration for efficient data storage.
   - Password reset functionality.

### Frontend 🎨

1. **Interactive User Interface**:
   - Dynamic navigation based on authentication status.
   - Personalized greetings and tailored content for users.
   - Consistent color scheme and typography.

2. **Educational Resources**:
   - Comprehensive information about PCOS.
   - Personal stories and journey sharing to build community support.

3. **PCOS Prediction Tool**:
   - User-friendly form for inputting health metrics.
   - Real-time calculations for BMI, Waist-Hip Ratio, and other metrics.
   - Display of prediction results.

4. **AI-Powered Chatbot Integration**:
   - Direct access to **PCOS-related information** via the AI chatbot.
   - Engaging user interactions for seamless support.

5. **Authentication Flow**:
   - Smooth login/logout process.
   - Protected routes for authenticated users only.

### Analysis 📊
This platform's machine learning and data analysis capabilities produce several valuable insights and real-world applications.[View all the Analysis here!](https://nbviewer.org/github/dwija12903/pcos-predictor-and-care-app/blob/main/analysis/pcos_prediction.ipynb)

1. **Identification of Key Factors**:
   - The model identifies key features strongly associated with PCOS diagnosis, such as:
     - Hormonal imbalances (e.g., high **AMH levels**).
     - Clinical measures (e.g., irregular cycles, high follicle count).
     - Common symptoms (e.g., weight gain, hair loss, skin darkening).

2. **Risk Assessment**:
   - The trained machine learning model predicts the likelihood of PCOS based on individual characteristics.
   - This helps healthcare professionals identify high-risk individuals, allowing for early interventions and preventive care.

3. **Personalized Treatment**:
   - By understanding the specific factors contributing to PCOS in each case, healthcare providers can offer **personalized treatment plans**.
   - This may include tailored lifestyle changes, medications, or interventions targeting identified risk factors.

4. **Early Diagnosis**:
   - The platform contributes to earlier diagnosis, which is critical for managing PCOS and preventing long-term complications like: **Infertility**, **Type 2 diabetes**, and **Cardiovascular disease**.

5. **Advanced Predictive Modeling**:
   - **Machine learning-based PCOS prediction** models.
   - Analysis of **feature importance** to highlight the most critical indicators driving predictions.

## Installation and Setup

### Backend Installation and Setup

1. **Clone the Repository**  
   First, navigate to your project folder and clone the GitHub repository:
   ```bash
   git clone https://github.com/dwija12903/pcos-predictor-and-care-app.git
   ```
   Navigate to the backend directory:
   ```bash
   cd pcos-predictor-and-care-app
   cd backend
   ```

2. **Install Required Dependencies**  
   ```bash
   pip install -r requirements.txt
   npm install
   ```

3. **Set Environment Variables**  
   Create a `.env` file and add relevant environment variables:
   ```bash
   PORT=4000
   MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   EMAIL_ADDRESS = your-email@gmail.com
   EMAIL_APP_PASSWORD = your-app-password
   ```

4. **Run the Backend Server**  
   ```bash
   node index.js
   ```

### Frontend Installation and Setup

1. **Navigate to Frontend Directory**  
   Navigate to the frontend directory where the React project is located:
   ```bash
   cd ../frontend
   ```

2. **Install Frontend Dependencies**  
   Install all the dependencies listed in `package.json`:
   ```bash
   npm install
   ```

3. **Set Environment Variables**  
   In the React frontend, create a `.env` file to store your environment variables (if not already set):
   ```bash
   REACT_APP_BACKEND_URL='http://localhost:4000'
   ```

4. **Run the Frontend**  
   ```bash
   npm start
   ```
   Your frontend should now be running at `http://localhost:3000`.

### Additional Notes:
- **Database Setup**: Ensure the necessary migrations or setups are run and the connection is configured properly in the backend.

## Future Enhancements

- **IoT Integration**: Developing APIs to integrate with wearable devices for real-time health data collection.
- **Expansion of Chatbot Capabilities**: Implementing more advanced NLP techniques.
- **Recommendation System**: For personalized health advice.
- **Community Features**: For user support and experience sharing.
