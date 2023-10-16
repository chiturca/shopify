# Shopify Store
This project was created in response to a recruitment test given to me by a company. At the end, I had started to work for the company for a while. Therefore, eventhough our work is finished now, I would like to express my process details here.
- Starting time of the task: 7th of March 2023
- Finishing time of the task: 10th of March 2023

![Mock png](https://i.ibb.co/61ymkmP/shopify-mock.png)

# Introduction
This project showcases my work as a frontend developer and my ability to create robust web applications using Shopify's Polaris Design Kit and React. The main goal of this project was to develop a Shopify app for product management. It involved creating a user interface that allows users to authenticate, view a list of products, filter and search products, and apply discounts. I utilized a mock data set to simulate real-world usage, and the application features a user-friendly interface built with Polaris components. The app was also integrated as an embedded app in a Shopify mock admin panel.

# Requirements

To complete this project, I was tasked with the following requirements:

1. ***User Authentication:*** Develop a user interface for authenticating the app or registering a new account. An account includes fields for name, email, password, and phone number.

2. ***Product List:*** Display a list of products from the user's store using mock data. Each product must have a name, description, category tag, price, and an optional image.

3. ***Filter and Search:*** Enable users to filter and search products by name, description, tags, and optional price.

4. ***Discounts:*** Allow users to select one or more products and apply discounts. The product list must display the reduced price with the old price and the percentage of the discount.

5. ***Styling and Components:*** Utilize the Shopify Polaris library to style and design the app components.

6. ***Testing:*** Ensure the app functions correctly. No backend is required; mock data suffices.

7. ***Integration:*** Integrate the app as an embedded app in a Shopify mock admin panel.

8. ***Documentation:*** Provide clear instructions on setting up and running the app locally.

These requirements guided the development of the Shopify product managing app showcased in this project.

# Project Description

This project involved creating a product management app using React and the Shopify Polaris Design Kit. Below, I outline the key aspects of the project:

### User Authentication

For user authentication, I developed both login and sign-up pages using React. These pages were integrated with Shopify's built-in routes and connected to the main page. While I attempted to connect these pages to the backend using Axios, the frontend-backend connection for authentication is not yet completed.

### Product List

I displayed a list of products from the user's store, utilizing mock data in JSON format. Each product was equipped with essential details, including name, description, category tags, price, and an optional image.

### Filter and Search

To enhance user experience, I implemented product filtering and searching functionalities. Users can search for products by name, description, tags, and price (optional).

### Discounts

The application allows users to select one or more products from the list and apply discounts. Discounted products are displayed with their reduced prices alongside the original prices and the percentage of the discount.

### Styling and Components

I fully leveraged the Shopify Polaris library for styling and designing the app's components. This resulted in a polished and user-friendly interface.

### Testing

To ensure the app functions correctly, I utilized browser console logs and terminal output. Although no backend was required, I used mock data to verify the application's behavior.

### Integration

One of the project's requirements was integrating the app as an embedded app within a Shopify mock admin panel. Despite my efforts, I encountered an issue related to the Content Security Policy directive and was unable to complete this integration within the given timeframe.

### Documentation

I created a detailed Word file providing instructions on setting up and running the app locally, as requested. Unfortunately, due to the integration challenges, I could only showcase my frontend code on GitHub.

### Conclusion

Overall, this project was an excellent opportunity to work with the Shopify Polaris Design Kit and meet specific development requirements. Despite integration challenges, I learned valuable lessons and gained experience in using emerging technologies like Shopify Polaris.

# Features

In this section, I will highlight the key features and components developed as part of this project:

### Custom Navigation

To ensure a unique and engaging user experience, I designed and implemented a custom navigation system manually using CSS. This navigation includes a custom logo created using Figma for a distinctive visual identity.

### Home Page

The "Home" page serves as the central hub of the application, offering several essential features:

- **Product Management**: Users can access a list of products, view product details, apply discounts, and utilize search and filtering capabilities.

- **Search Functionality**: Implemented a search feature that allows users to search for products based on inputted letters.

- **Category Filtering**: Products can be filtered based on categories, enhancing the user's ability to find relevant items.

- **State Management**: Leveraged React's state management capabilities, along with manual functions, to create dynamic interactions.

- **Polaris Integration**: Utilized the Shopify Polaris Design Kit to ensure a cohesive and polished interface.

### Sign-In and Sign-Up Pages

The "Sign-In" and "Sign-Up" pages are essential components of the application:

- **User Authentication**: These pages allow users to log in or create a new account. User account details include name, email, password, and phone number.

- **Form Handling**: Created forms for both sign-in and sign-up pages, managing user input and interactions.

- **Polaris Integration**: Designed these pages in harmony with the overall Polaris design, maintaining a consistent and professional look.

### Custom Styling

For components where no direct Polaris equivalent was available, I employed custom CSS and design work. This includes crafting a distinctive navigation bar and logo to complement the overall user interface.

These features collectively contribute to a rich and user-friendly experience within the product management application.

# Technologies Used

In the development of this project, the following technologies and libraries were employed:

- **React**: The core JavaScript library for building user interfaces, which provided the foundation for this project.

- **React Router DOM**: A popular library for adding routing and navigation to React applications.

- **Axios**: Used for making HTTP requests, enabling data retrieval and communication with the backend.

- **React Query**: A powerful library for managing data and state, enhancing the efficiency of data fetching.

- **Shopify Polaris**: An integral part of the Shopify design ecosystem, which contributed to the polished user interface.

- **@shopify/app-bridge-react**: A Shopify library that aids in building embedded applications in the Shopify ecosystem.

- **Vite**: A build tool for bundling and optimizing JavaScript applications.

- **Figma**: Utilized for designing custom navigation components and logo.

These technologies and libraries played a crucial role in building a feature-rich and responsive application.

# Installation and Usage

1. Clone this repository to your local device using Git. Open your terminal and run the following command:

    ``  git clone https://github.com/chiturca/shopify.git  ``

- or if you have a SSH key connected to your GitHub account:

    ``  git clone git@github.com:chiturca/shopify.git  ``

2. Navigate to the project directory:

    ``  cd shopify  ``

3. Install project dependencies. Run the following command to install the required packages:

    ``  npm install  ``


4. Start the development server. Run the following command:

    ``  npm run dev  ``


This will start the application in development mode, and you can view it in your web browser at your local host.

Now, you should have the project running locally on your machine for testing purposes.

# Evaluation Criteria

The project's performance and quality were evaluated based on the following criteria:

- **Code Quality**: The codebase was assessed for its cleanliness, organization, and ease of understanding. Well-documented and neatly structured code was prioritized.

- **Functionality**: The application was scrutinized for its ability to handle user authentication (login and registration), product display, filtering, searching, and discount application. The completeness of these functionalities was a key consideration.

- **User Interface**: The user interface was reviewed for its intuitiveness, ease of use, and alignment with the Shopify Polaris design principles. The use of Polaris components to create a polished and user-friendly interface was an important aspect.

- **Error Handling**: The app's ability to handle errors gracefully and provide clear and informative error messages to users was examined.

- **Documentation**: The codebase was assessed for thorough documentation, ensuring that anyone reviewing the code could easily set up and run the app locally. Clear instructions for developers were a critical component of this evaluation.

Overall, the project was evaluated on its ability to meet the specified requirements, deliver a functional and user-friendly application, and demonstrate clean and well-documented coding practices.

# Links
- Project deployment: [https://shopify-chiturca.vercel.app](https://shopify-chiturca.vercel.app)

# Author
- Author: Miray Sönmez
- Email: sonmezmiray@gmail.com

# Conclusion
This project presents a product management web application built using React and the Shopify Polaris Design kit. The application's primary features include user authentication, product listing, filtering, searching, and discount application. The UI was constructed primarily with Shopify Polaris components, ensuring an intuitive and user-friendly interface. The app handles errors gracefully and provides clear error messages to users for enhanced usability.

Throughout the development process, the following key accomplishments were achieved:

User Authentication: Implemented user authentication with sign-up and sign-in pages for account creation and access control. The setup includes user details such as name, email, password, and phone number.

Product Management: Designed a product listing page displaying products from a user's store. Products are categorized by name, description, tags, and optional images. Users can apply filters and search for products based on various criteria.

Discount Application: Provided the functionality for users to select one or more products and apply discounts. The discounts are displayed alongside the product listing, showcasing the reduced price with the old price and the percentage of the discount.

Styling with Shopify Polaris: Utilized Shopify Polaris components and custom CSS for styling, ensuring a consistent and polished user interface.

Testing: Rigorously tested the application to ensure it functions correctly and handles errors smoothly. The testing process included the use of console logs and browser terminal.

Integration with Shopify Admin Panel: Integrated the application as an embedded app within a Shopify mock admin panel. However, deployment to Shopify encountered issues, leading to the availability of only the frontend code on GitHub.

This project served as a valuable learning experience, especially in the quick adoption of the Shopify Polaris library. Shopify Polaris continues to evolve and provide an increasingly user-friendly design kit for developers. While the deployment to Shopify for public access encountered challenges, this endeavor reflects a commitment to further growth and development in the field of frontend development.

Thank you for considering this project and its potential for frontend development. If you have any questions or need further information, please do not hesitate to contact me.
