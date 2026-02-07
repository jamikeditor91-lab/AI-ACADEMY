import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProgress, UserLevel, Badge, UserProject, XP_LEVELS } from '@/types';

interface ProgressStore extends UserProgress {
  addXP: (amount: number) => void;
  completeLesson: (lessonId: string, xpReward: number) => void;
  addBadge: (badge: Badge) => void;
  updateStreak: () => void;
  saveProject: (project: UserProject) => void;
  setCurrentLesson: (lessonId: string) => void;
  getUserLevel: () => UserLevel;
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      userId: 'user-' + Math.random().toString(36).substr(2, 9),
      level: 'beginner',
      xp: 0,
      completedLessons: [],
      badges: [],
      streak: 0,
      lastActiveDate: new Date().toISOString().split('T')[0],
      projects: [],

      addXP: (amount: number) => {
        set((state) => {
          const newXP = state.xp + amount;
          const newLevel = get().getUserLevel();
          return { xp: newXP, level: newLevel };
        });
      },

      completeLesson: (lessonId: string, xpReward: number) => {
        set((state) => {
          if (state.completedLessons.includes(lessonId)) {
            return state;
          }
          const newCompletedLessons = [...state.completedLessons, lessonId];
          const newXP = state.xp + xpReward;
          const newLevel = get().getUserLevel();
          
          return {
            completedLessons: newCompletedLessons,
            xp: newXP,
            level: newLevel,
            currentLesson: undefined,
          };
        });
      },

      addBadge: (badge: Badge) => {
        set((state) => ({
          badges: [...state.badges, badge],
        }));
      },

      updateStreak: () => {
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          const lastActive = new Date(state.lastActiveDate);
          const todayDate = new Date(today);
          const diffTime = Math.abs(todayDate.getTime() - lastActive.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          let newStreak = state.streak;
          if (diffDays === 1) {
            newStreak += 1;
          } else if (diffDays > 1) {
            newStreak = 1;
          }

          return {
            streak: newStreak,
            lastActiveDate: today,
          };
        });
      },

      saveProject: (project: UserProject) => {
        set((state) => ({
          projects: [...state.projects, project],
        }));
      },

      setCurrentLesson: (lessonId: string) => {
        set({ currentLesson: lessonId });
      },

      getUserLevel: (): UserLevel => {
        const xp = get().xp;
        if (xp >= XP_LEVELS.pro.min) return 'pro';
        if (xp >= XP_LEVELS.creator.min) return 'creator';
        return 'beginner';
      },
    }),
    {
      name: 'ai-academy-progress',
    }
  )
);
