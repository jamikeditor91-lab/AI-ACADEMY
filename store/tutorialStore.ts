import { create } from 'zustand';
import { TutorialState } from '@/types';

interface TutorialStore extends TutorialState {
  startTutorial: (lessonId: string) => void;
  nextStep: () => void;
  previousStep: () => void;
  endTutorial: () => void;
  setHighlightedElement: (elementId?: string) => void;
  totalSteps: number;
  setTotalSteps: (total: number) => void;
}

export const useTutorialStore = create<TutorialStore>((set) => ({
  isActive: false,
  currentStep: 0,
  lessonId: '',
  highlightedElement: undefined,
  totalSteps: 0,

  startTutorial: (lessonId: string) => {
    set({
      isActive: true,
      currentStep: 0,
      lessonId,
      highlightedElement: undefined,
    });
  },

  nextStep: () => {
    set((state) => ({
      currentStep: state.currentStep + 1,
    }));
  },

  previousStep: () => {
    set((state) => ({
      currentStep: Math.max(0, state.currentStep - 1),
    }));
  },

  endTutorial: () => {
    set({
      isActive: false,
      currentStep: 0,
      lessonId: '',
      highlightedElement: undefined,
      totalSteps: 0,
    });
  },

  setHighlightedElement: (elementId?: string) => {
    set({ highlightedElement: elementId });
  },

  setTotalSteps: (total: number) => {
    set({ totalSteps: total });
  },
}));
