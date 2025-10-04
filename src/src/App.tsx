import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dashboard } from './components/Dashboard';
import { TopicCard } from './components/TopicCard';
import { MATH_TOPICS } from './utils/constants';
import { useProgress } from './hooks/useProgress';
import type { MathTopic } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'topic'>('home');
  const [selectedTopic, setSelectedTopic] = useState<MathTopic | null>(null);
  const { progress } = useProgress();

  const handleTopicSelect = (topic: MathTopic) => {
    setSelectedTopic(topic);
    setCurrentView('topic');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedTopic(null);
  };

  const getTopicProgress = (topic: MathTopic): number => {
    const topicProg = progress.topicProgress[topic];
    if (topicProg.problemsAttempted === 0) return 0;
    return (topicProg.correctAnswers / topicProg.problemsAttempted) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleBackToHome}
          >
            <span className="text-2xl">🎓</span>
            <h1 className="text-2xl font-bold text-gray-800">Math Academy</h1>
          </motion.div>
          
          <nav className="flex items-center space-x-4">
            <button 
              onClick={handleBackToHome}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Home
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Grade:</span>
              <span className="font-bold text-blue-600">{progress.totalProblemsAttempted > 0 ? 
                Math.round((progress.totalCorrect / progress.totalProblemsAttempted) * 100) : 0}%</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {currentView === 'home' ? (
          <div className="space-y-8">
            {/* Dashboard */}
            <Dashboard />
            
            {/* Topics Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Topic</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {MATH_TOPICS.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={topic.id}
                    onClick={() => handleTopicSelect(topic.id)}
                    progress={getTopicProgress(topic.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Topic Practice Coming Soon!
              </h2>
              <p className="text-gray-600 mb-8">
                The {selectedTopic} practice mode is being developed.
              </p>
              <button 
                onClick={handleBackToHome}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Back to Home
              </button>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
