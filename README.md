# RizzyPrompts - Discover, Share, and Create Prompts for AI

![RizzyPrompts Logo](/public/assets/images/logo.svg) 

RizzyPrompts is a modern Next.js 13 full-stack application that allows users to explore a collection of AI prompts, share their own ideas, collaborate with others, and vote on the most inspiring prompts in the field of artificial intelligence.

## Installation

To run RizzyPrompts locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/mrizwan83/RizzyPrompts.git
```

2. Navigate to the project directory and install dependencies:

```bash
cd RizzyPrompts
npm install
```

3. Set up the required environment variables:

Ensure you have the necessary API keys for Google, GitHub, and MongoDB, and place them in the .env file:

```plaintext
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
MONGODB_URI=your-mongodb-uri
```

4. Start the development server:

```bash
npm run dev
```

5. Open http://localhost:3000 in your browser to view the application.

## Usage

Explore a curated collection of AI prompts, share your own ideas, collaborate with other users to refine prompt ideas, and vote on the most inspiring prompts to showcase the community's favorites.

## Technologies Used

RizzyPrompts is built with the following technologies:

- Next.js 13
- NextAuth for authentication
- MongoDB for data storage
- Tailwind CSS for styling
- OAuth with Google and GitHub for seamless authentication

## Deployment

RizzyPrompts is deployed on Vercel and can be accessed at https://rizzyprompts.com.

## Contributing

We welcome contributions from the community. To contribute to RizzyPrompts, please follow these guidelines:

1. Fork the repository and create a new branch for your contributions.
2. Make your changes and test them thoroughly.
3. Submit a pull request with a clear description of your changes and their purpose.

## License

RizzyPrompts is licensed under the MIT License.

## Live Demo

Visit https://rizzyprompts.com to see a live demo of RizzyPrompts.

## Contact Information

If you have any questions or need support, you can reach out to the project maintainer via email: mhrizwandev@gmail.com or connect on [LinkedIn](https://www.linkedin.com/in/mohammad-h-rizwan/).