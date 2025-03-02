'use client';

import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExperimentResultsProps {
  groupType: 'neutral' | 'stay' | 'switch';
  isVisible: boolean;
}

export default function ExperimentResults({ groupType, isVisible }: ExperimentResultsProps) {
  const [chartData, setChartData] = useState({
    labels: ['Zamenjali', 'Ostali'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['rgba(249, 115, 22, 0.7)', 'rgba(34, 197, 94, 0.7)'],
        borderColor: ['rgba(249, 115, 22, 1)', 'rgba(34, 197, 94, 1)'],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Set data based on group type
    if (groupType === 'neutral') {
      setChartData({
        ...chartData,
        datasets: [
          {
            ...chartData.datasets[0],
            data: [50, 50], // 50% switched, 50% stayed
          },
        ],
      });
    } else if (groupType === 'stay') {
      setChartData({
        ...chartData,
        datasets: [
          {
            ...chartData.datasets[0],
            data: [22, 78], // 22% switched, 78% stayed
          },
        ],
      });
    } else if (groupType === 'switch') {
      setChartData({
        ...chartData,
        datasets: [
          {
            ...chartData.datasets[0],
            data: [70, 30], // 70% switched, 30% stayed
          },
        ],
      });
    }
  }, [groupType]);

  const getGroupTitle = () => {
    switch (groupType) {
      case 'neutral':
        return 'Skupina / (nevtralna)';
      case 'stay':
        return 'Skupina - (ostani)';
      case 'switch':
        return 'Skupina + (zamenjaj)';
      default:
        return '';
    }
  };

  const getGroupInstructions = () => {
    switch (groupType) {
      case 'neutral':
        return 'Udeleženci so dobili nevtralna navodila.';
      case 'stay':
        return 'Udeležencem je bilo povedano, da je bolje ostati pri prvotni izbiri.';
      case 'switch':
        return 'Udeležencem je bilo povedano, da je bolje zamenjati prvotno izbiro.';
      default:
        return '';
    }
  };

  const getGroupAnalysis = () => {
    switch (groupType) {
      case 'neutral':
        return 'Brez zunanjega vpliva so udeleženci izbrali enakomerno - polovica jih je zamenjala, polovica ostala pri prvotni izbiri, kar je v skladu s tem da gre za nevtralno oziroma testno skupino.';
      case 'stay':
        return 'Z navodilom, da naj ostanejo pri prvotni izbiri, je večina udeležencev (78%) sledila navodilu in ostala pri prvotni izbiri, kar je v skladu s tem da gre za skupino, ki je dobila navodila da ostanejo pri prvotni izbiri.';
      case 'switch':
        return 'Z navodilom, da naj zamenjajo prvotno izbiro, je večina udeležencev (70%) sledila navodilu in zamenjala prvotno izbiro, kar je v skladu s tem da gre za skupino, ki je dobila navodila da zamenjajo prvotno izbiro.';
      default:
        return '';
    }
  };

  const getGroupClass = () => {
    switch (groupType) {
      case 'neutral':
        return 'group-neutral';
      case 'stay':
        return 'group-stay';
      case 'switch':
        return 'group-switch';
      default:
        return '';
    }
  };

  return (
    <div className={`${isVisible ? 'fade-in' : 'hidden'} mt-8`}>
      <div className={`border-t-4 ${getGroupClass()} p-6 rounded-lg shadow-md bg-gray-800 text-white`}>
        <h2 className={`text-2xl font-bold mb-4 ${getGroupClass()}`}>{getGroupTitle()}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Rezultati</h3>
            <div className="h-64 flex items-center justify-center bg-gray-700 rounded-lg p-4">
              <Pie 
                data={chartData} 
                options={{ 
                  responsive: true,
                  plugins: {
                    legend: {
                      labels: {
                        color: 'white'
                      }
                    }
                  }
                }} 
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Dana navodila:</h3>
            <p className="mb-4 text-gray-300">{getGroupInstructions()}</p>
            
            <h3 className="text-xl font-semibold mb-2">Analiza</h3>
            <p className="text-gray-300">{getGroupAnalysis()}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 