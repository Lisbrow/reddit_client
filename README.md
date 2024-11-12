# Readdit

![Preview](redditClientScreenshot.png)

Readdit is a React web application that uses the Reddit API to allow users to search, browse, and explore Reddit posts. The app features a responsive design and a cohesive user experience, leveraging React and Redux for state management.

## Table of Contents
- [Readdit](#readdit)
  - [Table of Contents](#table-of-contents)
  - [Purpose](#purpose)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Future Work](#future-work)
  - [Acknowledgements](#acknowledgements)

## Purpose
This project was developed to practice building a full-stack application using React and Redux. It integrates with the Reddit API to provide a platform where users can search for posts, filter results, and view detailed information. The main objective was to create a responsive, engaging user interface with smooth navigation and data handling.

## Features
- Users can search for Reddit posts by keywords.
- Users can filter posts based on predefined categories (e.g., Hot, New, Top).
- Users can view detailed information about each post, including the title, author, and comments.
- Responsive design ensures a smooth experience on both desktop and mobile devices.
- Cohesive design system with animations and transitions for an enhanced user experience.
- Error handling provides meaningful feedback if something goes wrong.

## Technologies
- React.js
- Redux for state management
- React Router for navigation
- Reddit API for data integration
- React Testing Library for component testing
- Redux Mock Store for testing Redux actions and reducers
- Jest for unit and integration testing
- JavaScript, HTML, and CSS for the frontend

## Getting Started

### Prerequisites
Before you begin, ensure you have the following:
- Node.js installed on your machine

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Lisbrow/reddit_client.git
    cd reddit_client
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000/` to view the app locally or [https://lisbrow.github.io/reddit_client](https://lisbrow.github.io/reddit_client/) to view the live demo.
2. Browse the home feed to see popular Reddit posts.
3. Use the search bar to look up specific posts or topics.
4. Click on the chat bubble icon to view comments.
5. Use category filters (Popular, Rising, All) to explore posts based on popularity or recency.

## Testing
The application includes unit and integration tests using Jest, React Testing Library, and Redux Mock Store.

1. To run the tests:
    ```bash
    npm test
    ```

2. **React Testing Library** is used for testing React components and user interactions.
3. **Redux Mock Store** is used to mock the Redux store for testing actions and reducers without relying on the actual Redux store.

## Future Work
- **User Authentication**: Allow users to log in and interact with posts (upvote, comment).
- **Infinite Scrolling**: Implement infinite scroll for a smoother browsing experience.
- **Dark Mode**: Add a dark theme option for better accessibility.
- **Advanced Filtering**: Enable filtering by subreddit, post age, or user-defined categories.
- **Improved Error Handling**: Provide retry options and clearer error messages.

## Acknowledgements
- [Reddit API](https://www.reddit.com/dev/api/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [Redux Mock Store](https://github.com/reduxjs/redux-mock-store)