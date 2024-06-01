https://anupunj-gemini.vercel.app/





This project is a complete clone of the Gemini platform, utilizing the Gemini 1.5 Flash API. This project demonstrates how to integrate with external APIs, manage environment variables securely, and build a React application with a focus on llm api.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- You have a free account on gemini to get an API key

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/alok12-3/gemini.git
   cd gemini
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Setup

1. Create a `.env` file in the root directory and add your API key:
   ```env
   API_KEY=your_api_key_here
   ```

2. Ensure `.env` is listed in your `.gitignore` file to prevent it from being committed to the repository:
   ```plaintext
   .env
   ```

## Usage

To start the application locally, run the following command:

```bash
npm run dev
```

Then open your browser and go to `http://localhost:3000`.

## Deployment

This application is deployed on Vercel. You can view the live application at: [https://anupunj-gemini.vercel.app/]

To deploy it yourself:
1. Go to [Vercel](https://vercel.com/).
2. Link your GitHub repository.
3. Configure the build settings as follows:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**: Add `API_KEY` with your API key.
4. Click "Deploy".

## Contributing

To contribute to this project, follow these steps:

1. Fork this repository.
2. Create a branch: 
   ```bash
   git checkout -b <branch_name>
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m '<commit_message>'
   ```
4. Push to the original branch:
   ```bash
   git push origin <project_name>/<location>
   ```
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you want to contact me, you can reach me at <anupunj1alok@gmail.com>.
```


