"use client";

import React, { useState, useEffect, useRef } from 'react';
import Section from '@/components/common/Section';
import { typingLetter } from '@/app/data/letters';

export default function TypingSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [charCount, setCharCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const fullText = typingLetter.join(' ');
  const isTypingComplete = charCount >= fullText.length;
  
  const displayLines = [];
  let currentIndex = 0;
  
  for (const sentence of typingLetter) {
    const sentenceWithSpace = sentence + ' ';
    const sentenceEnd = currentIndex + sentenceWithSpace.length;
    
    if (charCount > currentIndex) {
      const displayedText = fullText.slice(0, charCount);
      const visiblePart = displayedText.slice(currentIndex, Math.min(charCount, sentenceEnd));
      if (visiblePart) {
        displayLines.push(visiblePart.trim());
      }
    }
    currentIndex = sentenceEnd;
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setCharCount(0);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 } 
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (isVisible && charCount < fullText.length) {
      const timeout = setTimeout(() => {
        setCharCount(charCount + 1);
      }, 80);
      
      return () => clearTimeout(timeout);
    }
  }, [charCount, fullText.length, isVisible]);

  return (
    <Section ref={sectionRef} bgClass="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
      <div className="relative mb-8 md:mb-10">
        <div className="invisible text-2xl md:text-3xl font-bold leading-relaxed space-y-2" aria-hidden="true">
          {typingLetter.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
        
        <div className="absolute top-0 left-0 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed space-y-2">
            {displayLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            {!isTypingComplete && (
              <span className="inline-block w-1 h-6 md:h-10 bg-purple-500 ml-1 animate-pulse" />
            )}
          </h1>
        </div>
      </div>
        {isTypingComplete && (
          <div className="animate-fade-in mt-8 md:mt-10">
            <p className="text-xl md:text-2xl text-purple-600 font-medium animate-bounce">
              👇 계속해서 아래로 내려봐!
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}