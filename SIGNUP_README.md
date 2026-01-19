# Next.js Treazure Yaad - Sign Up Implementation

## What was created:

### 1. Sign-Up Page (`/sign-up`)
- **File**: `marketplace/app/sign-up/page.tsx`
- **Route**: `http://localhost:3000/sign-up`
- **Features**:
  - Dark themed page with purple outline card
  - Centered layout
  - Form fields: Name, Email, Password, Repeat Password
  - Client-side validation (passwords match, min 8 characters)
  - Submits to `/api/signup`
  - Redirects to home on success

### 2. API Route (`/api/signup`)
- **File**: `marketplace/app/api/signup/route.ts`
- **Route**: `http://localhost:3000/api/signup`
- **Method**: POST
- **Features**:
  - Accepts: name, email, password
  - Console logs all signup data
  - Returns: "User created successfully!"
  - Validates required fields

### 3. Navbar on Home Page
- **File**: `marketplace/app/page.tsx`
- **Features**:
  - Fixed navbar at top
  - "Sign Up" button/link
  - Routes to `/sign-up` when clicked
  - Purple/blue gradient styling
  - Responsive design

## To test:

1. Install Node.js from https://nodejs.org/
2. Run these commands:
   ```bash
   cd marketplace
   npm install
   npm run dev
   ```
3. Open http://localhost:3000
4. Click "Sign Up" in navbar
5. Fill out form and click "Sign Up"
6. Check console for logged data
7. Get success alert and redirect to home

## File Structure:
```
marketplace/
├── app/
│   ├── page.tsx (home page with navbar)
│   ├── sign-up/
│   │   └── page.tsx (sign-up page)
│   └── api/
│       └── signup/
│           └── route.ts (API endpoint)
├── components/
├── data/
└── package.json
```

## The flow:
1. User visits home page → Sees navbar with "Sign Up" button
2. Clicks "Sign Up" → Routes to `/sign-up`
3. Fills form → Submits data
4. POST request → `/api/signup`
5. API logs data → Returns success
6. User gets alert → Redirects to home

Everything is ready to test once Node.js is installed!
