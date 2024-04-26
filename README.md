# Dashboard Application

This is a dashboard application that allows users to navigate between different pages and perform various actions.

## Components

### App

The `App` component is the main entry point of the application. It sets up routing using `react-router-dom` and renders different pages based on the route.

### DashboardLayout

The `DashboardLayout` component provides a layout structure for the dashboard pages. It includes a side navigation (`Sidenav`), a top navigation bar (`Topnav`), and a container for page content.

### SideDrawer

The `SideDrawer` component displays a drawer for the side navigation on smaller screens.

### Sidenav

The `Sidenav` component contains links for navigation and displays icons for different pages. It highlights the active link based on the current URL.

### Topnav

The `Topnav` component displays the top navigation bar with the application title and a user menu.

### CustomCard

The `CustomCard` component is a custom styled card component using Chakra UI's `chakra`.

## Usage

To use this project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using npm or yarn.
3. Start the development server.
4. Open your browser and navigate to the specified URL.

## Technologies Used

- React.js
- Chakra UI
- React Router DOM

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/dashboard.git
