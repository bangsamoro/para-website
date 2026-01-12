# Contributing to PARA Method Website

Thank you for your interest in contributing to the PARA Method Website! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Community](#community)

## 🤝 Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please be respectful and constructive in all interactions.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 22.x or higher
- **pnpm** 10.x or higher
- **Git** for version control
- A **MySQL** database (local or cloud)

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/para-website.git
   cd para-website
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/bangsamoro/para-website.git
   ```

### Initial Setup

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your local configuration
   ```

3. **Initialize the database**:
   ```bash
   pnpm db:push
   ```

4. **Start the development server**:
   ```bash
   pnpm dev
   ```

5. **Verify everything works** by visiting `http://localhost:3000`

## 🔄 Development Workflow

### 1. Create a Feature Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests
- `chore/` - Maintenance tasks

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Test your changes thoroughly

### 3. Keep Your Branch Updated

Regularly sync with the upstream repository:

```bash
git fetch upstream
git rebase upstream/main
```

### 4. Run Tests and Checks

Before committing, ensure all checks pass:

```bash
# Type checking
pnpm check

# Run tests
pnpm test

# Format code
pnpm format
```

### 5. Commit Your Changes

Follow our [commit message guidelines](#commit-message-guidelines):

```bash
git add .
git commit -m "feat: add interactive PARA quiz component"
```

### 6. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 🎨 Code Style Guidelines

### TypeScript/JavaScript

- Use **TypeScript** for all new code
- Enable strict type checking
- Avoid `any` types - use proper typing
- Use meaningful variable and function names
- Keep functions small and focused (single responsibility)

**Example:**
```typescript
// ✅ Good
interface UserRepository {
  id: number;
  name: string;
  category: 'project' | 'area' | 'resource' | 'archive';
}

async function categorizeRepository(repoId: number, category: string): Promise<void> {
  // Implementation
}

// ❌ Bad
async function doStuff(id: any, cat: any): Promise<any> {
  // Implementation
}
```

### React Components

- Use **functional components** with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop typing with TypeScript interfaces

**Example:**
```typescript
// ✅ Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {label}
    </button>
  );
}

// ❌ Bad
export function Button(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### Styling with Tailwind CSS

- Use **Tailwind utility classes** for styling
- Follow mobile-first responsive design
- Use semantic color variables (`bg-primary`, `text-foreground`)
- Extract repeated patterns into components

**Example:**
```tsx
// ✅ Good
<div className="container mx-auto px-4 py-8 md:py-12">
  <h1 className="text-2xl md:text-4xl font-bold text-primary">
    Title
  </h1>
</div>

// ❌ Bad
<div style={{ padding: '32px', maxWidth: '1200px' }}>
  <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
    Title
  </h1>
</div>
```

### Backend (tRPC & Database)

- Define clear **tRPC procedures** with input validation using Zod
- Use **Drizzle ORM** for all database queries
- Keep database queries in `server/db.ts`
- Use transactions for multi-step operations

**Example:**
```typescript
// ✅ Good
import { z } from 'zod';

export const userRouter = router({
  updateProfile: protectedProcedure
    .input(z.object({
      name: z.string().min(1).max(100),
      email: z.string().email(),
    }))
    .mutation(async ({ ctx, input }) => {
      return await updateUserProfile(ctx.user.id, input);
    }),
});
```

## 📝 Commit Message Guidelines

We follow the **Conventional Commits** specification for clear and consistent commit messages.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semicolons, etc.)
- `refactor` - Code refactoring without changing functionality
- `test` - Adding or updating tests
- `chore` - Maintenance tasks, dependency updates

### Examples

```bash
# Feature
feat(github): add OAuth authentication flow

# Bug fix
fix(home): resolve nested anchor tag error in navigation

# Documentation
docs: update README with deployment instructions

# Refactoring
refactor(api): simplify repository fetching logic

# Testing
test(auth): add unit tests for logout functionality
```

### Rules

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Keep subject line under 72 characters
- Reference issues in the footer (e.g., "Closes #123")

## 🔀 Pull Request Process

### Before Submitting

1. ✅ Ensure all tests pass (`pnpm test`)
2. ✅ Run type checking (`pnpm check`)
3. ✅ Format your code (`pnpm format`)
4. ✅ Update documentation if needed
5. ✅ Rebase on latest `main` branch
6. ✅ Write a clear PR description

### PR Title

Follow the same format as commit messages:

```
feat(component): add new feature
fix(page): resolve bug description
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- List key changes
- Include relevant details
- Mention any dependencies

## Testing
- Describe how you tested the changes
- Include test cases if applicable

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows the project's code style
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing tests pass locally

## Related Issues
Closes #issue_number
```

### Review Process

1. A maintainer will review your PR within 2-3 business days
2. Address any requested changes
3. Once approved, a maintainer will merge your PR
4. Your contribution will be credited in the release notes

## 🧪 Testing Guidelines

### Writing Tests

- Write tests for all new features
- Use **Vitest** for unit and integration tests
- Place tests in `server/*.test.ts` files
- Aim for meaningful test coverage

### Test Structure

```typescript
import { describe, expect, it } from "vitest";

describe("Feature Name", () => {
  it("should do something correctly", async () => {
    // Arrange
    const input = { /* test data */ };
    
    // Act
    const result = await functionToTest(input);
    
    // Assert
    expect(result).toEqual(expectedOutput);
  });
  
  it("should handle error cases", async () => {
    // Test error scenarios
  });
});
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

## 📚 Documentation

### Code Documentation

- Add **JSDoc comments** for complex functions
- Document non-obvious logic
- Include examples in documentation

```typescript
/**
 * Categorizes a GitHub repository using PARA method
 * 
 * @param repoId - The unique identifier of the repository
 * @param category - PARA category (project, area, resource, archive)
 * @returns Promise resolving to the updated repository
 * 
 * @example
 * await categorizeRepository(123, 'project');
 */
async function categorizeRepository(repoId: number, category: string) {
  // Implementation
}
```

### README Updates

- Update README.md when adding new features
- Keep installation instructions current
- Document new environment variables
- Update the roadmap section

## 💬 Community

### Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and general discussion
- **Pull Requests**: For code contributions

### Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Detailed steps to reproduce the issue
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Environment**: OS, Node version, browser, etc.
6. **Screenshots**: If applicable

### Suggesting Features

When suggesting features:

1. **Use Case**: Explain why this feature is needed
2. **Proposed Solution**: Describe how it should work
3. **Alternatives**: Mention alternative approaches considered
4. **Additional Context**: Any other relevant information

## 🎯 Areas for Contribution

Looking for ways to contribute? Here are some areas that need help:

### High Priority
- [ ] Complete GitHub OAuth integration
- [ ] Add comprehensive unit tests
- [ ] Improve mobile responsiveness
- [ ] Add accessibility features (ARIA labels, keyboard navigation)

### Medium Priority
- [ ] Build interactive PARA quiz
- [ ] Create downloadable template generator
- [ ] Add video tutorials section
- [ ] Implement search functionality

### Low Priority
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Community examples gallery
- [ ] Blog section for PARA tips

## 📜 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Thank you for taking the time to contribute to the PARA Method Website. Every contribution, no matter how small, helps make this project better for everyone!

---

**Questions?** Feel free to open an issue or reach out to the maintainers.

**Happy Contributing! 🚀**
