# 🚀 Nuxt 3 + Tailwind CSS Admin Dashboard

A modern, responsive admin dashboard built with Nuxt 3, Tailwind CSS, and Headless UI. Perfect for building professional admin interfaces with excellent developer experience.

## ✨ Features

- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **Headless UI** - Unstyled, accessible UI components
- 🎯 **Vue 3 Composition API** - Modern Vue development
- 🔧 **VueUse** - Collection of essential Vue composition utilities
- 🎭 **Vue Transitions** - Smooth animations and transitions
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant components
- 🎪 **Icon System** - Comprehensive icon library
- 🎨 **Custom Scrollbars** - Beautiful styled scrollbars

## 🛠️ Tech Stack

| Technology | Purpose | Why We Use It |
|------------|---------|---------------|
| **Nuxt 3** | Full-stack Vue framework | Server-side rendering, file-based routing, excellent DX |
| **Tailwind CSS** | Utility-first CSS | Rapid UI development, consistent design system |
| **Headless UI** | Unstyled UI components | Accessible components with full design control |
| **VueUse** | Vue composition utilities | Pre-built composables for common functionality |
| **Vue Transitions** | Animation library | Smooth page/component transitions |
| **Nuxt Icon** | Icon system | Easy access to thousands of icons |
| **Tailwind Scrollbar** | Custom scrollbars | Beautiful styled scrollbars |

## 📦 Installed Modules

### Core Dependencies
```json
{
  "nuxt": "^4.0.1",                    // Main framework
  "vue": "^3.5.18",                    // Vue 3
  "vue-router": "^4.5.1"               // Client-side routing
}
```

### UI & Styling
```json
{
  "@nuxtjs/tailwindcss": "^6.14.0",   // Tailwind CSS integration
  "nuxt-headlessui": "^1.2.1",        // Headless UI components
  "@nuxt/icon": "^1.15.0"             // Icon system
}
```

### Utilities & Animations
```json
{
  "@vueuse/nuxt": "^13.6.0",          // Vue composition utilities
  "@morev/vue-transitions": "^3.0.5"   // Smooth transitions
}
```

### Development Dependencies
```json
{
  "tailwind-scrollbar": "^4.0.2"      // Custom scrollbar styles
}
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, pnpm, yarn, or bun

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd nuxt-tailwind-admin-dashboard-ui
```

2. **Install dependencies**
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

3. **Start development server**
```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## 🎨 Theme Configuration

The project includes a comprehensive design system in `tailwind.config.js`:

### Color Palette
```javascript
colors: {
  // Main brand colors
  primary: '#3b82f6',      // Professional blue
  'primary-light': '#60a5fa',
  'primary-dark': '#2563eb',
  
  // UI colors
  secondary: '#64748b',     // Neutral gray
  success: '#22c55e',       // Success green
  warning: '#f59e0b',       // Warning orange
  danger: '#ef4444',        // Error red
  info: '#06b6d4',          // Info cyan
  
  // Background colors
  'bg-light': '#f8fafc',
  'bg-dark': '#1e293b',
  'bg-card': '#ffffff',
  'bg-sidebar': '#1e293b',
}
```

### Typography
- **Primary Font**: Inter - Professional, readable
- **Display Font**: Inter - Consistent branding
- **Monospace**: JetBrains Mono - Code snippets

## 🧩 Module Details

### 1. Tailwind CSS (`@nuxtjs/tailwindcss`)
**Purpose**: Utility-first CSS framework
**Installation**: 
```bash
npm install @nuxtjs/tailwindcss
```
**Configuration**: Automatically scans components for classes
**Usage**: 
```vue
<div class="bg-primary text-white p-4 rounded-lg">
  Professional admin UI
</div>
```

### 2. Headless UI (`nuxt-headlessui`)
**Purpose**: Accessible, unstyled UI components
**Installation**:
```bash
npm install nuxt-headlessui
```
**Configuration**: Prefix set to 'H' for components
**Usage**:
```vue
<HMenu>
  <HMenuButton class="bg-primary text-white px-4 py-2">
    Options
  </HMenuButton>
  <HMenuItems class="bg-white shadow-lg">
    <HMenuItem>Settings</HMenuItem>
  </HMenuItems>
</HMenu>
```

### 3. VueUse (`@vueuse/nuxt`)
**Purpose**: Collection of Vue composition utilities
**Installation**:
```bash
npm install @vueuse/nuxt
```
**Usage Examples**:
```javascript
// Dark mode toggle
const isDark = useDark()

// Local storage
const settings = useLocalStorage('admin-settings', {})

// Network status
const isOnline = useOnline()
```

### 4. Vue Transitions (`@morev/vue-transitions`)
**Purpose**: Smooth page and component transitions
**Installation**:
```bash
npm install @morev/vue-transitions
```
**Usage**:
```vue
<TransitionSlide :duration="300">
  <div v-if="show">Smooth sliding content</div>
</TransitionSlide>
```

### 5. Nuxt Icon (`@nuxt/icon`)
**Purpose**: Access to 100,000+ icons
**Installation**:
```bash
npm install @nuxt/icon
```
**Usage**:
```vue
<Icon name="heroicons:user" />
<Icon name="lucide:settings" class="w-5 h-5" />
```

### 6. Tailwind Scrollbar (`tailwind-scrollbar`)
**Purpose**: Custom styled scrollbars
**Installation**:
```bash
npm install tailwind-scrollbar -D
```
**Usage**:
```vue
<div class="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
  Scrollable content with custom scrollbar
</div>
```

## 📁 Project Structure

```
nuxt-tailwind-admin-dashboard-ui/
├── 📁 app/
│   └── app.vue              # Root application component
├── 📁 components/           # Reusable Vue components
├── 📁 layouts/             # Application layouts
├── 📁 pages/               # File-based routing
├── 📁 plugins/             # Vue plugins
├── 📁 composables/         # Custom composables
├── 📁 utils/               # Utility functions
├── 📁 public/              # Static assets
├── 📄 nuxt.config.ts       # Nuxt configuration
├── 📄 tailwind.config.js   # Tailwind configuration
└── 📄 package.json         # Dependencies
```

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run generate # Generate static site
```

### Environment Setup
1. Configure your IDE with Vue/Nuxt extensions
2. Install ESLint and Prettier for code formatting
3. Set up Git hooks for consistent code quality

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# Preview the build locally
npm run preview
```

The build process will:
- Optimize CSS (purge unused classes)
- Bundle JavaScript efficiently
- Generate static assets
- Create a production-ready application

## 🚀 Deployment

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for platform-specific instructions:

- **Vercel**: Zero-config deployment
- **Netlify**: Static site generation
- **Railway**: Full-stack deployment
- **DigitalOcean**: Container deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

## 🎯 Next Steps

- [ ] Set up authentication system
- [ ] Create reusable admin components
- [ ] Add data visualization charts
- [ ] Implement dark mode toggle
- [ ] Add responsive navigation
- [ ] Set up API integration

**Happy coding! 🚀**
