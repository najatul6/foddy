# Foddy - Restaurant Web Application

Foddy is a modern and responsive restaurant web application built using React and Vite. It provides a seamless user experience with smooth navigation, attractive design, and interactive components to showcase restaurant features, menus, and customer reviews.

## Features

- **Dynamic Rating System**: Includes a rating system using `@smastrom/react-rating` and `react-star-rating-input` for user feedback.
- **Interactive UI**: Leverages `react-icons` and `swiper` for an engaging interface.
- **Routing**: Efficient navigation with `react-router-dom`.
- **Modern Styling**: Styled with Tailwind CSS for a clean and responsive design.
- **TypeScript Ready**: Includes type definitions for React.

## Technologies Used

### Frontend
- **React**: Version 18.3.1 for building a responsive UI.
- **Vite**: For fast development and optimized builds.
- **Tailwind CSS**: For modern and responsive design.
- **Swiper**: For interactive carousels and sliders.
- **React Router**: For dynamic and declarative routing.
- **React Icons**: For easy-to-use icons.
- **React Rating Libraries**: For dynamic and customizable rating systems.

### Development Tools
- **ESLint**: For maintaining code quality and enforcing coding standards.
- **PostCSS**: For enhanced CSS processing.
- **Autoprefixer**: For cross-browser compatibility.

## Installation and Setup

Follow the steps below to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/najatul6/foddy.git
   cd foddy
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Project Structure

```plaintext
foddy/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Application pages
│   ├── routes/       # Routing configuration
│   ├── styles/       # Tailwind and CSS files
│   └── App.jsx       # Main application file
├── .eslintrc.js      # ESLint configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js    # Vite configuration
└── package.json      # Project metadata and dependencies
```

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run preview`**: Previews the production build locally.
- **`npm run lint`**: Lints the project for code quality.

## Dependencies

- `@smastrom/react-rating`
- `prop-types`
- `react`
- `react-dom`
- `react-icons`
- `react-router-dom`
- `react-star-rating-input`
- `swiper`

### Development Dependencies

- `@eslint/js`
- `@vitejs/plugin-react`
- `autoprefixer`
- `eslint`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `postcss`
- `tailwindcss`
- `vite`

## Contributing

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push the branch: `git push origin feature-name`.
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy coding! Enjoy building with Foddy!

