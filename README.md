# Word Docs Issues

Dear Professor, my word/docs editor is malfunctioned which is why i am answering all the questions here in github

# Frontend Steps taken

Here are the steps taken during Hands On experience

## Anomaly Detection Dashboard

This project consists of two parts:

Frontend: Built with Angular, it displays analytics data using charts and fetches data from a mock API.
Backend: Built with Node.js and Express, it provides an API for fetching anomaly data and includes JWT authentication.
Table of Contents

Frontend Setup,
Backend Setup,
Running the Application,
API Endpoints,
File Structure,
Technologies Used,
Frontend Setup,

## Prerequisites

### Node.js and npm installed.

### ngular CLI installed globally.

Steps

Navigate to the Angular project:

```
cd angular-dashboard
```

Install dependencies:

```
npm install
```

Run the Angular application:

```
ng serve
```

Open your browser and navigate to:
http://localhost:4200/dashboard

## Backend Setup

### Prerequisites

Node.js and npm installed.
MongoDB and SQL Server installed and running.
Steps
Navigate to the backend project:

```
cd express-backend
```

Install dependencies:

```
npm install
```

Set up environment variables:
Create a .env file in the express-backend folder.
Add the following variables(normally these variables will be meaningful but since it's a practice application which is why i don't bother much and i am making it publically accessible):

```
MONGO_URI=mongodb://localhost:27017/anomalies
SQL_SERVER_CONNECTION_STRING=Server=localhost,1433;Database=anomalies;User Id=sa;Password=your_password;
PORT=5000
JWT_SECRET=your_jwt_secret
```

Run the backend server:

```
npm run dev
```

The server will start at:
http://localhost:5000
Running the Application

Start the backend server:

```
cd express-backend
npm run dev
```

Start the frontend application:

```
cd angular-dashboard
ng serve
```

Access the application in your browser:
http://localhost:4200

API Endpoints
Authentication

Login:
POST /api/auth/login
Anomalies

#Get Anomalies:

GET /api/anomalies?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
Requires JWT token in the Authorization header.
File Structure

##Frontend (Angular)

```
angular-dashboard/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── dashboard.component.ts
│   │   │   ├── dashboard.component.html
│   │   │   ├── dashboard.component.css
│   │   ├── services/
│   │   │   ├── api.service.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
├── angular.json
├── package.json
Backend (Node.js + Express)
```

##express-backend/

```
├── config/
│   ├── db.js
├── controllers/
│   ├── anomaliesController.js
│   ├── authController.js
├── middleware/
│   ├── authMiddleware.js
├── models/
│   ├── anomalyModel.js
├── routes/
│   ├── anomaliesRoutes.js
│   ├── authRoutes.js
├── .env
├── index.js
├── package.json
Technologies Used
```

Frontend

```
Angular
ng2-charts
Chart.js
RxJS
HTML/CSS
```

Backend

```
Node.js
Express.js
MongoDBs
SQL Server
JSON Web Tokens (JWT)
Mongoose
MSSQL
```

Author
Saqib Nawab
Email: saqibnawab823@gmail.com
GitHub: https://github.com/Saqib-nawab
