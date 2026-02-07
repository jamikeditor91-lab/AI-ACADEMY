# AI Academy

A learning-based mobile/web application that teaches beginners (both children and adults) how to use AI tools through an interactive tutorial-driven experience.

## Features

### Core Features
- **Interactive Tutorials**: Step-by-step guided tutorials with visual highlights and instructions
- **Built-in AI Tools**: Practice with real AI tools including:
  - Background remover
  - Image filters and effects
  - Text-to-image generation
  - Image enhancement
  - Photo animation
- **Gamification System**: 
  - XP and leveling system (Beginner → Creator → Expert)
  - Badges and achievements
  - Daily challenges
  - Streak tracking
- **Trend Intelligence**: Discover trending AI effects and techniques
- **Multi-language Support**: Available in English, Spanish, French, German, and Chinese
- **Progressive Learning**: Lessons unlock as you complete previous ones

### Technical Features
- Built with Next.js 14 and TypeScript
- Responsive, mobile-first design
- State management with Zustand
- Smooth animations with Framer Motion
- Styled with Tailwind CSS
- Client-side state persistence

## Project Structure

```
ai-academy/
├── app/                          # Next.js app directory
│   ├── api/                      # API routes
│   │   └── remove-background/    # Background removal API
│   ├── lesson/[id]/              # Dynamic lesson pages
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── tools/                    # AI tool components
│   │   └── BackgroundRemover.tsx
│   ├── DailyChallengeCard.tsx
│   ├── TrendingSection.tsx
│   └── TutorialOverlay.tsx
├── data/                         # Static data
│   ├── challenges.ts             # Daily challenges and badges
│   ├── lessons.ts                # Lesson definitions
│   └── trendingEffects.ts        # Trending AI effects
├── lib/                          # Utility libraries
│   └── i18n.ts                   # Internationalization
├── store/                        # Zustand stores
│   ├── languageStore.ts          # Language selection
│   ├── progressStore.ts          # User progress tracking
│   └── tutorialStore.ts          # Tutorial state
├── types/                        # TypeScript types
│   └── index.ts                  # Type definitions
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind config
├── postcss.config.js             # PostCSS config
└── next.config.js                # Next.js config
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd ai-academy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Architecture

### State Management
The application uses Zustand for state management with three main stores:

1. **Progress Store** (`store/progressStore.ts`):
   - Tracks user XP, level, completed lessons
   - Manages badges and achievements
   - Handles streak tracking
   - Persists to localStorage

2. **Tutorial Store** (`store/tutorialStore.ts`):
   - Manages tutorial overlay state
   - Tracks current step and highlighted elements
   - Controls tutorial flow

3. **Language Store** (`store/languageStore.ts`):
   - Manages selected language
   - Persists language preference

### Lesson System
Lessons are defined in `data/lessons.ts` with the following structure:
- Sequential unlocking based on completion
- Difficulty levels (easy, medium, hard)
- XP rewards
- Associated AI tools
- Step-by-step instructions

### Gamification
- **XP System**: 
  - Beginner: 0-999 XP
  - Creator: 1000-4999 XP
  - Expert: 5000+ XP
- **Badges**: Earned for specific achievements
- **Daily Challenges**: New challenge every day with bonus XP
- **Streaks**: Track consecutive days of activity

### Tutorial System
The tutorial overlay (`components/TutorialOverlay.tsx`) provides:
- Visual element highlighting
- Step-by-step instructions
- Navigation controls
- Skip functionality
- Automatic progression

## UX Flow

### First-Time User Experience
1. User lands on home page
2. Sees their progress dashboard (starts at Beginner level, 0 XP)
3. Views available lessons (first lesson unlocked)
4. Clicks on a lesson to start
5. Tutorial overlay guides them through the AI tool
6. Completes lesson and earns XP + potential badge
7. Next lesson unlocks
8. Daily challenge appears on home page

### Returning User Experience
1. Progress is restored from localStorage
2. Sees updated XP, level, and streak
3. New daily challenge available
4. Previously completed lessons marked with stars
5. New lessons unlocked based on progress
6. Trending effects section shows popular AI techniques

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

### Environment Variables
Currently, no environment variables are required for basic functionality. For production AI features, you may need:
- `OPENAI_API_KEY` (for text-to-image)
- `REPLICATE_API_TOKEN` (for advanced AI models)

## Customization

### Adding New Lessons
Edit `data/lessons.ts` and add a new lesson object:
```typescript
{
  id: 'new-lesson',
  title: 'Lesson Title',
  description: 'Lesson description',
  difficulty: 'easy',
  estimatedTime: 10,
  xpReward: 100,
  aiTool: 'background-remover',
  prerequisites: ['previous-lesson-id'],
  steps: [...]
}
```

### Adding New AI Tools
1. Create component in `components/tools/`
2. Add API route if needed in `app/api/`
3. Reference in lesson definition

### Adding New Languages
1. Add language to `types/index.ts` SUPPORTED_LANGUAGES
2. Add translations to `lib/i18n.ts`

### Customizing Theme
Edit `tailwind.config.js` to change colors, animations, and styles.

## Future Enhancements

Potential features for future development:
- User authentication and cloud sync
- Social features (share projects, leaderboards)
- More AI tools (video editing, audio generation)
- Advanced tutorials for expert users
- Community-created lessons
- Mobile app (React Native)
- Real-time collaboration
- AI-powered personalized learning paths

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or contributions, please open an issue on the project repository.
