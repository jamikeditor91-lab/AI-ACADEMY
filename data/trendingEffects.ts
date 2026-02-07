import { TrendingEffect } from '@/types';

export const TRENDING_EFFECTS: TrendingEffect[] = [
  {
    id: 'effect-1',
    name: 'AI Portrait Enhancement',
    description: 'Transform your selfies with AI-powered beauty filters',
    category: 'Portrait',
    popularity: 95,
    thumbnail: '/effects/portrait.jpg',
    difficulty: 'easy',
    relatedLessonId: 'lesson-6',
  },
  {
    id: 'effect-2',
    name: 'Anime Style Conversion',
    description: 'Turn your photos into anime-style artwork',
    category: 'Style Transfer',
    popularity: 92,
    thumbnail: '/effects/anime.jpg',
    difficulty: 'medium',
    relatedLessonId: 'lesson-5',
  },
  {
    id: 'effect-3',
    name: '3D Parallax Effect',
    description: 'Add depth and motion to static images',
    category: 'Animation',
    popularity: 88,
    thumbnail: '/effects/parallax.jpg',
    difficulty: 'medium',
    relatedLessonId: 'lesson-7',
  },
  {
    id: 'effect-4',
    name: 'Background Blur Pro',
    description: 'Professional bokeh effect for any photo',
    category: 'Background',
    popularity: 85,
    thumbnail: '/effects/blur.jpg',
    difficulty: 'easy',
    relatedLessonId: 'lesson-1',
  },
  {
    id: 'effect-5',
    name: 'Cinematic Color Grading',
    description: 'Hollywood-style color correction',
    category: 'Color',
    popularity: 82,
    thumbnail: '/effects/cinematic.jpg',
    difficulty: 'medium',
    relatedLessonId: 'lesson-6',
  },
  {
    id: 'effect-6',
    name: 'AI Face Swap',
    description: 'Seamlessly swap faces in photos',
    category: 'Face',
    popularity: 90,
    thumbnail: '/effects/faceswap.jpg',
    difficulty: 'hard',
  },
  {
    id: 'effect-7',
    name: 'Vintage Film Look',
    description: 'Add authentic film grain and color',
    category: 'Vintage',
    popularity: 78,
    thumbnail: '/effects/vintage.jpg',
    difficulty: 'easy',
    relatedLessonId: 'lesson-4',
  },
  {
    id: 'effect-8',
    name: 'AI Sky Replacement',
    description: 'Change the sky in any landscape photo',
    category: 'Landscape',
    popularity: 87,
    thumbnail: '/effects/sky.jpg',
    difficulty: 'medium',
    relatedLessonId: 'lesson-1',
  },
];

export const getTrendingEffects = (limit?: number): TrendingEffect[] => {
  const sorted = [...TRENDING_EFFECTS].sort((a, b) => b.popularity - a.popularity);
  return limit ? sorted.slice(0, limit) : sorted;
};

export const getEffectsByCategory = (category: string): TrendingEffect[] => {
  return TRENDING_EFFECTS.filter((effect) => effect.category === category);
};

export const getEffectById = (id: string): TrendingEffect | undefined => {
  return TRENDING_EFFECTS.find((effect) => effect.id === id);
};
