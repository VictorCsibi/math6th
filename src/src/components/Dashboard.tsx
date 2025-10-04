import React from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '../hooks/useProgress';
import { getRandomQuote, getRandomMathFact } from '../utils/constants';
import { Badge as BadgeComponent, ProgressBar } from './ui';

export const Dashboard: React.FC = () => {
  const { progress, getOverallAccuracy, getOverallGrade } = useProgress();
  const quote = getRandomQuote();
  const mathFact = getRandomMathFact();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome to Math Academy!</h1>
        <p className="text-blue-100">Ready to challenge yourself with some math problems?</p>
      </motion.div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Overall Progress</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">{getOverallGrade()}</div>
          <ProgressBar progress={getOverallAccuracy()} />
          <p className="text-sm text-gray-600 mt-2">{Math.round(getOverallAccuracy())}% accuracy</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Streak</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">{progress.currentStreak}</div>
          <p className="text-sm text-gray-600">Best: {progress.bestStreak} problems</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Problems Solved</h3>
          <div className="text-3xl font-bold text-purple-600 mb-2">{progress.totalCorrect}</div>
          <p className="text-sm text-gray-600">out of {progress.totalProblemsAttempted}</p>
        </motion.div>
      </div>

      {/* Badges Section */}
      {progress.badges.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Badges</h3>
          <div className="flex flex-wrap gap-4">
            {progress.badges.slice(-6).map((badge) => (
              <BadgeComponent
                key={badge.id}
                icon={badge.icon}
                name={badge.name}
                description={badge.description}
                rarity={badge.rarity}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Motivational Quote */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card bg-gradient-to-r from-green-400 to-blue-500 text-white"
      >
        <h3 className="text-lg font-semibold mb-2">💡 Daily Inspiration</h3>
        <p className="italic">"{quote}"</p>
      </motion.div>

      {/* Math Fact */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
      >
        <h3 className="text-lg font-semibold mb-2">🔢 Did You Know?</h3>
        <p>{mathFact}</p>
      </motion.div>
    </div>
  );
};
