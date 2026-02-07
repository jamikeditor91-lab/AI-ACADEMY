'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { getLessonById } from '@/data/lessons';
import { useProgressStore } from '@/store/progressStore';
import { useTutorialStore } from '@/store/tutorialStore';
import TutorialOverlay from '@/components/TutorialOverlay';
import BackgroundRemover from '@/components/tools/BackgroundRemover';
import { ArrowLeft, Play, Award } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.id as string;
  const lesson = getLessonById(lessonId);

  const { completeLesson, addBadge, completedLessons } = useProgressStore();
  const { startTutorial, isActive } = useTutorialStore();
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    if (lesson && !completedLessons.includes(lesson.id)) {
      startTutorial(lesson.id);
    }
  }, [lesson, startTutorial, completedLessons]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Lesson not found
          </h1>
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 underline"
          >
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const handleLessonComplete = () => {
    completeLesson(lesson.id, lesson.xpReward);

    if (lesson.badgeReward) {
      addBadge({
        id: lesson.badgeReward,
        name: lesson.title,
        description: `Completed ${lesson.title}`,
        icon: '🏆',
        earnedAt: new Date().toISOString(),
      });
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setShowCompletion(true);
  };

  const renderTool = () => {
    switch (lesson.aiTool) {
      case 'background-remover':
        return <BackgroundRemover onComplete={() => {}} />;
      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-600">
              This tool is coming soon! For now, follow the tutorial steps.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to lessons
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  {lesson.title}
                </h1>
                {completedLessons.includes(lesson.id) && (
                  <div className="bg-success-100 text-success-600 px-3 py-1 rounded-full text-sm font-medium">
                    ✓ Completed
                  </div>
                )}
              </div>
              <p className="text-gray-600">{lesson.description}</p>
            </div>

            <div className="flex gap-2">
              <div
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  lesson.difficulty === 'easy'
                    ? 'bg-green-100 text-green-700'
                    : lesson.difficulty === 'medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {lesson.difficulty}
              </div>
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-lg text-sm font-medium">
                {lesson.xpReward} XP
              </div>
            </div>
          </div>

          {lesson.videoUrl && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Video Tutorial</h3>
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <Play className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Practice Sandbox
          </h2>
          {renderTool()}
        </motion.div>
      </div>

      {isActive && (
        <TutorialOverlay steps={lesson.steps} onComplete={handleLessonComplete} />
      )}

      {showCompletion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10001] p-4"
          onClick={() => setShowCompletion(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Lesson Complete!
            </h2>
            <p className="text-gray-600 mb-6">
              You earned {lesson.xpReward} XP
              {lesson.badgeReward && ' and a new badge!'}
            </p>
            <button
              onClick={() => router.push('/')}
              className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Continue Learning
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
