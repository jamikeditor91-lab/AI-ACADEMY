'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { generateDailyChallenge } from '@/data/challenges';
import { useProgressStore } from '@/store/progressStore';
import { Calendar, Trophy, CheckCircle } from 'lucide-react';

export default function DailyChallengeCard() {
  const [challenge, setChallenge] = useState(generateDailyChallenge());
  const { addXP } = useProgressStore();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const savedCompletion = localStorage.getItem(`challenge-${challenge.id}`);
    if (savedCompletion) {
      setCompleted(true);
    }
  }, [challenge.id]);

  const handleComplete = () => {
    if (!completed) {
      addXP(challenge.xpReward);
      setCompleted(true);
      localStorage.setItem(`challenge-${challenge.id}`, 'true');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Daily Challenge</h3>
            <p className="text-sm text-gray-600">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
        {completed && (
          <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Completed
          </div>
        )}
      </div>

      <div className="mb-4">
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {challenge.title}
        </h4>
        <p className="text-gray-700">{challenge.description}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-orange-600">
          <Trophy className="w-5 h-5" />
          <span className="font-bold">{challenge.xpReward} XP</span>
        </div>
        {!completed && (
          <button
            onClick={handleComplete}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Start Challenge
          </button>
        )}
      </div>
    </motion.div>
  );
}
