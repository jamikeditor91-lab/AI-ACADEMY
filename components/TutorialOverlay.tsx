'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTutorialStore } from '@/store/tutorialStore';
import { LessonStep } from '@/types';
import { ArrowRight, ArrowLeft, X, Lightbulb } from 'lucide-react';

interface TutorialOverlayProps {
  steps: LessonStep[];
  onComplete: () => void;
}

export default function TutorialOverlay({ steps, onComplete }: TutorialOverlayProps) {
  const {
    isActive,
    currentStep,
    highlightedElement,
    nextStep,
    previousStep,
    endTutorial,
    setHighlightedElement,
  } = useTutorialStore();

  const currentStepData = steps[currentStep];
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !currentStepData) return;

    if (currentStepData.targetElement) {
      setHighlightedElement(currentStepData.targetElement);
      
      const element = document.getElementById(currentStepData.targetElement);
      if (element) {
        element.classList.add('tutorial-highlight');
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    return () => {
      if (currentStepData?.targetElement) {
        const element = document.getElementById(currentStepData.targetElement);
        if (element) {
          element.classList.remove('tutorial-highlight');
        }
      }
    };
  }, [currentStep, currentStepData, isActive, setHighlightedElement]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      nextStep();
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    endTutorial();
    onComplete();
  };

  const handleSkip = () => {
    endTutorial();
  };

  if (!isActive || !currentStepData) return null;

  return (
    <AnimatePresence>
      <div className="tutorial-overlay" onClick={(e) => e.stopPropagation()}>
        <motion.div
          ref={tooltipRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary-100 p-2 rounded-lg">
                <Lightbulb className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Step {currentStep + 1} of {steps.length}
                </p>
                <div className="flex gap-1 mt-1">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all ${
                        index <= currentStep
                          ? 'bg-primary-500 w-8'
                          : 'bg-gray-200 w-4'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={handleSkip}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {currentStepData.instruction}
            </h3>
            {currentStepData.hint && (
              <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg border border-blue-100">
                💡 {currentStepData.hint}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={previousStep}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              {currentStep < steps.length - 1 ? (
                <>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                'Complete Lesson'
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
