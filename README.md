# Greptile Frontend Demo

## Overview

This project is a frontend demo for Greptile, showcasing an AI-powered codebase analysis tool that allows users to query and search through repositories using natural language. The application provides a seamless interface for indexing repositories, querying codebases, and searching through code.

## Technologies Used

### Core Technologies

- **React 18** - Frontend framework
- **TypeScript** - Static typing and enhanced developer experience
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling

### Key Dependencies

- **lucide-react** - Modern icon library for React applications
- **React DOM** - React rendering for web applications

### Development Tools

- **ESLint** - Code linting and static analysis
- **PostCSS** - CSS transformation and processing
- **Autoprefixer** - Automatic CSS vendor prefix handling

## Features

### 1. Repository Indexing

- Submit repositories for indexing via API
- Support for GitHub and GitLab repositories
- Branch specification support

### 2. Natural Language Querying

- Ask questions about codebases in natural language
- Get AI-powered responses about code structure and functionality
- Support for complex queries about code architecture

### 3. Code Search

- Search through indexed repositories
- Find relevant files, functions, and classes
- Efficient repository navigation

## Project Structure

The project follows a modular architecture with key components:

### Main Components

- **Introduction** - Welcome screen and feature overview
- **QueryPanel** - Interface for submitting queries
- **ResponsePanel** - Displays API responses
- **HistoryPanel** - Tracks query history

### API Integration

The application integrates with Greptile's API endpoints:

- POST /repositories - For indexing repositories
- POST /query - For natural language queries
- POST /search - For code search functionality

### Environment Configuration

Required environment variables:

- VITE_GREPTILE_API_KEY - Greptile API authentication
- VITE_GITHUB_TOKEN - GitHub access token

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file with required environment variables:

```bash
VITE_GREPTILE_API_KEY=your_api_key
VITE_GITHUB_TOKEN=your_github_token
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Build and Deployment

To build for production:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Development

### Code Style

- TypeScript strict mode enabled
- ESLint configuration for React and TypeScript
- Modular component structure with separate styling files

### Project Configuration

- Custom Vite configuration for optimization
- TypeScript path aliases for improved imports
- Tailwind CSS configuration for styling
