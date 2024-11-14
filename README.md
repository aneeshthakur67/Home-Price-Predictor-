
# Home Price Predictor

Welcome to the Home Price Predictor! This web application provides users with a convenient and interactive interface to estimate home prices based on various input parameters. The app leverages a machine learning model in Python for predictions and uses a modern front-end interface created with HTML, CSS, JavaScript, and React.

## Features

- **Interactive User Interface**: The app features a responsive and user-friendly interface designed with HTML, CSS, and JavaScript.
- **Real-time Prediction**: Input data is processed and predictions are displayed in real-time, giving users immediate feedback.
- **Machine Learning Model**: The backend prediction model is built with Python, utilizing a trained model to estimate home prices.
- **Responsive Design**: Built with React, ensuring the app works well on both mobile and desktop devices.

## Technologies Used

- **Frontend**:
  - **HTML**: Structure of the web pages.
  - **CSS**: Styling to make the app visually appealing and user-friendly.
  - **JavaScript**: Provides interactivity and responsiveness.
  - **React**: Used to build the front end of the application with a component-based approach.
- **Backend**:
  - **Python**: Used to create and serve the machine learning model that performs home price predictions.
  - **Machine Learning Model**: Built and trained to predict home prices based on given input parameters.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/): Install Node.js to run the React frontend.
- [Python](https://www.python.org/): Required for the backend machine learning model.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/home-price-predictor.git
   cd home-price-predictor
   ```

2. **Install Frontend Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

### Running the Application

1. **Run the Backend**:
   - Start the Python server to serve the model.
   ```bash
   python app.py
   ```

2. **Run the Frontend**:
   - Start the React development server.
   ```bash
   cd client
   npm run dev
   ```

3. **Access the Application**:
   - Visit `http://localhost:3000` in your browser to start using the app.

## License

This project is licensed under the MIT License.

---
