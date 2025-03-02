'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

interface CardProps {
  suit: Suit;
  rank: Rank;
  isSelected: boolean;
  isFlipped: boolean;
  isRemoved: boolean;
  onClick: () => void;
}

export default function Card({ suit, rank, isSelected, isFlipped, isRemoved, onClick }: CardProps) {
  const suitSymbol = {
    hearts: '♥',
    diamonds: '♦',
    clubs: '♣',
    spades: '♠',
  };

  const suitColor = suit === 'hearts' || suit === 'diamonds' ? 'text-red-600' : 'text-black';
  
  // Function to render decorative elements based on rank
  const renderDecorations = () => {
    if (rank === 'A') {
      return (
        <div className={`text-8xl flex justify-center items-center ${suitColor}`}>
          {suitSymbol[suit]}
        </div>
      );
    } else if (rank === 'K' || rank === 'Q' || rank === 'J') {
      // For face cards, render a more elaborate design
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <div className={`text-xl font-bold mb-1 ${suitColor}`}>{rank === 'K' ? 'KING' : rank === 'Q' ? 'QUEEN' : 'JACK'}</div>
          <div className={`text-5xl ${suitColor}`}>{suitSymbol[suit]}</div>
          <div className="mt-2 w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {rank === 'K' && <div className="text-3xl">♔</div>}
            {rank === 'Q' && <div className="text-3xl">♕</div>}
            {rank === 'J' && <div className="text-3xl">♝</div>}
          </div>
        </div>
      );
    } else {
      // For number cards, render the appropriate number of suit symbols
      const count = rank === '10' ? 10 : parseInt(rank);
      
      // Special layout for 7 card to match the 5 card layout
      if (rank === '7') {
        return (
          <div className="grid grid-cols-3 gap-1 p-2">
            <div className={`flex justify-center items-center ${suitColor}`}>
              <span className="text-xl">{suitSymbol[suit]}</span>
            </div>
            <div className={`flex justify-center items-center ${suitColor}`}>
              <span className="text-xl">{suitSymbol[suit]}</span>
            </div>
            <div className={`flex justify-center items-center ${suitColor}`}>
              <span className="text-xl">{suitSymbol[suit]}</span>
            </div>
            <div className={`flex justify-center items-center ${suitColor}`}>
              <span className="text-xl">{suitSymbol[suit]}</span>
            </div>
            <div className={`flex justify-center items-center ${suitColor}`}>
              <span className="text-xl">{suitSymbol[suit]}</span>
            </div>
            <div className={`flex justify-center items-center ${suitColor}`}>
              <span className="text-xl">{suitSymbol[suit]}</span>
            </div>
            <div className={`flex justify-center items-center ${suitColor}`}>
              <span className="text-xl">{suitSymbol[suit]}</span>
            </div>
          </div>
        );
      }
      
      return (
        <div className="grid grid-cols-2 gap-1 p-2">
          {Array(count).fill(0).map((_, i) => (
            <div key={i} className={`flex justify-center items-center ${suitColor}`}>
              <span className="text-xl">{suitSymbol[suit]}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <motion.div
      className={`card ${isFlipped ? 'flipped' : ''} ${isSelected ? 'selected' : ''} ${isRemoved ? 'slide-down' : ''}`}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      style={{ 
        width: '180px', 
        height: '250px',
        visibility: isRemoved ? 'hidden' : 'visible',
        transition: 'visibility 0.8s'
      }}
    >
      <div className="card-inner">
        <div className="card-back flex items-center justify-center">
          <div className="grid grid-cols-5 grid-rows-7 gap-1 w-full h-full p-4">
            {Array(35).fill(0).map((_, i) => (
              <div key={i} className={`bg-white/20 rounded-full w-full h-full ${i % 2 === 0 ? 'animate-pulse' : ''}`}></div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center text-white text-2xl font-bold">
              ?
            </div>
          </div>
        </div>
        <div className="card-front flex flex-col justify-between p-4 bg-white">
          {/* Top section */}
          <div className="flex justify-between items-start">
            <div className={`flex flex-col items-center ${suitColor}`}>
              <div className="text-xl font-bold">{rank}</div>
              <div className="text-xl">{suitSymbol[suit]}</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
              <span className={`text-sm ${suitColor}`}>{suitSymbol[suit]}</span>
            </div>
          </div>
          
          {/* Middle section */}
          <div className="flex-grow flex items-center justify-center py-2">
            {renderDecorations()}
          </div>
          
          {/* Bottom section - fixed positioning */}
          <div className="flex justify-end w-full mt-auto">
            <div className={`flex flex-col items-center rotate-180 ${suitColor}`}>
              <div className="text-xl font-bold">{rank}</div>
              <div className="text-xl">{suitSymbol[suit]}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 