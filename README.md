# Firebase React TypeScript App

This project integrates Firebase with a React application written in TypeScript. It showcases basic user authentication functionality and a simple note-adding feature for authenticated users.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Features

- User authentication (Sign Up, Sign In, and Logout).
- Protection of routes based on authentication status.
- Adding, viewing and deleting notes (only for authenticated users).

## Prerequisites

- Node.js and npm installed.
- A Firebase account and a configured Firebase project.

## Installation

1. Clone the repository:
```bash
git clone git@github.com:jpcaparas/firebase-react-ts-app.git
```

2. Install the dependencies:
```bash
cd firebase-react-ts-app
npm install
```

3. Set up your Firebase environment:
- Head to Firebase console and create a new project if you haven't already.
- Copy the Firebase project configuration.
- Create a `.env` file in the root of the project and paste your configuration as shown:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_DATABASE_URL=your-database-url
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

**Note:** Ensure that you never commit the `.env` file containing your Firebase credentials.

4. Run the application:

```bash
npm start
```

Your app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- Navigate to the Sign Up page to register a new user.
- Use the Sign In page to authenticate existing users.
- Once authenticated, users can add notes through the Add Note page.
- To sign out, navigate to the Logout link.

## Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss the proposed changes. Ensure that tests pass and code standards are met before submitting a PR.

## License

This project is open-source and available under the MIT License. See `LICENSE.md` for more details.
