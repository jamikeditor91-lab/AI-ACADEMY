# AI Academy - Detailed Setup Guide

This guide will walk you through setting up and running the AI Academy application on your local machine.

## Prerequisites

Before you begin, you'll need to install Node.js and npm (Node Package Manager).

### Step 1: Install Node.js and npm

#### For Windows:

1. **Download Node.js**:
   - Visit https://nodejs.org/
   - Download the LTS (Long Term Support) version (recommended)
   - The installer includes npm automatically

2. **Run the Installer**:
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - Accept the license agreement
   - Keep the default installation path
   - Make sure "Add to PATH" is checked
   - Click "Install"

3. **Verify Installation**:
   - Open Command Prompt (search for "cmd" in Start menu)
   - Type: `node --version`
   - Type: `npm --version`
   - You should see version numbers for both

#### For macOS:

**Option 1: Using Official Installer**
1. Visit https://nodejs.org/
2. Download the LTS version for macOS
3. Open the downloaded `.pkg` file
4. Follow the installation wizard
5. Verify in Terminal:
   ```bash
   node --version
   npm --version
   ```

**Option 2: Using Homebrew (Recommended)**
1. Open Terminal
2. Install Homebrew if you don't have it:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Install Node.js:
   ```bash
   brew install node
   ```
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

#### For Linux (Ubuntu/Debian):

1. **Open Terminal**

2. **Update package index**:
   ```bash
   sudo apt update
   ```

3. **Install Node.js and npm**:
   ```bash
   sudo apt install nodejs npm
   ```

4. **Verify installation**:
   ```bash
   node --version
   npm --version
   ```

**Alternative: Using NodeSource (for latest version)**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## Step 2: Navigate to the Project Directory

### Windows (Command Prompt or PowerShell):
```cmd
cd "C:\Users\YourUsername\path\to\ai-academy"
```

Or if you're already in the parent directory:
```cmd
cd ai-academy
```

### macOS/Linux (Terminal):
```bash
cd /path/to/ai-academy
```

Or if you're already in the parent directory:
```bash
cd ai-academy
```

**Tip**: You can drag and drop the folder into Terminal/Command Prompt to auto-fill the path!

---

## Step 3: Install Project Dependencies

Once you're in the `ai-academy` directory, install all required packages:

```bash
npm install
```

**What this does**:
- Reads the `package.json` file
- Downloads all dependencies (Next.js, React, Tailwind CSS, etc.)
- Creates a `node_modules` folder with all packages
- Creates a `package-lock.json` file to lock dependency versions

**Expected output**:
```
added 324 packages, and audited 325 packages in 45s

128 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

**This may take 2-5 minutes depending on your internet speed.**

---

## Step 4: Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

**What this does**:
- Compiles the TypeScript code
- Starts the Next.js development server
- Enables hot-reloading (automatic refresh on code changes)
- Makes the app available at http://localhost:3000

**Expected output**:
```
> ai-academy@0.1.0 dev
> next dev

  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 3.2s
