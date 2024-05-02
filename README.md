# InnovateTech

A mobile application for managing student data built with React Native, Redux, Axios and MMKV.

## Features

- View a list of students
- Filter students by gender
- View detailed information about each student
- Load more students dynamically
- Cache student data locally for offline use

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI
- MMKV (for persistent storage)

### Installation

1.  Clone the repository:

    bash

    Copy code

    `git clone https://github.com/Gabrpimenta/InnovateTech`

2.  Navigate to the project directory:

    bash

    Copy code

    `cd innovatetech`

3.  Install dependencies:

    bash

    Copy code

    `npm install`

    or

    bash

    Copy code

    `yarn install`

4.  Start the development server:

    bash

    Copy code

    `npm start`

    or

    bash

    Copy code

    `yarn start`

5.  Open the Expo app on your mobile device and scan the QR code to view the app.

### Usage

- View the list of students on the main screen.
- Filter students by gender using the filter buttons.
- Tap on a student card to view detailed information.
- Scroll to the end of the list to load more students dynamically.
- Student data is cached locally for offline use.

### Technologies Used

- React Native
- Redux Toolkit
- Redux Persist
- Expo
- MMKV (for persistent storage)
- Axios (for API requests)
- TypeScript

## Scripts

- `start`: Start the Expo development server.
- `android`: Run the app on an Android device or emulator.
- `ios`: Run the app on an iOS device or simulator.
- `web`: Start the Expo development server for web.

### Final Considerations

- Personally I would use Zustand instead of Redux because Zustand offers a simpler, more ergonomic approach to state management compared to Redux. With its minimal API surface and integration of React hooks, Zustand enables faster development and reduced boilerplate code. It excels in performance optimization and bundle size, making it suitable for smaller applications or projects where efficiency is critical. Additionally, Zustand's flexibility and focus on developer experience contribute to cleaner, more maintainable code.
