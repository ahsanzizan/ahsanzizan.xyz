# Personal Website
Welcome to my personal website repository! This website is built using Next.js 13, a popular React framework. Below you'll find some information about the project structure and how to get started. This project is hosted at [www.ahsanzizan.xyz](https://www.ahsanzizan.xyz)

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Structure
The project structure is organized as follows:

personal-website/

```
├── public/ # Public assets like images, fonts, etc.

├── src/
  
  ├── actions/ # Next.js server actions
  
  ├── app/ # Contains all the Next.js core files
  
  ├── database/ # Database interactions

  ├── models/ # Entity model schemas

  ├── types/ # Reusable types
  
  ├── components/ # Reusable components
  
  ├── utils/ # Utility functions or helper modules

  ├── lib/ # Helper functions to use library

├── .gitignore # Specifies intentionally untracked files to ignore

├── package.json # List of dependencies and project configurations

├── README.md # Project README file
```

## Getting Started

1. First, clone this repository:
2. 
```bash
git clone https://github.com/ahsanzizan/personal-website.git
```

2. Install the dependencies:
3. 
```bash
npm install
```

3. Configure environment variables

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production.
- `npm start`: Starts the app in production mode.
- `npm run lint`: Runs linting checks on the codebase.
- `npm run format`: Formats the codebase according to defined rules.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests. Please adhere to the existing code style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for visiting my personal website repository! If you have any questions or suggestions, feel free to reach out.
