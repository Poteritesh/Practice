const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@gmail.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 3,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription:
          "Develop a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-11-12",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Responsiveness",
        taskDescription:
          "Fix navbar layout issues on mobile and tablet screens.",
        taskDate: "2026-11-13",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup React Project",
        taskDescription:
          "Initialize the React project using Vite and configure Tailwind CSS.",
        taskDate: "2026-11-09",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Amit",
    email: "employee2@gmail.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 4,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop REST API",
        taskDescription: "Create REST API endpoints for employee management.",
        taskDate: "2026-11-12",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Configuration",
        taskDescription:
          "Configure MongoDB connection and create employee schema.",
        taskDate: "2026-11-10",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Authentication",
        taskDescription:
          "Implement JWT authentication for protected API routes.",
        taskDate: "2026-11-08",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Password Validation",
        taskDescription:
          "Add password validation and error handling to the login API.",
        taskDate: "2026-11-14",
        category: "Security",
      },
    ],
  },
  {
    id: 3,
    firstName: "Sneha",
    email: "employee3@gmail.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
      total: 3,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard Layout",
        taskDescription:
          "Build an employee dashboard with cards and task statistics.",
        taskDate: "2026-11-12",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Sidebar",
        taskDescription:
          "Develop a reusable sidebar component with navigation links.",
        taskDate: "2026-11-09",
        category: "UI Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add search functionality to filter employee records.",
        taskDate: "2026-11-13",
        category: "Development",
      },
    ],
  },
  {
    id: 4,
    firstName: "Vikram",
    email: "employee4@gmail.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 4,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription:
          "Write unit tests for employee management functionality.",
        taskDate: "2026-11-12",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Login Functionality",
        taskDescription:
          "Test login validation, error messages and successful authentication.",
        taskDate: "2026-11-10",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Cross Browser Testing",
        taskDescription:
          "Verify application compatibility across different browsers.",
        taskDate: "2026-11-08",
        category: "Quality Assurance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix UI Bugs",
        taskDescription:
          "Identify and resolve reported UI issues in the dashboard.",
        taskDate: "2026-11-14",
        category: "Bug Fixing",
      },
    ],
  },
  {
    id: 5,
    firstName: "Priya",
    email: "employee5@gmail.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
      total: 4,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Profile",
        taskDescription:
          "Develop an employee profile page displaying personal and professional details.",
        taskDate: "2026-11-12",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Profile Form",
        taskDescription:
          "Build a reusable employee profile form with input validation.",
        taskDate: "2026-11-09",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Logout",
        taskDescription:
          "Implement logout functionality and clear authentication data.",
        taskDate: "2026-11-13",
        category: "Authentication",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Profile Image Upload",
        taskDescription: "Implement profile image upload with file validation.",
        taskDate: "2026-11-08",
        category: "Backend",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");

  const admin = JSON.parse(localStorage.getItem("admin") || "[]");

  return { employees, admin };
};
