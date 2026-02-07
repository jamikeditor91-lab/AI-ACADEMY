import { DailyChallenge } from '@/types';

export const generateDailyChallenge = (): DailyChallenge => {
  const today = new Date().toISOString().split('T')[0];
  
  const challenges = [
    {
      title: 'Background Removal Master',
      description: 'Remove backgrounds from 3 different photos',
      aiTool: 'background-remover' as const,
      xpReward: 50,
    },
    {
      title: 'Creative Composer',
      description: 'Create a photo slideshow with music',
      aiTool: 'music-adder' as const,
      xpReward: 75,
    },
    {
      title: 'Transition Wizard',
      description: 'Make a smooth transition between two images',
      aiTool: 'transition-maker' as const,
      xpReward: 60,
    },
    {
      title: 'Effect Explorer',
      description: 'Try 5 different trending effects',
      aiTool: 'effect-applier' as const,
      xpReward: 80,
    },
    {
      title: 'AI Artist',
      description: 'Generate 2 images from text prompts',
      aiTool: 'text-to-image' as const,
      xpReward: 100,
    },
    {
      title: 'Enhancement Expert',
      description: 'Enhance and upscale 3 low-quality images',
      aiTool: 'image-enhancer' as const,
      xpReward: 70,
    },
    {
      title: 'Animation Pro',
      description: 'Animate a static photo with motion',
      aiTool: 'video-animator' as const,
      xpReward: 90,
    },
  ];

  const dayOfYear = Math.floor(
    (new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  
  const challengeIndex = dayOfYear % challenges.length;
  const selectedChallenge = challenges[challengeIndex];

  return {
    id: `challenge-${today}`,
    date: today,
    title: selectedChallenge.title,
    description: selectedChallenge.description,
    aiTool: selectedChallenge.aiTool,
    xpReward: selectedChallenge.xpReward,
    completed: false,
  };
};

export const BADGES = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '👣',
  },
  {
    id: 'transition-master',
    name: 'Transition Master',
    description: 'Master the art of smooth transitions',
    icon: '🎬',
  },
  {
    id: 'ai-artist',
    name: 'AI Artist',
    description: 'Generate your first AI image',
    icon: '🎨',
  },
  {
    id: 'animator',
    name: 'Animator',
    description: 'Bring photos to life with animation',
    icon: '🎭',
  },
  {
    id: 'week-warrior',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '🔥',
  },
  {
    id: 'completionist',
    name: 'Completionist',
    description: 'Complete all available lessons',
    icon: '🏆',
  },
  {
    id: 'daily-champion',
    name: 'Daily Champion',
    description: 'Complete 10 daily challenges',
    icon: '⭐',
  },
];
