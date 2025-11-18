# UI Consistency Review

Date: November 17, 2025

## Overview
This document outlines UI inconsistencies found across all pages of the Power Haus Energy website and provides recommendations for standardization.

---

## ❌ Critical Inconsistencies

### 1. Hero Section Padding
**Issue**: Inconsistent vertical padding across pages

| Page | Padding Classes | Status |
|------|----------------|--------|
| Home | `py-20 md:py-28` | ✓ Standard |
| About | `py-20 md:py-28` | ✓ Standard |
| Services | `py-20 md:py-28` | ✓ Standard |
| BookConsultation | `py-20 md:py-28` | ✓ Standard |
| **Contact** | `py-20 md:py-32` | ❌ Different |
| **Tips** | `py-16 md:py-24` | ❌ Different |

**Recommendation**: Standardize all hero sections to `py-20 md:py-28`

---

### 2. Hero Title Size
**Issue**: Home page has larger title than other pages

| Page | Title Classes | Status |
|------|--------------|--------|
| **Home** | `text-5xl md:text-6xl lg:text-7xl` | ❌ Different |
| About | `text-4xl md:text-5xl lg:text-6xl` | ✓ Standard |
| Services | `text-4xl md:text-5xl lg:text-6xl` | ✓ Standard |
| Contact | `text-4xl md:text-5xl lg:text-6xl` | ✓ Standard |
| BookConsultation | `text-4xl md:text-5xl lg:text-6xl` | ✓ Standard |
| Tips | `text-4xl md:text-5xl lg:text-6xl` | ✓ Standard |

**Recommendation**: 
- **Option A**: Update Home to match others (`text-4xl md:text-5xl lg:text-6xl`)
- **Option B**: Keep Home unique as landing page, document this as intentional

---

### 3. Hero Text Paragraph Size
**Issue**: Inconsistent paragraph sizing in hero sections

| Page | Paragraph Classes | Status |
|------|------------------|--------|
| **Home** | `text-xl md:text-2xl` | ❌ Larger |
| About | `text-lg` | ✓ Standard |
| Services | `text-lg` | ✓ Standard |
| Contact | `text-xl` | ⚠️ In between |
| BookConsultation | `text-lg md:text-xl` | ⚠️ Responsive |
| Tips | `text-lg md:text-xl` | ⚠️ Responsive |

**Recommendation**: Standardize to `text-lg md:text-xl` for all hero paragraphs

---

### 4. NotFound Page Styling
**Issue**: NotFound page uses completely different styling system

**Problems**:
- Uses hardcoded Tailwind colors (`bg-blue-600`, `text-red-500`) instead of theme colors
- Uses `bg-gradient-to-br from-slate-50 to-slate-100` instead of theme gradients
- Different layout structure (full-screen centered)
- Doesn't include Header/Footer

**Recommendation**: Redesign NotFound page to match site theme:
```tsx
// Should use:
- bg-primary instead of bg-blue-600
- text-destructive instead of text-red-500
- Same gradient pattern: bg-gradient-to-br from-secondary/30 via-background to-accent/20
- Include Header/Footer for consistency
```

---

## ⚠️ Moderate Inconsistencies

### 5. Section Padding Variations
**Issue**: Multiple different padding values for content sections

**Common Patterns Found**:
- `py-16 md:py-24` (most common for content sections)
- `py-20 md:py-28` (used for CTAs and some content)
- `py-20 md:py-32` (Contact form section)
- `py-12` (Services social proof section)

**Recommendation**: Establish clear padding standards:
- **Hero sections**: `py-20 md:py-28`
- **Content sections**: `py-16 md:py-24`
- **CTA sections**: `py-20 md:py-28`
- **Small sections**: `py-12 md:py-16`

---

### 6. Icon Container Sizing
**Issue**: Inconsistent icon container dimensions

**Variations Found**:
- `w-16 h-16` (main service cards)
- `w-14 h-14` (Services social proof)
- `w-12 h-12` (smaller features, contact details)

**Border Radius**:
- `rounded-2xl` (most common for large icons)
- `rounded-xl` (medium icons)
- `rounded-lg` (Tips page)
- `rounded-full` (Services social proof)

**Recommendation**: Standardize based on context:
- **Primary features**: `w-16 h-16 rounded-2xl`
- **Secondary features**: `w-12 h-12 rounded-xl`
- **Small icons/stats**: `w-14 h-14 rounded-full` (for circular stats only)

---

