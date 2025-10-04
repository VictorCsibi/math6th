import React from 'react';
import { motion } from 'framer-motion';
import type { MathTopic } from '../types';
import { getTopicConfig } from '../utils/constants';

interface TopicCardProps {
  topic: MathTopic;
  onClick: () => void;
  progress?: number;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, onClick, progress = 0 }) => {
  const config = getTopicConfig(topic);
  
  if (!config) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`card cursor-pointer border-l-4 ${config.borderColor} ${config.color} bg-opacity-10`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{config.icon}</span>
          <h3 className="text-xl font-bold text-gray-800">{config.name}</h3>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Progress</div>
          <div className="font-bold text-lg">{Math.round(progress)}%</div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{config.description}</p>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ${config.color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};
