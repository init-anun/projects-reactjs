# React Projects Hub 🚀

Welcome to the **React Projects Hub**! This repository is a curated, ever-growing collection of interactive, clean, and modern React applications. It serves as a visual playground to showcase React state management, hooks, components, and responsive design.

As the number of projects in this repository continues to grow, an interactive **Homepage Hub** dashboard serves as the central control panel, allowing you to seamlessly navigate and launch each project.

🔗 **Live Demo:** SOON 

---

## 📂 Project Architecture

The codebase is organized with a clean, modular structure. Each project is fully self-contained within its own directory inside `src/projects/`:

```text
reactminiprojects/
├── public/                  # Static assets
└── src/
    ├── App.js               # Main entry wrapper (switches between Homepage and apps)
    ├── App.css              # Global styling & layout setup
    ├── index.js             # React application entry point
    └── projects/            # All React projects live here
        ├── components/      # Shared reusable UI components (Title, Button, Alert, Popup)
        ├── 00-homepage/     # Project hub dashboard & navigator
        ├── 01-e-signature-app/
        ├── 02-randomize-colors/
        ├── 03-like-my-photo/
        ├── 04-testimonials/
        ├── 05-alerts-app/
        ├── 06-temperature-controller-app/
        ├── 07-light-and-dark-mode-app/
        ├── 08-slide-to-unlock-app/
        ├── 09-sliderToGrow/
        ├── 10-hiidden-search-bar/
        └── 11-magic-popup-app/
```

---

## 🚀 How to Run & Develop Locally

Run the development environment locally in just a few steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/anunn-anunn/reactminiprojects.git
   cd reactminiprojects
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

---

## 🎨 Current Projects Showcase

Here is a summary of the interactive projects built so far:

| # | Project | Description & Key React Features |
|:---:|---|---|
| **00** | **Homepage Hub** | The central dashboard that lists and mounts selected projects on-demand. |
| **01** | **E-Signature App** | Form states and text input handling to preview dynamic digital signatures. |
| **02** | **Randomize Colors** | Direct styling, random hex code generators, and click event handlers. |
| **03** | **Like My Photo** | Double-click gestures, dynamic heart icons, and reactive like counter increments. |
| **04** | **Testimonials App** | Tab-based filtering, content navigation, and handling mock testimonial data. |
| **05** | **Alerts App** | Temporary alerts with auto-close timers, success/danger theme variations. |
| **06** | **Temperature Controller** | Numerical state tracking with color shifting (warm to cool) based on values. |
| **07** | **Light & Dark Mode** | Dynamic styling and page themes switching via global class name toggles. |
| **08** | **Slide to Unlock** | Lock screen simulator with interactive range slider and unlock detection hooks. |
| **09** | **Slide to Grow** | Custom font-sizing tool powered by reactive slider range values. |
| **10** | **Hidden Search Bar** | Sleek search inputs expanding on click/focus and collapsing on blur. |
| **11** | **Magic Popup App** | Triggerable modal overlay dialogs with state-controlled open/close events. |

---

## ➕ Scaling up: How to Add a New Project

As the repository expands, follow these steps to add a new project to the ecosystem:

### 1. Create a New Folder
Create a new directory under `src/projects/` named with the next incremental index (e.g., `12-my-new-app/`).
```bash
mkdir src/projects/12-my-new-app
```

### 2. Implement Your Component
Build your React application components. Ensure the main component uses a default export:
```jsx
// src/projects/12-my-new-app/MyNewApp.jsx
import React from 'react';
import Title from '../components/Title';

export default function MyNewApp() {
  return (
    <div className="container text-center">
      <Title text="My New App" />
      <p>This is a brand new project details page.</p>
    </div>
  );
}
```

### 3. Register in the Homepage Hub
To make it selectable on the dashboard, register it in `src/projects/00-homepage/Homepage.jsx`:
- **Import** your component:
  ```javascript
  import MyNewApp from '../12-my-new-app/MyNewApp';
  ```
- **Add** it to the `apps` array:
  ```javascript
  const apps = [
    // ... existing projects
    { name: 'My New App', component: MyNewApp }
  ];
  ```

### 4. (Optional) Run Directly During Development
To focus only on your new component without going through the Hub selection, import and mount it directly in `src/App.js`:
```javascript
import MyNewApp from './projects/12-my-new-app/MyNewApp';

function App() {
  return (
    <div className="App">
      <MyNewApp />
    </div>
  );
}
```

---

## 🤝 Coding Guidelines & Reusability
- **Shared UI**: Utilize existing custom components under `src/projects/components/` (like `Title.jsx`, `Button.jsx`, `Popup.jsx`, and `Alert.jsx`) to maintain a clean codebase.
- **Responsive Styling**: Use Bootstrap utility classes alongside encapsulated CSS/Sass for clean, modern visual styles.
- **State isolation**: Ensure each application manages its state completely internally so that mounting and unmounting through the Hub works flawlessly.

