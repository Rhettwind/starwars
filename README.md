# Star Wars Characters Explorer

This project is a web application designed to explore characters from the Star Wars universe. It has been developed with a focus on rapid development, leveraging several frameworks and libraries to achieve significant progress within just 2 hours.

## Features

- List view of Star Wars characters fetched from the Star Wars API (SWAPI).
- Pagination support for navigating through characters.
- Detailed view for each character, displaying comprehensive information.
- Edit functionality allowing local modifications to character details (changes are saved locally and not persisted on the server).
- Responsive design for comfortable use across various devices and screen sizes.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- React Router: For enabling navigation between different sections of the application.
- Axios: Promise based HTTP client for making API calls.
- PrimeReact: A rich set of UI components for React.
- SWAPI (Star Wars API): For fetching character data.

1.  Navigate to the project directory:

    bashCopy code

    `cd star-wars-characters-explorer`

2.  Install dependencies:

    bashCopy code

    `npm install`

3.  Run the application:

    bashCopy code

    `npm start`

    The application will be available at `http://localhost:3000/`.

Deployment
----------

To deploy the app on a live server:

1.  Build the application:

    bashCopy code

    `npm run build`

2.  Deploy the `build` directory contents to your web server.

Note: Ensure that your server is configured to redirect all requests to `index.html` for React Router to function correctly in a production environment.

Contributing
------------

Contributions to the project are welcome. Please adhere to this project's `code of conduct` while contributing.

License
-------

[MIT License](https://chat.openai.com/c/LICENSE.md)

Acknowledgments
---------------

-   The Star Wars API (SWAPI) for providing the data used in this project.
-   All contributors who participated in this project.
