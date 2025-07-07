# SOFR Rates Management System

This project is a responsive web application designed for managing SOFR (Secured Overnight Financing Rate) rates for a bank. It provides functionalities for both rates committee members and branch members, allowing for efficient management and viewing of SOFR rates.

## Features

1. **User Authentication**
   - A login page that accepts username and password.
   - Validates credentials via a REST API and displays error messages for incorrect credentials.

2. **Dashboard**
   - Displays historical SOFR rates for the last 30 days in a table format.
   - Visualizes the 30-day average SOFR using a bar chart.
   - Compares daily SOFR, 30-day average SOFR, and 90-day average SOFR in a comparison chart.

3. **SOFR Rate Management**
   - A dedicated page for viewing current SOFR rates.
   - Implements a maker-checker flow for editing rates, including date determination and approval processes.

4. **API Integration**
   - REST APIs to distribute approved rates and manage user authentication.

5. **User Roles**
   - **Rates Committee Members**: Can set and approve rates for various bank products and define promotional rates.
   - **Branch Members**: Can view rate cards without editing capabilities.

## Technologies Used

- **Frontend**: ReactJS, HTML, SCSS
- **API Communication**: Axios for REST API calls
- **Styling**: SCSS for responsive design

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd sofr-rates-management
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Folder Structure

- `public/`: Contains the main HTML file.
- `src/`: Contains all the source code for the application.
  - `api/`: API calls related to SOFR rates.
  - `assets/`: Static assets like images or fonts.
  - `components/`: Reusable components for authentication, dashboard, and SOFR editing.
  - `pages/`: Main pages of the application.
  - `styles/`: SCSS styles for the application.
  - `types/`: TypeScript types and interfaces.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.