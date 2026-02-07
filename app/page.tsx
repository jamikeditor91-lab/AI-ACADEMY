'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useProgressStore } from '@/store/progressStore';
import { LESSONS, getAvailableLessons, getLockedLessons } from '@/data/lessons';
import { Clock, Star, Lock, TrendingUp, Award, Flame } from 'lucide-react';
import TrendingSection from '@/components/TrendingSection';
import DailyChallengeCard from '@/components/DailyChallengeCard';

export default function HomePage() {
  const { xp, level, completedLessons, streak, badges } = useProgressStore();
  const availableLessons = getAvailableLessons(completedLessons);
  const lockedLessons = getLockedLessons(completedLessons);

  const levelProgress = () => {
    if (level === 'beginner') return (xp / 1000) * 100;
    if (level === 'creator') return ((xp - 1000) / 4000) * 100;
    return 100;
  };

  const nextLevelXP = () => {
    if (level === 'beginner') return 1000;
    if (level === 'creator') return 5000;
    return 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome to AI Academy
              </h1>
              <p className="text-gray-600">
                Learn AI tools through interactive tutorials
              </p>
            </div>

            <div className="flex gap-4">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white px-4 py-3 rounded-xl flex items-center gap-2">
                <Flame className="w-5 h-5" />
                <div>
                  <p className="text-xs opacity-90">Streak</p>
                  <p className="text-xl font-bold">{streak} days</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-400 to-pink-500 text-white px-4 py-3 rounded-xl flex items-center gap-2">
                <Award className="w-5 h-5" />
                <div>
                  <p className="text-xs opacity-90">Badges</p>
                  <p className="text-xl font-bold">{badges.length}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  Level: {level.charAt(0).toUpperCase() + level.slice(1)}
                </span>
                <span className="text-xs text-gray-500">
                  {xp} / {nextLevelXP()} XP
                </span>
              </div>
              <TrendingUp className="w-4 h-4 text-primary-600" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${levelProgress()}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="bg-gradient-to-r from-primary-500 to-purple-500 h-full rounded-full"
              />
            </div>
          </div>
        </motion.div>

        <DailyChallengeCard />

        <TrendingSection />

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Available Lessons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableLessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/lesson/${lesson.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer border-2 border-transparent hover:border-primary-500">
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          lesson.difficulty === 'easy'
                            ? 'bg-green-100 text-green-700'
                            : lesson.difficulty === 'medium'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {lesson.difficulty}
                      </div>
                      {completedLessons.includes(lesson.id) && (
                        <div className="bg-success-100 text-success-600 p-2 rounded-full">
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {lesson.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{lesson.estimatedTime} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{lesson.xpReward} XP</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {lockedLessons.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Locked Lessons
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lockedLessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-100 rounded-xl shadow-md p-6 opacity-60 relative"
                >
                  <div className="absolute top-4 right-4 bg-gray-300 p-2 rounded-full">
                    <Lock className="w-5 h-5 text-gray-600" />
                  </div>

                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium inline-block mb-4 ${
                      lesson.difficulty === 'easy'
                        ? 'bg-green-100 text-green-700'
                        : lesson.difficulty === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {lesson.difficulty}
                  </div>

                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {lesson.description}
                  </p>

                  <p className="text-xs text-gray-600">
                    Complete previous lessons to unlock
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
