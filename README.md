# Power Haus Energy

A modern, responsive website for Power Haus Energy Consultation - providing energy audits and passive design consultations for homes in Adelaide Hills, SA.

## 🌟 Features

- **Energy Audit Services** - Comprehensive home energy assessments
- **Passive Design Consultation** - Expert guidance for new builds and renovations
- **Interactive Calculators** - ROI and pricing calculators for potential savings
- **Responsive Design** - Mobile-first, accessible UI built with shadcn/ui
- **Modern Tech Stack** - React 18, TypeScript, Vite, Tailwind CSS
- **Fast Performance** - Optimized build with Vite and modern tooling

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18.3.1 with TypeScript 5.6
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 with Tailwind Typography
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: Wouter (lightweight client-side routing)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion

### Backend
- **Server**: Express.js (serves static files)
- **Runtime**: Node.js

### Developer Experience
- **Package Manager**: pnpm
- **Type Checking**: TypeScript strict mode
- **Code Formatting**: Prettier
- **Monorepo Structure**: Client/Server/Shared separation

## 📦 Project Structure

```
power-haus-energy/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   └── src/
│       ├── assets/        # Local assets (images, fonts)
│       ├── components/
│       │   ├── layout/    # Layout components (Header, Footer)
│       │   ├── features/  # Feature components (Calculators)
│       │   └── ui/        # shadcn/ui components
│       ├── config/        # App configuration
│       ├── contexts/      # React contexts (Theme)
│       ├── hooks/         # Custom React hooks
│       ├── lib/           # Utility functions
│       ├── pages/         # Route pages
│       └── types/         # TypeScript type definitions
├── server/                # Backend server
├── shared/                # Shared code between client/server
├── docs/                  # Documentation
└── patches/               # pnpm patches
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- pnpm 10+ (will be installed automatically via packageManager field)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd power-haus-energy
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production (client + server)
- `pnpm start` - Start production server
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

## ⚙️ Configuration

### Business Information

Update business details in `client/src/config/business.ts`:

```typescript
export const BUSINESS_INFO = {
  name: "Power Haus",
  phone: "(08) 1234 5678",
  email: "info@powerhausenergy.com.au",
  // ... other details
};
```

### Environment Variables

Create a `.env` file in the root directory (see `.env.example` for reference):

```bash
# Optional: Custom app title and logo
VITE_APP_TITLE=Power Haus Energy
```

### Theme

The app uses a light theme by default. To enable theme switching, modify `client/src/App.tsx`:

```typescript
<ThemeProvider
  defaultTheme="light"
  switchable  // Uncomment this line
>
```

## 🎨 Customization

### Adding New Pages

1. Create a page component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in `client/src/config/business.ts`

### Styling

The project uses Tailwind CSS with a custom design system defined in `client/src/index.css`. Modify CSS variables to change the color scheme:

```css
:root {
  --primary: 142 76% 36%;
  --secondary: 142 30% 96%;
  /* ... */
}
```

### UI Components

UI components use shadcn/ui. To add new components:

```bash
npx shadcn@latest add <component-name>
```

## 🚢 Deployment

### Static Deployment (Recommended)

The site can be deployed as a static site to:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

Build command: `pnpm build`  
Output directory: `dist/public`

### With Express Server

If you need the Express server:

1. Build the project:
```bash
pnpm build
```

2. Start the server:
```bash
pnpm start
```

The server will serve static files from the `dist/public` directory.

## 📚 Documentation

Additional documentation can be found in the `docs/` directory:

- `CODE_REVIEW.md` - Code quality review and recommendations
- `UI_CONSISTENCY_REVIEW.md` - UI/UX consistency analysis
- `REPO_STRUCTURE_REVIEW.md` - Repository structure analysis

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm check` and `pnpm format`
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- **Website**: [Power Haus Energy](https://powerhausenergy.com.au) (if deployed)
- **Contact**: info@powerhausenergy.com.au
- **Location**: Adelaide Hills, SA

## 📞 Support

For technical support or questions:
- Open an issue in the repository
- Contact: info@powerhausenergy.com.au

---

Built with ❤️ using React, TypeScript, and modern web technologies.

