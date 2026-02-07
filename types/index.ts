export type UserLevel = 'beginner' | 'creator' | 'pro';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number;
  videoUrl?: string;
  steps: LessonStep[];
  aiTool: AIToolType;
  unlockRequirements: string[];
  xpReward: number;
  badgeReward?: string;
}

export interface LessonStep {
  id: string;
  instruction: string;
  targetElement?: string;
  action: 'click' | 'upload' | 'input' | 'select' | 'wait';
  validationFn?: string;
  hint?: string;
}

export type AIToolType = 
  | 'background-remover'
  | 'music-adder'
  | 'transition-maker'
  | 'effect-applier'
  | 'text-to-image'
  | 'image-enhancer'
  | 'video-animator';

export interface UserProgress {
  userId: string;
  level: UserLevel;
  xp: number;
  completedLessons: string[];
  currentLesson?: string;
  badges: Badge[];
  streak: number;
  lastActiveDate: string;
  projects: UserProject[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
}

export interface UserProject {
  id: string;
  lessonId: string;
  createdAt: string;
  thumbnail?: string;
  data: any;
}

export interface TrendingEffect {
  id: string;
  name: string;
  description: string;
  category: string;
  popularity: number;
  thumbnail: string;
  difficulty: 'easy' | 'medium' | 'hard';
  relatedLessonId?: string;
}

export interface DailyChallenge {
  id: string;
  date: string;
  title: string;
  description: string;
  aiTool: AIToolType;
  xpReward: number;
  completed: boolean;
}

export interface TutorialState {
  isActive: boolean;
  currentStep: number;
  lessonId: string;
  highlightedElement?: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
];

export const XP_LEVELS = {
  beginner: { min: 0, max: 1000 },
  creator: { min: 1001, max: 5000 },
  pro: { min: 5001, max: Infinity },
};