```

**Keep this terminal window open!** The server needs to keep running.

---

## Step 5: Open the Application in Your Browser

1. **Open your web browser** (Chrome, Firefox, Safari, Edge, etc.)

2. **Navigate to**:
   ```
   http://localhost:3000
   ```

3. **You should see the AI Academy home page!**

---

## Step 6: Explore the Application

### First-Time User Experience:

1. **Home Page**:
   - You'll start as a "Beginner" with 0 XP
   - See your streak (0 days initially)
   - View available lessons (first lesson unlocked)
   - Check out the daily challenge
   - Browse trending AI effects

2. **Start Your First Lesson**:
   - Click on "Remove Background from Photos"
   - The tutorial overlay will guide you through the AI tool
   - Upload an image using drag-and-drop or click to browse
   - Click "Remove Background" to process the image
   - Download your result

3. **Complete the Lesson**:
   - Click "Complete Lesson" button
   - Earn 100 XP
   - Unlock the next lesson
   - Possibly earn your first badge!

4. **Track Your Progress**:
   - Return to home page
   - See your updated XP
   - View newly unlocked lessons
   - Complete daily challenge for bonus XP

---

## Troubleshooting

### Issue: "npm: command not found"
**Solution**: Node.js/npm is not installed or not in PATH
- Reinstall Node.js
- Make sure to check "Add to PATH" during installation
- Restart your terminal/command prompt after installation

### Issue: "Port 3000 is already in use"
**Solution**: Another application is using port 3000
- Stop the other application
- Or run on a different port:
  ```bash
  npm run dev -- -p 3001
  ```
  Then visit http://localhost:3001

### Issue: "Module not found" errors
**Solution**: Dependencies not installed properly
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors
**Solution**: Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

### Issue: Slow performance
**Solution**: 
- Close other applications
- Clear browser cache
- Restart the development server

---

## Building for Production

When you're ready to deploy or test the production build:

### Step 1: Build the Application
```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Step 2: Start Production Server
```bash
npm start
```

The production server will run at http://localhost:3000

---

## Deployment Options

### Option 1: Deploy to Vercel (Easiest)

1. **Create a GitHub account** (if you don't have one):
   - Visit https://github.com
   - Sign up for free

2. **Create a new repository**:
   - Click "New repository"
   - Name it "ai-academy"
   - Make it public or private
   - Don't initialize with README (we already have one)

3. **Push your code to GitHub**:
   ```bash
   cd ai-academy
   git init
   git add .
   git commit -m "Initial commit: AI Academy application"
   git branch -M main
   git remote add origin https://github.com/yourusername/ai-academy.git
   git push -u origin main
   ```

4. **Deploy to Vercel**:
   - Visit https://vercel.com
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your `ai-academy` repository
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app is live! 🎉

**You'll get a URL like**: `https://ai-academy-xyz.vercel.app`

### Option 2: Deploy to Netlify

1. **Push code to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Visit https://netlify.com
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

### Option 3: Deploy to Railway

1. **Visit** https://railway.app
2. **Sign up** with GitHub
3. **Click** "New Project" → "Deploy from GitHub repo"
4. **Select** your ai-academy repository
5. **Railway auto-detects** Next.js and deploys automatically

---

## Development Tips

### Hot Reloading
- Any changes you make to the code will automatically refresh in the browser
- No need to restart the server for most changes

### Viewing Console Logs
- Open browser DevTools (F12 or Right-click → Inspect)
- Go to "Console" tab to see logs and errors

### Editing the Application

**To add a new lesson**:
- Edit `data/lessons.ts`
- Add your lesson object to the `LESSONS` array

**To change colors/theme**:
- Edit `tailwind.config.js`
- Modify the `colors` section

**To add translations**:
- Edit `lib/i18n.ts`
- Add translations for your language

### Useful Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production server
npm run lint         # Check code for errors
```

---

## System Requirements

**Minimum**:
- Node.js 18.0 or higher
- 4 GB RAM
- 500 MB free disk space
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

**Recommended**:
- Node.js 20.0 or higher
- 8 GB RAM
- 1 GB free disk space
- Latest version of Chrome or Firefox

---

## Getting Help

If you encounter issues:

1. **Check the console** for error messages
2. **Read the error message carefully** - it often tells you what's wrong
3. **Search the error** on Google or Stack Overflow
4. **Check Next.js documentation**: https://nextjs.org/docs
5. **Check React documentation**: https://react.dev

---

## Next Steps

Now that your application is running:

1. ✅ Complete all 7 lessons
2. ✅ Earn all badges
3. ✅ Reach Expert level (5000+ XP)
4. ✅ Maintain a 7-day streak
5. ✅ Try different languages
6. ✅ Customize the theme
7. ✅ Add your own lessons
8. ✅ Deploy to production

**Enjoy learning AI tools with AI Academy!** 🚀
