# React Portfolio Page

## Description
This project is a single-page portfolio application built with React, designed to showcase a developer's work and provide contact information. It features a responsive layout, interactive elements, and a professional aesthetic, leveraging modern front-end libraries.

## Features
- **Header**: Includes external links to social media accounts and internal navigation links to different sections of the page.
- **Landing Section**: Displays an avatar picture and a short biography.
- **Projects Section**: Showcases featured projects as cards in a grid layout.
- **Contact Me Section**: A form allowing visitors to send messages, complete with client-side validation.
- **Dynamic Header**: (Bonus) Header animates to show/hide based on scroll direction.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Create React App**: Used for bootstrapping the React project.
- **Chakra UI**: A simple, modular, and accessible component library for React applications.
- **Formik**: A popular library for building forms in React, simplifying form state management and validation.
- **Yup**: A schema builder for value parsing and validation, often used with Formik.
- **FontAwesomeIcon**: For incorporating scalable vector icons.

## Installation
To get a local copy up and running, follow these simple steps.

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```
2.  **Install NPM packages**:
    ```bash
    npm install
    ```

## Running the Application
After installation, you can run the application in development mode.

1.  **Start the development server**:
    ```bash
    npm start
    ```
    This command runs the app in development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

    The page will reload if you make edits.
    You will also see any lint errors in the console.

## Development Steps (Lab Instructions)
This section outlines the step-by-step instructions followed during the development of this portfolio page.

### Initial Setup
Upon running `npm start`, the application displays a page with an empty header, three full-height sections with different background colors, and a footer. The third section is pre-configured for the Contact Me form.

### Step 1: Header Implementation
Open `Header.js` to add content to the header component.

a)  **Add external social media links**: Implement social media links on the left side of the header using `HStack` and `FontAwesomeIcon` components. Data is provided in the `socials` array.
    Example `FontAwesomeIcon` usage: `<FontAwesomeIcon icon="fab" size="2x" />`

b)  **Add internal navigation links**: Create internal links for the "Projects" and "Contact Me" sections. These links should scroll smoothly to their respective sections (`#projects-section` and `#contactme-section`) using the provided `handleClick` function.

### Step 2: Landing Section Implementation
Open `LandingSection.js` to create the landing section. This section should include an avatar (using `https://i.pravatar.cc/150?img=7`), a greeting, and a brief role description, utilizing the `greeting`, `bio1`, and `bio2` variables.

### Step 3: Projects Section and Card Component
While `ProjectsSection.js` is mostly implemented, the `Card` component it uses needs to be completed.

Open `Card.js` and implement the UI for each project card. Each card should display project information passed as props, using Chakra UI components like `HStack`, `VStack`, `Image`, `Heading`, and `Text`. Include a right arrow icon using `<FontAwesomeIcon icon={faArrowRight} size="1x" />`.

### Step 4: Contact Me Section Implementation
Open `ContactMeSection.js` to complete the contact form functionality.

a)  **Configure `useFormik` hook**: Pass an object with `initialValues`, `onSubmit`, and `validationSchema` to `useFormik`.
    -   `initialValues`: `firstName`, `email`, `type` ('hireMe' | 'openSource' | 'other'), `comment`.
    -   `onSubmit`: Call the `submit` helper from `useSubmit` hook.
    -   `validationSchema`: Define Yup validation rules:
        -   `firstName`: Required ("Required").
        -   `email`: Required ("Required") and valid email ("Invalid email address").
        -   `type`: Optional.
        -   `comment`: Required ("Required") and minimum 25 characters ("Must be at least 25 characters").

b)  **Make `Input` components controlled**: Use `getFieldProps` from `useFormik` to bind input fields.

c)  **Display error messages**: Show `FormErrorMessage` when a field is `touched` and `isInvalid` (validation fails) within its `FormControl`.

d)  **Connect form submission**: Link the `form`'s `onSubmit` prop to Formik's `handleSubmit` function, preventing default HTML form behavior.

e)  **Show alert on successful submission**: Listen to the `response` object from `useSubmit`. Display a loading indicator on the submit button using `isLoading`. On successful submission (`response.type === 'success'`), use `useAlertContext`'s `onOpen` function to show an alert with the user's first name and reset the form using `resetForm` from `useFormik`.

### Step 5 (Bonus): Header Show/Hide Animation
Implement a header animation that hides the header when scrolling down (`translateY(-200px)`) and shows it when scrolling up (`translateY(0)`). This involves using `useEffect`, `useRef`, and `window.addEventListener('scroll')` to track scroll position and update the `transform` style property of the outermost `Box` component.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Apolinar Zuñiga - [japolinarzuniga@gmail.com](mailto:japolinarzuniga@gmail.com)

Project Link: [https://github.com/apolinarzuniga/react-portfolio-101](https://github.com/apolinarzuniga/react-portfolio-101)
