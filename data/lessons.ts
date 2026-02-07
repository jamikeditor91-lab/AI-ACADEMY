import { Lesson } from '@/types';

export const LESSONS: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'Remove Background from Photos',
    description: 'Learn how to remove backgrounds from any photo using AI',
    category: 'Image Editing',
    difficulty: 'easy',
    estimatedTime: 5,
    aiTool: 'background-remover',
    unlockRequirements: [],
    xpReward: 100,
    badgeReward: 'first-steps',
    steps: [
      {
        id: 'step-1',
        instruction: 'Click the "Upload Photo" button to select an image',
        targetElement: 'upload-button',
        action: 'click',
        hint: 'Look for the blue upload button at the top',
      },
      {
        id: 'step-2',
        instruction: 'Select a photo from your device',
        targetElement: 'file-input',
        action: 'upload',
        hint: 'Choose any photo with a clear subject',
      },
      {
        id: 'step-3',
        instruction: 'Click "Remove Background" to process your image',
        targetElement: 'process-button',
        action: 'click',
        hint: 'The AI will automatically detect and remove the background',
      },
      {
        id: 'step-4',
        instruction: 'Wait for the AI to process your image',
        targetElement: 'progress-indicator',
        action: 'wait',
        hint: 'This usually takes 2-3 seconds',
      },
      {
        id: 'step-5',
        instruction: 'Download your processed image',
        targetElement: 'download-button',
        action: 'click',
        hint: 'Your image is now ready with a transparent background!',
      },
    ],
  },
  {
    id: 'lesson-2',
    title: 'Add Music to Your Photos',
    description: 'Transform static photos into engaging videos with music',
    category: 'Video Creation',
    difficulty: 'easy',
    estimatedTime: 7,
    aiTool: 'music-adder',
    unlockRequirements: ['lesson-1'],
    xpReward: 150,
    steps: [
      {
        id: 'step-1',
        instruction: 'Upload a photo you want to animate',
        targetElement: 'upload-button',
        action: 'upload',
      },
      {
        id: 'step-2',
        instruction: 'Choose a music track from our library',
        targetElement: 'music-selector',
        action: 'select',
        hint: 'Pick a track that matches your photo\'s mood',
      },
      {
        id: 'step-3',
        instruction: 'Select an animation style',
        targetElement: 'animation-selector',
        action: 'select',
        hint: 'Try "Ken Burns" for a classic zoom effect',
      },
      {
        id: 'step-4',
        instruction: 'Click "Generate Video" to create your masterpiece',
        targetElement: 'generate-button',
        action: 'click',
      },
      {
        id: 'step-5',
        instruction: 'Preview and download your video',
        targetElement: 'preview-player',
        action: 'wait',
      },
    ],
  },
  {
    id: 'lesson-3',
    title: 'Create Smooth Transitions',
    description: 'Make professional transitions between two images',
    category: 'Video Effects',
    difficulty: 'medium',
    estimatedTime: 10,
    aiTool: 'transition-maker',
    unlockRequirements: ['lesson-2'],
    xpReward: 200,
    badgeReward: 'transition-master',
    steps: [
      {
        id: 'step-1',
        instruction: 'Upload your first image',
        targetElement: 'upload-first',
        action: 'upload',
      },
      {
        id: 'step-2',
        instruction: 'Upload your second image',
        targetElement: 'upload-second',
        action: 'upload',
      },
      {
        id: 'step-3',
        instruction: 'Choose a transition effect',
        targetElement: 'transition-selector',
        action: 'select',
        hint: 'Morphing creates the smoothest AI-powered transitions',
      },
      {
        id: 'step-4',
        instruction: 'Adjust the transition duration',
        targetElement: 'duration-slider',
        action: 'input',
        hint: '2-3 seconds works best for most transitions',
      },
      {
        id: 'step-5',
        instruction: 'Generate your transition video',
        targetElement: 'generate-button',
        action: 'click',
      },
    ],
  },
  {
    id: 'lesson-4',
    title: 'Apply Trending Effects',
    description: 'Use the latest viral AI effects on your photos',
    category: 'Effects',
    difficulty: 'easy',
    estimatedTime: 5,
    aiTool: 'effect-applier',
    unlockRequirements: ['lesson-1'],
    xpReward: 120,
    steps: [
      {
        id: 'step-1',
        instruction: 'Upload your photo',
        targetElement: 'upload-button',
        action: 'upload',
      },
      {
        id: 'step-2',
        instruction: 'Browse trending effects',
        targetElement: 'effects-gallery',
        action: 'click',
        hint: 'Check out what\'s popular this week!',
      },
      {
        id: 'step-3',
        instruction: 'Select an effect to apply',
        targetElement: 'effect-item',
        action: 'click',
      },
      {
        id: 'step-4',
        instruction: 'Adjust effect intensity',
        targetElement: 'intensity-slider',
        action: 'input',
      },
      {
        id: 'step-5',
        instruction: 'Apply and download',
        targetElement: 'apply-button',
        action: 'click',
      },
    ],
  },
  {
    id: 'lesson-5',
    title: 'Text to Image Generation',
    description: 'Create amazing images from text descriptions',
    category: 'AI Generation',
    difficulty: 'medium',
    estimatedTime: 8,
    aiTool: 'text-to-image',
    unlockRequirements: ['lesson-3'],
    xpReward: 250,
    badgeReward: 'ai-artist',
    steps: [
      {
        id: 'step-1',
        instruction: 'Type your image description',
        targetElement: 'prompt-input',
        action: 'input',
        hint: 'Be specific! "A sunset over mountains with purple sky" works better than "sunset"',
      },
      {
        id: 'step-2',
        instruction: 'Choose an art style',
        targetElement: 'style-selector',
        action: 'select',
        hint: 'Try "Photorealistic" for your first generation',
      },
      {
        id: 'step-3',
        instruction: 'Set image dimensions',
        targetElement: 'size-selector',
        action: 'select',
      },
      {
        id: 'step-4',
        instruction: 'Click "Generate Image"',
        targetElement: 'generate-button',
        action: 'click',
      },
      {
        id: 'step-5',
        instruction: 'Wait for AI to create your image',
        targetElement: 'generation-progress',
        action: 'wait',
        hint: 'This may take 10-30 seconds',
      },
      {
        id: 'step-6',
        instruction: 'Download or regenerate',
        targetElement: 'result-actions',
        action: 'click',
      },
    ],
  },
  {
    id: 'lesson-6',
    title: 'Enhance Image Quality',
    description: 'Upscale and improve image quality with AI',
    category: 'Image Enhancement',
    difficulty: 'easy',
    estimatedTime: 6,
    aiTool: 'image-enhancer',
    unlockRequirements: ['lesson-1'],
    xpReward: 130,
    steps: [
      {
        id: 'step-1',
        instruction: 'Upload a low-quality image',
        targetElement: 'upload-button',
        action: 'upload',
      },
      {
        id: 'step-2',
        instruction: 'Select enhancement level',
        targetElement: 'enhancement-level',
        action: 'select',
        hint: '2x or 4x upscaling recommended',
      },
      {
        id: 'step-3',
        instruction: 'Enable additional enhancements',
        targetElement: 'enhancement-options',
        action: 'click',
        hint: 'Try face enhancement for portraits',
      },
      {
        id: 'step-4',
        instruction: 'Process your image',
        targetElement: 'enhance-button',
        action: 'click',
      },
      {
        id: 'step-5',
        instruction: 'Compare before and after',
        targetElement: 'comparison-slider',
        action: 'input',
      },
    ],
  },
  {
    id: 'lesson-7',
    title: 'Animate Your Photos',
    description: 'Bring still photos to life with AI animation',
    category: 'Animation',
    difficulty: 'medium',
    estimatedTime: 12,
    aiTool: 'video-animator',
    unlockRequirements: ['lesson-5'],
    xpReward: 300,
    badgeReward: 'animator',
    steps: [
      {
        id: 'step-1',
        instruction: 'Upload a photo to animate',
        targetElement: 'upload-button',
        action: 'upload',
        hint: 'Photos with people or animals work best',
      },
      {
        id: 'step-2',
        instruction: 'Choose animation type',
        targetElement: 'animation-type',
        action: 'select',
        hint: 'Try "3D Parallax" for depth effect',
      },
      {
        id: 'step-3',
        instruction: 'Set animation duration',
        targetElement: 'duration-input',
        action: 'input',
      },
      {
        id: 'step-4',
        instruction: 'Add motion points (optional)',
        targetElement: 'motion-canvas',
        action: 'click',
        hint: 'Click on areas you want to move',
      },
      {
        id: 'step-5',
        instruction: 'Generate animation',
        targetElement: 'animate-button',
        action: 'click',
      },
      {
        id: 'step-6',
        instruction: 'Preview and export',
        targetElement: 'preview-player',
        action: 'wait',
      },
    ],
  },
];

export const getLessonById = (id: string): Lesson | undefined => {
  return LESSONS.find((lesson) => lesson.id === id);
};

export const getAvailableLessons = (completedLessons: string[]): Lesson[] => {
  return LESSONS.filter((lesson) => {
    return lesson.unlockRequirements.every((req) =>
      completedLessons.includes(req)
    );
  });
};

export const getLockedLessons = (completedLessons: string[]): Lesson[] => {
  return LESSONS.filter((lesson) => {
    return !lesson.unlockRequirements.every((req) =>
      completedLessons.includes(req)
    );
  });
};
