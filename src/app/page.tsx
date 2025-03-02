'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import ExperimentResults from '@/components/ExperimentResults';
import ExperimentExplanation from '@/components/ExperimentExplanation';

// Define card data
const cards = [
  { suit: 'hearts', rank: 'A' },
  { suit: 'spades', rank: '5' },
  { suit: 'diamonds', rank: '7' },
];

export default function Home() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [finalCardIndex, setFinalCardIndex] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);
  const [removedCardIndex, setRemovedCardIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [experimentStage, setExperimentStage] = useState<'initial' | 'suggestion' | 'results' | 'explanation'>('initial');
  const [randomGroup, setRandomGroup] = useState<'neutral' | 'stay' | 'switch'>('neutral');

  // Randomly assign a group when the component mounts
  useEffect(() => {
    const groups: ('neutral' | 'stay' | 'switch')[] = ['neutral', 'stay', 'switch'];
    const randomIndex = Math.floor(Math.random() * groups.length);
    setRandomGroup(groups[randomIndex]);
    
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  const handleInitialCardClick = (index: number) => {
    if (experimentStage !== 'initial' || selectedCardIndex !== null) return;

    // Select the card
    setSelectedCardIndex(index);

    // After a delay, remove one of the non-selected cards
    setTimeout(() => {
      const availableIndices = [0, 1, 2].filter(i => i !== index);
      const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      setRemovedCardIndex(randomIndex);

      // Move to the suggestion stage
      setTimeout(() => {
        setExperimentStage('suggestion');
      }, 1000);
    }, 1000);
  };

  const handleFinalCardClick = (index: number) => {
    if (experimentStage !== 'suggestion' || finalCardIndex !== null || index === removedCardIndex) return;

    // Select the final card
    setFinalCardIndex(index);

    // Flip all cards and show results
    setTimeout(() => {
      setFlippedCards([true, true, true]);
      
      // After cards are flipped, show results
      setTimeout(() => {
        setExperimentStage('results');
        setShowResults(true);
        
        // After results are shown, show explanation
        setTimeout(() => {
          setExperimentStage('explanation');
          setShowExplanation(true);
        }, 2000);
      }, 1000);
    }, 1000);
  };

  const resetExperiment = () => {
    setSelectedCardIndex(null);
    setFinalCardIndex(null);
    setFlippedCards([false, false, false]);
    setRemovedCardIndex(null);
    setShowResults(false);
    setShowExplanation(false);
    setExperimentStage('initial');
    
    // Randomly assign a new group
    const groups: ('neutral' | 'stay' | 'switch')[] = ['neutral', 'stay', 'switch'];
    const randomIndex = Math.floor(Math.random() * groups.length);
    setRandomGroup(groups[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Odločanje in karte
          </h1>
          <p className="text-xl text-gray-300">
            Odkrijte, kako zunanje mnenje vpliva na naše odločitve.
          </p>
        </header>

        <main>
          {experimentStage === 'initial' && (
            <div className="flex flex-col items-center">
              <p className="text-lg mb-8 text-center max-w-2xl text-gray-300">
                Izberite eno karto.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    suit={card.suit as 'hearts' | 'diamonds' | 'clubs' | 'spades'}
                    rank={card.rank as 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'}
                    isSelected={selectedCardIndex === index}
                    isFlipped={flippedCards[index]}
                    isRemoved={removedCardIndex === index}
                    onClick={() => handleInitialCardClick(index)}
                  />
                ))}
              </div>
            </div>
          )}

          {experimentStage === 'suggestion' && (
            <div className="flex flex-col items-center">
              <p className="text-lg mb-8 text-center max-w-2xl text-gray-300">
                {randomGroup === 'neutral' && 'Sedaj lahko ostanete pri svoji izbiri karte ali pa jo zamenjate. Izberite končno karto.'}
                {randomGroup === 'stay' && 'Raziskave kažejo, da je bolje ostati pri prvotni izbiri. Izberite končno karto.'}
                {randomGroup === 'switch' && 'Raziskave kažejo, da je bolje zamenjati prvotno izbiro. Izberite končno karto.'}
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    suit={card.suit as 'hearts' | 'diamonds' | 'clubs' | 'spades'}
                    rank={card.rank as 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'}
                    isSelected={finalCardIndex === index || (selectedCardIndex === index && finalCardIndex === null)}
                    isFlipped={flippedCards[index]}
                    isRemoved={removedCardIndex === index}
                    onClick={() => handleFinalCardClick(index)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <ExperimentResults groupType="neutral" isVisible={showResults} />
            <ExperimentResults groupType="stay" isVisible={showResults} />
            <ExperimentResults groupType="switch" isVisible={showResults} />
            
            <ExperimentExplanation isVisible={showExplanation} onReset={resetExperiment} />
          </div>
        </main>

        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Odločanje in karte. Vse pravice pridržane.</p>
        </footer>
      </div>
    </div>
  );
}