### 7. Card Border Styling
**Issue**: Inconsistent border treatment

**Variations**:
- `border-2` (most service cards)
- Default border (Tips FAQ cards)
- `border-2 border-primary` (Contact free consultation card)

**Recommendation**: Standardize to:
- **Feature/Service cards**: `border-2`
- **Content cards**: `border` (default)
- **Highlighted/CTA cards**: `border-2 border-primary`

---

### 8. CTA Section Presence
**Issue**: Not all pages have consistent CTAs

| Page | CTA Section | Status |
|------|-------------|--------|
| Home | ✓ Present | Consistent |
| About | ❌ Missing | Add CTA |
| Services | ✓ Present | Consistent |
| Contact | ❌ N/A | Not needed |
| BookConsultation | ✓ Present | Consistent |
| Tips | ❌ Missing | Add CTA |

**Recommendation**: Add CTA sections to About and Tips pages with same styling:
```tsx
<section className="py-20 md:py-28 bg-primary text-primary-foreground">
  // Content
</section>
```

---

### 9. Max-Width Container Consistency
**Issue**: Various max-width values used

**Patterns**:
- `max-w-3xl` (smaller centered content)
- `max-w-4xl` (medium content)
- `max-w-5xl` (larger content)
- `max-w-6xl` (widest layouts)

**Missing `mx-auto` on Tips hero**: Tips page hero section uses `max-w-3xl` but doesn't center it with `mx-auto`

**Recommendation**: Tips hero should have `max-w-3xl mx-auto text-center` for consistency

---

## ✓ Good Consistency Found

### 1. Typography
- Font family usage is consistent (`font-sans` on titles)
- Heading hierarchy properly maintained (h1 → h2 → h3)
- `tracking-tight` consistently used on large headings

### 2. Color Usage
- Theme colors properly used (`primary`, `secondary`, `muted-foreground`)
- Background patterns consistent: `bg-gradient-to-br from-secondary/30 via-background to-accent/20`
- Accent usage on alternating sections (`bg-secondary/20`)

### 3. Component Library
- Consistent use of shadcn/ui components
- Card components used uniformly (mostly)
- Button variants properly applied

### 4. Icon Treatment
- Consistent icon library (lucide-react)
- Icons properly sized relative to containers
- Good use of `flex-shrink-0` to prevent icon squashing

### 5. Responsive Design
- Consistent grid patterns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Proper use of responsive utilities
- Mobile-first approach maintained

---

## 📋 Action Items (Priority Order)

### High Priority
1. ✅ **Fix NotFound page** - Completely restyle to match theme
2. ✅ **Standardize hero padding** - Update Contact (py-32→py-28) and Tips (py-24→py-28)
3. ✅ **Fix Tips hero layout** - Add `mx-auto` to center content
4. ✅ **Standardize hero paragraph sizing** - Use `text-lg md:text-xl` consistently

### Medium Priority
5. ✅ **Add CTA sections** - Add to About and Tips pages
6. ✅ **Standardize icon containers** - Apply consistent sizing system
7. ✅ **Standardize card borders** - Apply border-2 to all feature cards consistently

### Low Priority
8. ⚠️ **Document Home page differences** - Decide if larger hero is intentional
9. ⚠️ **Review section padding** - Minor adjustments for perfect consistency

---

## Design System Recommendations

### Create a Standard Hero Component
```tsx
// Reusable hero pattern
<section className="bg-gradient-to-br from-secondary/30 via-background to-accent/20 py-20 md:py-28">
  <div className="container">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </div>
</section>
```

### Standard Section Spacing
```tsx
// Content sections
<section className="py-16 md:py-24">

// Alternating background sections  
<section className="py-16 md:py-24 bg-secondary/20">

// CTA sections
<section className="py-20 md:py-28 bg-primary text-primary-foreground">
```

### Standard Icon Containers
```tsx
// Large features (16x16)
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
  <Icon className="h-8 w-8 text-primary" />
</div>

// Medium features (12x12)
<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
  <Icon className="h-6 w-6 text-primary" />
</div>
```

---

## Summary

**Total Issues Found**: 9
- **Critical**: 4
- **Moderate**: 5
- **Minor**: Multiple variations

**Overall Assessment**: The website has good foundational consistency but needs refinement in specific areas. Most issues are straightforward to fix and involve standardizing spacing, sizing, and ensuring all pages follow the same patterns.

**Estimated Fix Time**: 2-3 hours for all priority fixes


