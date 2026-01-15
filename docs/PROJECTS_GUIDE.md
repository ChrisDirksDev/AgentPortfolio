# Projects System Guide

## 📦 Overview

The portfolio uses a dynamic project loading system with a reusable `ProjectCard` component and JSON-based data storage.

## 🗂️ File Structure

```
public/
  └── data/
      └── projects.json        ← Project data source
components/
  ├── ProjectCard.tsx          ← Reusable card component
  └── sections/
      └── Projects.tsx         ← Main projects section
```

## 📄 projects.json Structure

Located at: `public/data/projects.json`

### Full Schema

```json
{
  "projects": [
    {
      "id": 1,                           // Unique identifier
      "title": "E-Commerce Platform",    // Project name
      "description": "Full description", // Brief overview
      "image": "/projects/ecommerce.jpg",// Image path
      "technologies": [                  // Tech stack array
        "Next.js",
        "TypeScript",
        "Stripe"
      ],
      "github": "https://github.com/...",// GitHub repo URL
      "demo": "https://demo.vercel.app", // Live demo URL
      "featured": true                   // Show by default?
    }
  ]
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | number | ✅ Yes | Unique identifier for the project |
| `title` | string | ✅ Yes | Project name (shown as heading) |
| `description` | string | ✅ Yes | Brief description (3 lines max) |
| `image` | string | ✅ Yes | Path to project image |
| `technologies` | array | ✅ Yes | List of technologies used |
| `github` | string | ✅ Yes | GitHub repository URL |
| `demo` | string | ✅ Yes | Live demo URL |
| `featured` | boolean | ✅ Yes | Show in default view (true/false) |

## 🎨 ProjectCard Component

Located at: `components/ProjectCard.tsx`

### Props Interface

```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  github: string;
  index: number;
}
```

### Features

✅ **Responsive Design** - Works on all screen sizes  
✅ **Hover Effects** - Smooth lift animation  
✅ **Image Support** - Ready for Next.js Image component  
✅ **Tech Tags** - Auto-generated from array  
✅ **Action Buttons** - GitHub and Live Demo links  
✅ **Staggered Animation** - Delays based on index  

### Usage Example

```tsx
import ProjectCard from "@/components/ProjectCard";

<ProjectCard
  title="My Project"
  description="Project description here"
  image="/projects/myproject.jpg"
  technologies={["React", "Node.js"]}
  demo="https://demo.com"
  github="https://github.com/username/repo"
  index={0}
/>
```

## 📝 How to Add Your Projects

### Step 1: Edit projects.json

Open `public/data/projects.json` and add your project:

```json
{
  "projects": [
    {
      "id": 7,
      "title": "Your New Project",
      "description": "An amazing project that does incredible things with modern web technologies.",
      "image": "/projects/your-project.jpg",
      "technologies": ["React", "TypeScript", "Node.js"],
      "github": "https://github.com/yourusername/your-project",
      "demo": "https://your-project.vercel.app",
      "featured": true
    }
  ]
}
```

### Step 2: Add Project Image

1. Create folder: `public/projects/` (if it doesn't exist)
2. Add your image: `public/projects/your-project.jpg`
3. Recommended size: **1200x630px** (2:1 aspect ratio)
4. Format: **JPG** or **PNG**

### Step 3: Enable Image Component (Optional)

In `components/ProjectCard.tsx`, uncomment the Image component:

```tsx
{/* Uncomment when you have actual images */}
<Image
  src={image}
  alt={title}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## 🎯 Featured vs All Projects

### Featured Projects
- Set `"featured": true` in JSON
- Shown by default when page loads
- Typically 3-4 best projects

### All Projects
- Click "Show All Projects" button to reveal
- Shows ALL projects in the JSON file
- Button toggles between views

### Example

```json
{
  "id": 1,
  "title": "Best Project",
  "featured": true    // ← Shows by default
},
{
  "id": 2,
  "title": "Other Project",
  "featured": false   // ← Only shows after "Show All"
}
```

## 🔄 Dynamic Loading

The Projects component automatically:

1. **Fetches** data from `/public/data/projects.json`
2. **Displays** loading skeleton while fetching
3. **Filters** by featured flag
4. **Renders** using ProjectCard component
5. **Animates** with staggered entrance

### Loading States

```tsx
// Shows while loading
<div className="animate-pulse bg-gray-300 h-48" />

// Shows after load
<ProjectCard {...project} />
```

## 🎨 Customization

### Change Card Colors

In `ProjectCard.tsx`, modify Tailwind classes:

```tsx
// Background
className="bg-gray-50 dark:bg-gray-800"  // ← Change colors

// Tech tags
className="bg-blue-100 dark:bg-blue-900" // ← Change tag colors
```

### Change Animation Timing

```tsx
// Delay between cards
transition={{ duration: 0.6, delay: index * 0.1 }}
//                                          ↑ Change multiplier

// Hover lift amount
whileHover={{ y: -10 }}
//                ↑ Change lift distance
```

### Modify Tech Tag Styling

```tsx
<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
  {tech}
</span>
```

## 🚀 Advanced Usage

### Custom Filtering

Add custom filters in `Projects.tsx`:

```tsx
// Filter by technology
const reactProjects = projects.filter(p => 
  p.technologies.includes("React")
);

// Filter by date (if you add a date field)
const recentProjects = projects
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);
```

### Add More Fields

Extend the interface and JSON:

```typescript
interface Project {
  // ... existing fields
  date: string;        // "2024-01"
  category: string;    // "Web App"
  client?: string;     // Optional client name
  duration?: string;   // "3 months"
}
```

### Create Project Categories

```tsx
const categories = ["Web Apps", "Mobile", "AI/ML"];

{categories.map(cat => (
  <button onClick={() => filterByCategory(cat)}>
    {cat}
  </button>
))}
```

## 📋 Quick Checklist

- [ ] Edit `public/data/projects.json`
- [ ] Add images to `public/projects/`
- [ ] Set `featured: true` for main projects
- [ ] Update GitHub URLs
- [ ] Update demo URLs
- [ ] Test responsive layout
- [ ] Enable Image component (optional)

## 🔗 Related Files

- `components/ProjectCard.tsx` - Card component
- `components/sections/Projects.tsx` - Main section
- `public/data/projects.json` - Data source
- `app/globals.css` - Global styles

## 💡 Tips

1. **Keep descriptions concise** - Max 3 lines displayed
2. **Use consistent image sizes** - 1200x630px recommended
3. **Feature your best work** - Only 3-4 featured projects
4. **Update regularly** - Add new projects as you build
5. **Test links** - Ensure GitHub and demo links work

---

Need help? Check `FEATURES.md` for more documentation!


