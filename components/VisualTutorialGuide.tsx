'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguageStore } from '@/store/languageStore';
import { getTranslation } from '@/lib/i18n';

interface TutorialStep {
  title: string;
  description: string;
  imageUrl: string;
  platform: 'ios' | 'android' | 'both';
}

interface VisualTutorialGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VisualTutorialGuide({ isOpen, onClose }: VisualTutorialGuideProps) {
  const { language } = useLanguageStore();
  const [currentPlatform, setCurrentPlatform] = useState<'ios' | 'android'>('ios');
  const [currentStep, setCurrentStep] = useState(0);

  const iosSteps: TutorialStep[] = [
    {
      title: getTranslation('tutorial.ios.step1.title', language),
      description: getTranslation('tutorial.ios.step1.description', language),
      imageUrl: 'https://placehold.co/300x600/667eea/ffffff?text=iPhone+Home+Screen',
      platform: 'ios'
    },
    {
      title: getTranslation('tutorial.ios.step2.title', language),
      description: getTranslation('tutorial.ios.step2.description', language),
      imageUrl: 'https://placehold.co/300x600/667eea/ffffff?text=Open+Safari',
      platform: 'ios'
    },
    {
      title: getTranslation('tutorial.ios.step3.title', language),
      description: getTranslation('tutorial.ios.step3.description', language),
      imageUrl: 'https://placehold.co/300x600/667eea/ffffff?text=Share+Button',
      platform: 'ios'
    },
    {
      title: getTranslation('tutorial.ios.step4.title', language),
      description: getTranslation('tutorial.ios.step4.description', language),
      imageUrl: 'https://placehold.co/300x600/667eea/ffffff?text=Add+to+Home+Screen',
      platform: 'ios'
    },
    {
      title: getTranslation('tutorial.ios.step5.title', language),
      description: getTranslation('tutorial.ios.step5.description', language),
      imageUrl: 'https://placehold.co/300x600/667eea/ffffff?text=App+Icon+Ready',
      platform: 'ios'
    }
  ];

  const androidSteps: TutorialStep[] = [
    {
      title: getTranslation('tutorial.android.step1.title', language),
      description: getTranslation('tutorial.android.step1.description', language),
      imageUrl: 'https://placehold.co/300x600/34a853/ffffff?text=Android+Home',
      platform: 'android'
    },
    {
      title: getTranslation('tutorial.android.step2.title', language),
      description: getTranslation('tutorial.android.step2.description', language),
      imageUrl: 'https://placehold.co/300x600/34a853/ffffff?text=Open+Chrome',
      platform: 'android'
    },
    {
      title: getTranslation('tutorial.android.step3.title', language),
      description: getTranslation('tutorial.android.step3.description', language),
      imageUrl: 'https://placehold.co/300x600/34a853/ffffff?text=Menu+Button',
      platform: 'android'
    },
    {
      title: getTranslation('tutorial.android.step4.title', language),
      description: getTranslation('tutorial.android.step4.description', language),
      imageUrl: 'https://placehold.co/300x600/34a853/ffffff?text=Add+to+Home',
      platform: 'android'
    },
    {
      title: getTranslation('tutorial.android.step5.title', language),
      description: getTranslation('tutorial.android.step5.description', language),
      imageUrl: 'https://placehold.co/300x600/34a853/ffffff?text=App+Installed',
      platform: 'android'
    }
  ];

  const currentSteps = currentPlatform === 'ios' ? iosSteps : androidSteps;
  const currentStepData = currentSteps[currentStep];

  const handleNext = () => {
    if (currentStep < currentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlatformChange = (platform: 'ios' | 'android') => {
    setCurrentPlatform(platform);
    setCurrentStep(0);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Smartphone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {getTranslation('tutorial.visual.title', language)}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {getTranslation('tutorial.visual.subtitle', language)}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex gap-2 p-4 border-b border-gray-200 bg-gray-50">
              <button
                onClick={() => handlePlatformChange('ios')}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                  currentPlatform === 'ios'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                🍎 iPhone / iOS
              </button>
              <button
                onClick={() => handlePlatformChange('android')}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                  currentPlatform === 'android'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                🤖 Android
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className={`rounded-3xl overflow-hidden shadow-2xl border-8 ${
                      currentPlatform === 'ios' ? 'border-gray-800' : 'border-gray-700'
                    }`}>
                      <img
                        src={currentStepData.imageUrl}
                        alt={currentStepData.title}
                        className="w-full h-auto max-w-[300px]"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
                      {currentStep + 1}
                    </div>
                  </div>
                </motion.div>

                <div className="flex-1 max-w-md">
                  <motion.div
                    key={`content-${currentStep}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>Step {currentStep + 1} of {currentSteps.length}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${
                            currentPlatform === 'ios' ? 'bg-primary-600' : 'bg-green-600'
                          }`}
                          style={{ width: `${((currentStep + 1) / currentSteps.length) * 100}%` }}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900">
                      {currentStepData.title}
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {currentStepData.description}
                    </p>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                          currentStep === 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <ChevronLeft className="w-5 h-5" />
                        {getTranslation('tutorial.visual.previous', language)}
                      </button>

                      {currentStep < currentSteps.length - 1 ? (
                        <button
                          onClick={handleNext}
                          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                            currentPlatform === 'ios'
                              ? 'bg-primary-600 hover:bg-primary-700'
                              : 'bg-green-600 hover:bg-green-700'
                          } text-white`}
                        >
                          {getTranslation('tutorial.visual.next', language)}
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={onClose}
                          className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                            currentPlatform === 'ios'
                              ? 'bg-primary-600 hover:bg-primary-700'
                              : 'bg-green-600 hover:bg-green-700'
                          } text-white`}
                        >
                          {getTranslation('tutorial.visual.done', language)} ✓
                        </button>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
