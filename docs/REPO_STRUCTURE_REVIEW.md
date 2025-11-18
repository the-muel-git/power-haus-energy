# Repository Structure Review - Power Haus Energy

Date: November 18, 2025

## Overview
This document provides a comprehensive review of the repository structure, identifying strengths, issues, and recommended improvements.

---

## Current Structure Analysis

### ✅ Strengths

#### 1. Monorepo Architecture (Good Foundation)
The project uses a monorepo pattern with clear separation:
```
power-haus-energy/
├── client/          # Frontend React app
├── server/          # Backend Express server
├── shared/          # Shared code between client/server
```
**Assessment**: ✅ Good separation of concerns

#### 2. Modern Tech Stack
- **Frontend**: React 18.3.1, Vite 7, TypeScript 5.6
- **UI Library**: shadcn/ui with Radix UI primitives
- **Routing**: Wouter (lightweight)
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm with workspace support
**Assessment**: ✅ Modern, performant, and maintainable

#### 3. Path Aliases Configured
```typescript
"@/*": ["./client/src/*"]
"@shared/*": ["./shared/*"]
"@config/*": ["./client/src/config/*"]
```
**Assessment**: ✅ Good for maintainability

#### 4. Component Organization
- Clear separation between `components/` and `components/ui/`
- UI components (shadcn) isolated in `ui/` subdirectory
- Custom components at top level
**Assessment**: ✅ Following shadcn conventions

---

## ⚠️ Issues & Concerns

### 1. 🔴 CRITICAL: Duplicate Constants
**Problem**: Constants are duplicated across multiple files

**Current State**:
- `client/src/const.ts` - Contains auth/OAuth-related constants
- `shared/const.ts` - Contains `COOKIE_NAME` and `ONE_YEAR_MS`
- `client/src/config/business.ts` - Contains business information

**Issues**:
1. `client/src/const.ts` imports from `shared/const.ts` but adds unrelated OAuth config
2. The OAuth constants in `client/src/const.ts` are likely leftover from a template
3. Unclear purpose distinction between `const.ts` and `config/business.ts`

**Recommendation**:
```typescript
// Option A: Consolidate into config/
client/src/config/
  ├── business.ts          // Business info
  ├── app.ts              // App-level config
  └── constants.ts        // Shared constants

// Option B: Keep minimal structure
shared/
  └── constants.ts        // Only truly shared constants

client/src/config/
  ├── business.ts         // Business info
  └── index.ts           // Re-export everything
```

---

### 2. 🟡 MODERATE: Unused OAuth Configuration
**Problem**: Template code still present

```typescript:8:23:client/src/const.ts
export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO =
  import.meta.env.VITE_APP_LOGO ||
  "https://placehold.co/128x128/E1E7EF/1F2937?text=App";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
```

**Evidence**:
- No OAuth references in any components
- No login/auth pages
- OAuth env vars not used
- Public marketing website doesn't need auth

**Recommendation**: Remove OAuth-related code entirely

---

### 3. 🟡 MODERATE: Minimal Server Implementation
**Current State**:
```
server/
  └── index.ts    (single file)
```

**Issues**:
- Serves static files only
- No API endpoints
- No business logic
- Essentially a static file server

**Questions**:
1. Is the server needed at all?
2. Could this be deployed to Vercel/Netlify as static site?
3. Are there plans for backend functionality?

**Recommendations**:
- **If no backend needed**: Deploy as static site (Vercel, Netlify, GitHub Pages)
- **If backend planned**: Create proper structure:
  ```
  server/
  ├── index.ts
  ├── routes/
  ├── controllers/
  ├── middleware/
  └── utils/
  ```

---

### 4. 🟢 MINOR: Missing Directories
**Standard React/Vite Structure Missing**:
- `client/src/assets/` - For local images, fonts, etc.
- `client/src/types/` - For TypeScript type definitions
- `client/src/utils/` - General utility functions (currently in `lib/`)
- `client/src/features/` - Feature-based organization (optional)

**Current**:
- `lib/utils.ts` - Good for Tailwind utils, but consider renaming to `styles/` or `utils/`

---

### 5. 🟢 MINOR: Component Organization Could Be Improved
**Current**:
```
components/
├── ErrorBoundary.tsx
├── Footer.tsx
├── Header.tsx
├── PricingCalculator.tsx
├── ROICalculator.tsx
└── ui/
```

**Issues**:
- Mix of layout components (Header, Footer) and feature components (Calculators)
- No subcategorization

**Recommended Structure**:
```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ErrorBoundary.tsx
├── features/
│   ├── PricingCalculator.tsx
│   └── ROICalculator.tsx
└── ui/
    └── (shadcn components)
```

---

### 6. 🟢 MINOR: Documentation Files at Root
**Current Root Files**:
```
├── CHANGES.md
├── CODE_REVIEW.md
├── UI_CONSISTENCY_REVIEW.md
├── UI_CONSISTENCY_FIXES_SUMMARY.md
├── todo.md
```

**Recommendation**: Consider organizing docs:
```
docs/
├── CHANGES.md
├── CODE_REVIEW.md
├── UI_CONSISTENCY_REVIEW.md
└── UI_CONSISTENCY_FIXES_SUMMARY.md

# Keep at root:
├── README.md
├── CHANGELOG.md (instead of CHANGES.md)
└── TODO.md (instead of todo.md, or use GitHub Issues)
```

