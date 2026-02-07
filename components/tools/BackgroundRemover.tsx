'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Download, Loader2, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BackgroundRemoverProps {
  onComplete?: (result: string) => void;
}

export default function BackgroundRemover({ onComplete }: BackgroundRemoverProps) {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    multiple: false,
  });

  const removeBackground = async () => {
    if (!image) return;

    setIsProcessing(true);

    try {
      const response = await fetch('/api/remove-background', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image }),
      });

      const data = await response.json();
      setProcessedImage(data.result);
      onComplete?.(data.result);
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Failed to remove background. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'background-removed.png';
    link.click();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Original Image</h3>
          {!image ? (
            <div
              {...getRootProps()}
              id="upload-button"
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                isDragActive
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
              }`}
            >
              <input {...getInputProps()} id="file-input" />
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 font-medium mb-2">
                {isDragActive ? 'Drop your image here' : 'Upload Photo'}
              </p>
              <p className="text-sm text-gray-500">
                Drag & drop or click to select
              </p>
            </div>
          ) : (
            <div className="relative">
              <img
                src={image}
                alt="Original"
                className="w-full rounded-xl shadow-lg"
              />
              <button
                onClick={() => {
                  setImage(null);
                  setProcessedImage(null);
                }}
                className="absolute top-2 right-2 bg-white rounded-lg px-3 py-1 text-sm shadow-md hover:bg-gray-100"
              >
                Change
              </button>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Processed Image</h3>
          {!processedImage ? (
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[300px]">
              <ImageIcon className="w-12 h-12 text-gray-300 mb-4" />
              <p className="text-gray-500">
                {image
                  ? 'Click "Remove Background" to process'
                  : 'Upload an image to get started'}
              </p>
            </div>
          ) : (
            <div className="relative">
              <div className="bg-checkerboard rounded-xl overflow-hidden shadow-lg">
                <img
                  src={processedImage}
                  alt="Processed"
                  className="w-full"
                />
              </div>
              <button
                id="download-button"
                onClick={downloadImage}
                className="absolute top-2 right-2 bg-primary-600 text-white rounded-lg px-4 py-2 text-sm shadow-md hover:bg-primary-700 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          )}
        </div>
      </div>

      {image && !processedImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <button
            id="process-button"
            onClick={removeBackground}
            disabled={isProcessing}
            className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" id="progress-indicator" />
                Processing...
              </>
            ) : (
              'Remove Background'
            )}
          </button>
        </motion.div>
      )}

      <style jsx>{`
        .bg-checkerboard {
          background-image: linear-gradient(45deg, #f0f0f0 25%, transparent 25%),
            linear-gradient(-45deg, #f0f0f0 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #f0f0f0 75%),
            linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
      `}</style>
    </div>
  );
}
