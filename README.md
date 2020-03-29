# React Portals
React Portals implements a chat window with the server, which responds automatically like the classic ELIZA program.

This repo experiments with a number of new technologies for the author:
- React Portals
- React useEffect hook
- Redux Hooks
- Socket.io

React Portals solve a great problem for apps that integrate third-party dependencies whose appearance may be broken by inherited CSS styling. By attaching the child dependency to a separate DOM root, the child will not inherit the styling from the existing root node. React processes the state and events of the portal root as it would for any React component.

The useEffect hook is helpful for dependencies that must be initialized when the child is mounted and cleaned up when the child is destroyed. The author has used the React useState hook, but not useEffect, which is generally not neccessary when Redux Sagas are implemented.

Redux Hooks remove some of the boilerplate in the components required by the connect() higher-order component.

## Known Issues
- App displays but does not gracefully handle socket disconnect messages.
- All users share a single instance of the ElizaBot

## Credits
This app uses an ElizaBot class from https://www.masswerk.at/elizabot/, which in turn is based on the work of Joseph Weizenbaum at the MIT Artificial Intelligence Laboratory during the 1960's.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Clone this repo to your computer.

Install the following software on your computer:

- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)

Type npm install from the repo root.

### Launching the app
Type npm run server to start the node server.
Type npm start to launch the React server.