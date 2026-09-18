# CRM Phase 2: Premium UI & Production Backend - Task Distribution

Below is the structured task distribution for the final 30% of the CRM project. The remaining work focuses on elevating the UI to a premium, fully responsive standard and hardening the backend for production. 

The work has been divided into distinct, non-overlapping modules so all teams can work simultaneously without merge conflicts.

---

## 🛠️ Backend Development Team

### 1. Notifications & Advanced Data Architecture
**Assignee:** Supriya (Solo)
**Tasks:**
- **Real-Time Engine:** Integrate `Socket.io` to establish real-time bi-directional communication between the server and the React frontend.
- **Notification API:** Build the logic to trigger real-time notifications for events (e.g., Lead assigned, Task priority updated, Status changed).
- **Advanced Querying:** Refactor existing GET APIs (`/api/leads`, `/api/tasks`, `/api/users`) to support dynamic searching, sorting by multiple columns, and limit/offset pagination.

### 2. Cloud Integrations & Security Hardening
**Assignees:** Tanmay & Vaibhav
**Tasks:**
- **Cloudinary Integration:** Implement file upload APIs using `multer` and Cloudinary (or AWS S3) for User Profile pictures and Client Documents.
- **Security Headers:** Integrate `helmet.js` to secure Express HTTP headers.
- **Rate Limiting:** Implement `express-rate-limit` on authentication endpoints to prevent brute-force attacks.
- **CORS Configuration:** Strictly configure CORS policies to only allow requests from the frontend domain.

---

## 🎨 Frontend Development Team

### 3. State Management, Forms & Real-Time UI
**Assignees:** Aditee & Palak
**Tasks:**
- **Notification Center:** Build a real-time notification dropdown in the Navbar that listens to `Socket.io` events and updates the unread badge count.
- **Advanced Form Validation:** Replace basic alerts with inline form validations (red borders, localized error messages under inputs).
- **Toast Notifications:** Implement a global Toast notification system (e.g., `react-toastify` or `react-hot-toast`) for success/error messages across the app.
- **File Upload UI:** Build drag-and-drop file upload components for the Profile Settings and Client details page.

### 4. Premium Aesthetics & Micro-Animations
**Assignees:** Priyanka & Pallavi
**Tasks:**
- **Modern Theme System:** Upgrade the current CSS to include Glassmorphism effects (backdrop-filter), modern gradients, and soft layered box-shadows.
- **Skeleton Loading:** Replace generic "Loading..." text with animated Skeleton loaders for tables, dashboards, and profile cards.
- **Micro-Interactions:** Add smooth hover transitions for buttons, sidebar links, and table rows.
- **Modal Animations:** Implement fade-in and slide-up CSS animations for all dialogs and popups.

### 5. 100% Mobile Responsiveness & Layout Refactoring
**Assignees:** Akshada & Dhanshri
**Tasks:**
- **Mobile Sidebar:** Convert the static Sidebar into a collapsible Hamburger menu for mobile and tablet views.
- **Responsive Tables:** Refactor large data tables (`Leads`, `Tasks`, `Clients`) to convert into scrollable containers or stacked cards on screens smaller than 768px.
- **Grid Layouts:** Ensure the Dashboard Analytics cards and Kanban Pipeline boards stack vertically and scale properly on mobile devices.
- **Touch Targets:** Increase padding and touch areas for buttons and inputs to improve mobile usability.

---

## 📌 Development Guidelines for the Team
- **Branching Strategy:** Each team must create a new branch from `dev` (e.g., `feature/mobile-responsiveness` or `feature/socket-integration`).
- **Do not modify `schema.prisma`** without consulting the Backend team first.
- **Pushing Code:** Open a Pull Request (PR) against `dev` once the module is tested locally. Do not push directly to `dev`.
