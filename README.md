# PARA Method Website

A modern, educational website dedicated to explaining and implementing the PARA method for digital organization. Built with React, TypeScript, and Tailwind CSS.

![PARA Method](client/public/images/hero-workspace.jpg)

## 🎯 About PARA

The PARA Method is a simple, flexible system for organizing any type of digital information, developed by Tiago Forte. PARA stands for:

- **Projects**: Short-term efforts with a defined goal and deadline
- **Areas**: Long-term responsibilities with a standard to maintain
- **Resources**: Topics of interest and ongoing learning
- **Archives**: Inactive items from other categories

This website provides comprehensive guides, real-world examples, and tools to help users implement PARA in their digital lives.

## ✨ Features

- **Interactive Home Page**: Beautiful landing page explaining the PARA method with visual examples
- **Detailed Guide**: Real-world implementation examples for research projects, freelance work, and personal life
- **GitHub Integration**: Connect GitHub repositories and organize them using PARA categories (OAuth setup required)
- **Responsive Design**: Mobile-first design with modern UI components
- **Full-Stack Architecture**: React frontend with Express backend, tRPC API, and MySQL database
- **Authentication**: Built-in Manus OAuth for user management

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Wouter** - Lightweight routing
- **shadcn/ui** - Beautiful component library
- **Lucide React** - Icon library

### Backend
- **Express 4** - Web server
- **tRPC 11** - End-to-end typesafe APIs
- **Drizzle ORM** - Type-safe database queries
- **MySQL** - Relational database
- **Jose** - JWT handling

### Development
- **Vite** - Fast build tool
- **Vitest** - Unit testing
- **ESBuild** - Production bundling
- **pnpm** - Fast package manager

## 📦 Installation

### Prerequisites

- Node.js 22.x or higher
- pnpm 10.x or higher
- MySQL database (or compatible service like TiDB)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/bangsamoro/para-website.git
   cd para-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Database
   DATABASE_URL=mysql://user:password@host:port/database
   
   # Authentication (Manus OAuth)
   JWT_SECRET=your-jwt-secret
   VITE_APP_ID=your-app-id
   OAUTH_SERVER_URL=https://api.manus.im
   VITE_OAUTH_PORTAL_URL=https://portal.manus.im
   OWNER_OPEN_ID=your-owner-open-id
   OWNER_NAME=your-name
   
   # Optional: GitHub OAuth (for repository integration)
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

4. **Initialize the database**
   ```bash
   pnpm db:push
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
para-website/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   │   └── images/        # Generated images
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/         # Page components
│       │   ├── Home.tsx   # Landing page
│       │   ├── Guide.tsx  # Detailed guide with examples
│       │   └── GitHub.tsx # GitHub integration page
│       ├── lib/           # Utilities and tRPC client
│       └── App.tsx        # Main app component
├── server/                # Backend application
│   ├── _core/            # Core server infrastructure
│   ├── db.ts             # Database queries
│   ├── routers.ts        # tRPC API routes
│   └── storage.ts        # S3 file storage helpers
├── drizzle/              # Database schema and migrations
│   └── schema.ts         # Database tables
└── shared/               # Shared types and constants
```

## 🎨 Design Philosophy

The website follows a **Modern Minimalist with Functional Clarity** design approach:

- Clean, grid-based layouts with generous whitespace
- Typography hierarchy emphasizing readability
- Neutral color palette (slate blue + teal accents)
- Asymmetric layouts with content-visual balance
- Mobile-first responsive design

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - Type check without building
- `pnpm test` - Run unit tests
- `pnpm db:push` - Push database schema changes
- `pnpm format` - Format code with Prettier

### Adding New Features

1. **Database changes**: Update `drizzle/schema.ts`, then run `pnpm db:push`
2. **API endpoints**: Add procedures in `server/routers.ts`
3. **Frontend pages**: Create components in `client/src/pages/`
4. **UI components**: Use shadcn/ui components from `@/components/ui/`

### Testing

Write unit tests in `server/*.test.ts` files:

```typescript
import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";

describe("feature", () => {
  it("should work correctly", async () => {
    // Your test here
  });
});
```

Run tests with:
```bash
pnpm test
```

## 🚢 Deployment

### Building for Production

```bash
pnpm build
```

This creates:
- `client/dist/` - Frontend static files
- `dist/` - Backend server bundle

### Deployment Options

1. **Manus Platform** (Recommended)
   - Built-in hosting with custom domains
   - Automatic SSL certificates
   - One-click deployment from checkpoints

2. **Vercel / Netlify**
   - Deploy frontend to Vercel/Netlify
   - Deploy backend to Railway/Render
   - Configure environment variables

3. **Docker**
   - Create Dockerfile for containerized deployment
   - Use docker-compose for multi-service setup

### Environment Variables for Production

Ensure all environment variables are set in your production environment, especially:
- `DATABASE_URL` - Production database connection
- `JWT_SECRET` - Strong secret for session signing
- OAuth credentials for authentication

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tiago Forte** - Creator of the PARA Method
- **shadcn** - For the beautiful UI component library
- **Manus Team** - For the development platform and infrastructure

## 📧 Contact

For questions, suggestions, or feedback:

- GitHub Issues: [https://github.com/bangsamoro/para-website/issues](https://github.com/bangsamoro/para-website/issues)
- Repository: [https://github.com/bangsamoro/para-website](https://github.com/bangsamoro/para-website)

## 🗺️ Roadmap

- [ ] Complete GitHub OAuth integration
- [ ] Add interactive PARA quiz
- [ ] Build downloadable template generator
- [ ] Add video tutorials
- [ ] Create mobile app version
- [ ] Multi-language support
- [ ] Community examples gallery

---

**Built with ❤️ using the PARA Method**
