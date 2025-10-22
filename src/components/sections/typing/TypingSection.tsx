"use client";

import React, { useState, useEffect } from 'react';
import Section from '@/components/common/Section';
import { typingLetter } from '@/app/data/letters';

export default function TypingSection() {
  const [charCount, setCharCount] = useState(0);
  
  const fullText = typingLetter.join(' ');
  const isTypingComplete = charCount >= fullText.length;
  const displayedText = fullText.slice(0, charCount);
  
  const displayLines = [];
  let currentIndex = 0;
  
  for (const sentence of typingLetter) {
    const sentenceWithSpace = sentence + ' ';
    const sentenceEnd = currentIndex + sentenceWithSpace.length;
    
    if (charCount > currentIndex) {
      const visiblePart = displayedText.slice(currentIndex, Math.min(charCount, sentenceEnd));
      if (visiblePart) {
        displayLines.push(visiblePart.trim());
      }
    }
    
    currentIndex = sentenceEnd;
  }
  
  useEffect(() => {
    if (charCount < fullText.length) {
      const timeout = setTimeout(() => {
        setCharCount(charCount + 1);
      }, 80);
      
      return () => clearTimeout(timeout);
    }
  }, [charCount, fullText.length]);

  return (
    <Section bgClass="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed space-y-2">
            {displayLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            {!isTypingComplete && (
              <span className="inline-block w-1 h-6 md:h-10 bg-purple-500 ml-1 animate-pulse" />
            )}
          </h1>
        </div>
        
        {isTypingComplete && (
          <div className="animate-fade-in mt-8 md:mt-10">
            <p className="text-xl md:text-2xl text-purple-600 font-medium animate-bounce">
              👇 계속해서 아래로 내려봐!
            </p>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </Section>
  );
}