---

## 📋 Recommended Action Plan

### Priority 1: Critical Issues (Do First)

#### 1.1 Clean Up Constants ✅
```bash
# Decision needed:
# A) Remove OAuth code and consolidate constants
# B) Keep structure but remove unused OAuth
```

**Recommended Approach**:
```typescript
// Delete: client/src/const.ts

// Keep: shared/constants.ts (if truly shared with server)
export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// Keep: client/src/config/business.ts (already good)

// Add: client/src/config/index.ts
export * from './business';
```

#### 1.2 Update Imports
Update any files importing from `client/src/const.ts` to import from:
- `@config/business` for business info
- `@shared/constants` for shared constants (if needed)

---

### Priority 2: Moderate Issues (Do Soon)

#### 2.1 Reorganize Components
```bash
mkdir -p client/src/components/layout
mkdir -p client/src/components/features

# Move files
mv client/src/components/{Header,Footer,ErrorBoundary}.tsx client/src/components/layout/
mv client/src/components/{PricingCalculator,ROICalculator}.tsx client/src/components/features/
```

#### 2.2 Add Standard Directories
```bash
mkdir -p client/src/types
mkdir -p client/src/assets
```

#### 2.3 Decide on Server Strategy
- [ ] Remove server if not needed (deploy static)
- [ ] Or expand server structure if backend planned

---

### Priority 3: Nice to Have (Optional)

#### 3.1 Organize Documentation
```bash
mkdir docs
mv {CHANGES,CODE_REVIEW,UI_*}.md docs/
```

#### 3.2 Improve Hooks Organization
Consider grouping hooks by purpose:
```
hooks/
├── composition/
│   └── useComposition.ts
├── ui/
│   └── useMobile.tsx
└── utils/
    └── usePersistFn.ts
```

#### 3.3 Add Missing Config Files
Consider adding:
- `.env.example` - Example environment variables
- `.prettierrc` - Prettier config (currently relying on defaults)
- `.eslintrc` - ESLint config for better code quality

---

## ✅ What's Already Good (Don't Change)

1. **Path Aliases** - Well configured in both vite.config and tsconfig
2. **UI Components** - shadcn/ui properly isolated in `ui/` subdirectory
3. **Pages Structure** - Clear, flat structure with all routes
4. **TypeScript Config** - Strict mode enabled, good settings
5. **Package Manager** - pnpm with proper configuration
6. **Build Setup** - Vite configured correctly for client build
7. **Theme System** - ThemeContext properly implemented
8. **Business Config** - `config/business.ts` is well organized

---

## Proposed Final Structure

```
power-haus-energy/
├── client/
│   ├── public/
│   │   ├── logo.png
│   │   └── logo-icon.png
│   ├── src/
│   │   ├── assets/              # 🆕 Local assets
│   │   ├── components/
│   │   │   ├── layout/          # 🆕 Layout components
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── ErrorBoundary.tsx
│   │   │   ├── features/        # 🆕 Feature components
│   │   │   │   ├── PricingCalculator.tsx
│   │   │   │   └── ROICalculator.tsx
│   │   │   └── ui/              # ✅ shadcn components
│   │   ├── config/              # ✅ Configuration
│   │   │   ├── business.ts
│   │   │   └── index.ts         # 🆕 Re-exports
│   │   ├── contexts/            # ✅ React contexts
│   │   ├── hooks/               # ✅ Custom hooks
│   │   ├── lib/                 # ✅ Utilities
│   │   ├── pages/               # ✅ Route pages
│   │   ├── types/               # 🆕 Type definitions
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/                      # ⚠️ Evaluate if needed
│   └── index.ts
├── shared/                      # ✅ Shared code
│   └── constants.ts             # 🔄 Renamed from const.ts
├── docs/                        # 🆕 Documentation
│   ├── CODE_REVIEW.md
│   ├── UI_CONSISTENCY_REVIEW.md
│   └── UI_CONSISTENCY_FIXES_SUMMARY.md
├── patches/                     # ✅ pnpm patches
├── .env.example                 # 🆕 Environment template
├── README.md                    # 🆕 Project documentation
├── CHANGELOG.md                 # 🔄 Renamed from CHANGES.md
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── vite.config.ts
```

**Legend**:
- ✅ Already good
- 🆕 New addition
- 🔄 Renamed/modified
- ⚠️ Needs evaluation

---

## Summary

### Overall Assessment: 7/10

**Strengths**:
- Modern tech stack
- Clean page structure
- Good path aliases
- Proper TypeScript configuration
- Well-organized UI components

**Critical Issues**:
- Unused OAuth template code
- Duplicate/unclear constants organization
- Flat component structure needs subcategorization

**Moderate Issues**:
- Minimal server implementation (may not be needed)
- Missing standard directories
- Documentation at root level

### Immediate Actions Recommended:

1. **Clean up `client/src/const.ts`** - Remove OAuth code
2. **Reorganize components** - Add layout/ and features/ subdirectories
3. **Decide on server** - Keep or remove?
4. **Add README.md** - Document the project setup

### Time Estimate:
- Priority 1 fixes: 1-2 hours
- Priority 2 fixes: 2-3 hours
- Priority 3 improvements: 1-2 hours
- **Total**: 4-7 hours for complete restructuring

The structure is functional and follows good practices, but could be improved for better maintainability and clarity as the project grows.

