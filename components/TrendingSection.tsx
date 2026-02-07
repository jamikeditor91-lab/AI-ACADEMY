'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getTrendingEffects } from '@/data/trendingEffects';
import { TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function TrendingSection() {
  const trendingEffects = getTrendingEffects(4);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            <p className="text-sm text-gray-600">
              Popular AI effects this week
            </p>
          </div>
        </div>
        <Link
          href="/trending"
          className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingEffects.map((effect, index) => (
          <motion.div
            key={effect.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
              <Sparkles className="w-12 h-12 text-gray-400 group-hover:scale-110 transition-transform" />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-bold text-purple-600">
                #{index + 1}
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">
              {effect.name}
            </h3>
            <p className="text-xs text-gray-600 mb-2">{effect.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{effect.category}</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-xs font-medium text-green-600">
                  {effect.popularity}%
                </span>
              </div>
            </div>
            {effect.relatedLessonId && (
              <Link href={`/lesson/${effect.relatedLessonId}`}>
                <button className="w-full mt-3 bg-primary-50 text-primary-600 py-2 rounded-lg text-xs font-medium hover:bg-primary-100 transition-colors">
                  Learn This Effect
                </button>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
