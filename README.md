# Simple-Portfolio-Tracker

**Am Stock** is a dynamic e-commerce platform that allows users to browse, search, and purchase a wide variety of products. This application allows users to  add/edit stock details (e.g., stock name, ticker, quantity, buy price).It contains a dashboard showing portfolio metrics and a table displaying current stock holdings with options to edit or delete them.
The backend of the project is powered by Django REST Framework, while the frontend is built using React. The application offers a seamless user experience with interactive charts, dynamic data fetching, and user-friendly financial management features.

##Features

1. **Stock Management**: Add, view, edit, and delete stock holdings with ease.
2. **Real-Time Tracking**: Track total portfolio value dynamically with live stock prices.
3. **User Authentication**: Secure user registration, login, and logout functionality.
4. **Dashboard**:Total portfolio value,Top-performing stock,Portfolio distribution chart.

## Technologies Used
- **Django**: Backend logic, models, and APIs.
- **Django REST Framework (DRF)**: To create robust APIs for interacting with the frontend.
- **PostgreSQL**: For persistent data storage.
- 
### Frontend:
- **React**: User interface with dynamic data handling.
- **Axios**: HTTP requests and integration with the backend API.
- **Chart.js**: For displaying financial trends in an interactive graphical format.

## Installation

### Prerequisites

- Python 3.x
- Node.js and npm
- Django
- React

### Backend Setup (Django)

1. Clone the repository:

 2.  Create and activate a virtual environment:python -m venv env
source env/bin/activate  # For Windows: env\Scripts\activate
3. Install the required dependencies: pip install -r requirements.txt
4. Setup PostgreSQL :psql -U postgres
5.  Run the migrations: python manage.py migrate
6. Start the Django development server: python manage.py runserver

### Frontend Setup (React)

Now, you should be able to access the app at http://localhost:3000 (React frontend) and the API at http://localhost:8000 (Django backend).

### Authentication
- **POST** `/api/auth/login/`: Login with email and password.
- **POST** `/api/auth/register/`: Register a new user.
###Stocks
- **POST** `api/stocks` : Add new Stock
- **GET** `api/stocks`  : Retreive all Stocks
- **PUT** `api/stocks/<id>` : Update an existing Stock

## Future Improvements
- **Enhanced Analytics**: Include historical data and trends for stock performance.
- **Mobile App**: Extend functionality to a mobile application using React Native.
- **Notifications**: Add alerts for stock price changes or portfolio milestones

---

## Contributing
We welcome contributions to enhance the Portfolio Tracker! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.
