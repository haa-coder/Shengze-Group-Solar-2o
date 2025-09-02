# Overview

This is a full-stack web application for Shengze Group, a solar energy and renewable technology solutions company. The application serves as a corporate website showcasing solar panels, renewable energy solutions, engineering services, and international trade capabilities across 30+ countries. It features a modern React frontend with shadcn/ui components, an Express.js backend, and PostgreSQL database integration using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Build Tool**: Vite with custom configuration for development and production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Session Management**: In-memory storage for user sessions using connect-pg-simple

## Data Layer
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions between client and server in `/shared` directory
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Validation**: Zod integration for runtime type validation and schema inference

## Project Structure
- **Monorepo**: Single repository with client, server, and shared code organization
- **Client**: React application located in `/client` directory
- **Server**: Express.js API server in `/server` directory  
- **Shared**: Common types, schemas, and utilities in `/shared` directory
- **Components**: Modular UI components using shadcn/ui design system

## Development Features
- **Hot Reload**: Vite HMR for fast development iteration
- **Type Safety**: Full TypeScript coverage across frontend, backend, and database layers
- **Code Organization**: Path aliases for clean imports (@/, @shared/, @assets/)
- **Error Overlay**: Replit-specific error modal for development debugging

## Authentication & User Management
- **User Schema**: Basic user system with username/password authentication
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Session Handling**: Secure session management with PostgreSQL session store

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon Database PostgreSQL driver for serverless environments
- **drizzle-orm**: Modern TypeSQL ORM for type-safe database operations
- **drizzle-kit**: CLI tool for database migrations and schema management

## UI & Design System
- **@radix-ui/***: Comprehensive set of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Pre-built component library based on Radix UI and Tailwind CSS
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Modern icon library with React components

## Development & Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: Vite plugin for React support
- **esbuild**: Fast JavaScript bundler for server-side code
- **tsx**: TypeScript execution engine for development

## Data Management
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation library
- **date-fns**: Modern JavaScript date utility library

## Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code navigation and exploration tools