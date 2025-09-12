# 🎨 CPD Frontend (FE)

The **frontend application** for the CPD Healthcare Platform, providing role-based interfaces for **Patients, Doctors, Clinics, Labs, and Admins**.  
Built with **React + TypeScript**, it offers a responsive and accessible UI for managing healthcare workflows.

---

## ✨ Features (Frontend Scope)

- 🧑‍⚕️ **Patient App**
  - Search & book appointments with doctors/clinics
  - Manage upcoming, past, and canceled bookings
  - Access prescriptions, medical history, and lab reports
  - AI-powered symptom checker *(optional)*

- 👨‍⚕️ **Doctor App**
  - Calendar-based appointment management
  - View & update patient records
  - Review and approve AI suggestions
  - Manage clinic availability and profile

- 🏥 **Clinic Admin App**
  - Manage doctors and schedules
  - Oversee appointments and emergencies
  - Clinic profile, services, and staff management

- 🛡️ **System Admin Panel**
  - User and role management
  - System monitoring and usage analytics
  - Compliance and reporting tools

---

## 🛠️ Tech Stack

- **Framework:** React + TypeScript  
- **UI:** Tailwind CSS, MUI (Material UI)  
- **State Management:** Redux Toolkit / Context API  
- **Routing:** React Router  
- **Forms & Validation:** Formik + Yup  
- **API Handling:** Axios / Fetch  
- **Build Tooling:** Vite / Webpack  
- **Testing:** Jest, React Testing Library  
- **Deployment:** AWS Amplify / S3 + CloudFront / Vercel  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-org/cpd-frontend.git
cd cpd-frontend
2. Install dependencies
bash
Copy code
npm install
3. Setup environment variables
Create a .env file in the root directory:

env
Copy code
VITE_API_BASE_URL=http://localhost:5000/api
VITE_ENABLE_AI=true
(Optional) Add more configs such as analytics keys or feature flags.

4. Run the development server
bash
Copy code
npm run dev
The app will be available at:
👉 http://localhost:5173

5. Build for production
bash
Copy code
npm run build
npm run preview
🧪 Testing
Run unit and integration tests:

bash
Copy code
npm test
📖 Documentation
📄 Product Details – Full feature breakdown

📘 API Documentation – Swagger/OpenAPI from backend

🎨 Design System – UI/UX guidelines and components

📄 Author : Akshay Mishra