import { useState, useEffect } from 'react';
import type { UserProgress, Problem, AnswerValidation, Badge } from '../types';

const INITIAL_PROGRESS: UserProgress = {
  userId: 'default-user',
  totalProblemsAttempted: 0,
  totalCorrect: 0,
  topicProgress: {
    fractions: {
      topic: 'fractions',
      problemsAttempted: 0,
      correctAnswers: 0,
      averageScore: 0,
      difficultiesUnlocked: ['easy'],
      lastAttempted: new Date()
    },
    algebra: {
      topic: 'algebra',
      problemsAttempted: 0,
      correctAnswers: 0,
      averageScore: 0,
      difficultiesUnlocked: ['easy'],
      lastAttempted: new Date()
    },
    geometry: {
      topic: 'geometry',
      problemsAttempted: 0,
      correctAnswers: 0,
      averageScore: 0,
      difficultiesUnlocked: ['easy'],
      lastAttempted: new Date()
    },
    'word-problems': {
      topic: 'word-problems',
      problemsAttempted: 0,
      correctAnswers: 0,
      averageScore: 0,
      difficultiesUnlocked: ['easy'],
      lastAttempted: new Date()
    },
    decimals: {
      topic: 'decimals',
      problemsAttempted: 0,
      correctAnswers: 0,
      averageScore: 0,
      difficultiesUnlocked: ['easy'],
      lastAttempted: new Date()
    },
    percentages: {
      topic: 'percentages',
      problemsAttempted: 0,
      correctAnswers: 0,
      averageScore: 0,
      difficultiesUnlocked: ['easy'],
      lastAttempted: new Date()
    },
    integers: {
      topic: 'integers',
      problemsAttempted: 0,
      correctAnswers: 0,
      averageScore: 0,
      difficultiesUnlocked: ['easy'],
      lastAttempted: new Date()
    },
    measurement: {
      topic: 'measurement',
      problemsAttempted: 0,
      correctAnswers: 0,
      averageScore: 0,
      difficultiesUnlocked: ['easy'],
      lastAttempted: new Date()
    }
  },
  badges: [],
  recentScores: [],
  currentStreak: 0,
  bestStreak: 0
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(INITIAL_PROGRESS);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('math-progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProgress(parsed);
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('math-progress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (problem: Problem, validation: AnswerValidation) => {
    setProgress(prev => {
      const newProgress = { ...prev };
      
      // Update overall stats
      newProgress.totalProblemsAttempted += 1;
      if (validation.isCorrect) {
        newProgress.totalCorrect += 1;
        newProgress.currentStreak += 1;
        newProgress.bestStreak = Math.max(newProgress.bestStreak, newProgress.currentStreak);
      } else {
        newProgress.currentStreak = 0;
      }
      
      // Update recent scores (keep last 10)
      newProgress.recentScores = [validation.score, ...prev.recentScores].slice(0, 10);
      
      // Update topic progress
      const topicProg = newProgress.topicProgress[problem.topic];
      topicProg.problemsAttempted += 1;
      if (validation.isCorrect) {
        topicProg.correctAnswers += 1;
      }
      topicProg.averageScore = (topicProg.averageScore * (topicProg.problemsAttempted - 1) + validation.score) / topicProg.problemsAttempted;
      topicProg.lastAttempted = new Date();
      
      // Unlock new difficulties based on performance
      const accuracy = topicProg.correctAnswers / topicProg.problemsAttempted;
      if (accuracy >= 0.7 && topicProg.problemsAttempted >= 5 && !topicProg.difficultiesUnlocked.includes('medium')) {
        topicProg.difficultiesUnlocked.push('medium');
      }
      if (accuracy >= 0.8 && topicProg.problemsAttempted >= 10 && !topicProg.difficultiesUnlocked.includes('hard')) {
        topicProg.difficultiesUnlocked.push('hard');
      }
      
      // Check for new badges
      const newBadges = checkForNewBadges(newProgress, prev);
      newProgress.badges = [...prev.badges, ...newBadges];
      
      return newProgress;
    });
  };

  const resetProgress = () => {
    setProgress(INITIAL_PROGRESS);
    localStorage.removeItem('math-progress');
  };

  const getOverallAccuracy = (): number => {
    if (progress.totalProblemsAttempted === 0) return 0;
    return (progress.totalCorrect / progress.totalProblemsAttempted) * 100;
  };

  const getOverallGrade = (): string => {
    const accuracy = getOverallAccuracy();
    if (accuracy >= 90) return 'A+';
    if (accuracy >= 85) return 'A';
    if (accuracy >= 80) return 'B+';
    if (accuracy >= 75) return 'B';
    if (accuracy >= 70) return 'C+';
    if (accuracy >= 65) return 'C';
    if (accuracy >= 60) return 'D';
    return 'F';
  };

  return {
    progress,
    updateProgress,
    resetProgress,
    getOverallAccuracy,
    getOverallGrade
  };
}

function checkForNewBadges(current: UserProgress, previous: UserProgress): Badge[] {
  const badges: Badge[] = [];
  
  // First problem badge
  if (current.totalProblemsAttempted === 1 && previous.totalProblemsAttempted === 0) {
    badges.push({
      id: 'first-problem',
      name: 'Getting Started',
      description: 'Completed your first problem!',
      icon: '🎯',
      dateEarned: new Date(),
      rarity: 'common'
    });
  }
  
  // Streak badges
  if (current.currentStreak === 5 && previous.currentStreak < 5) {
    badges.push({
      id: 'streak-5',
      name: 'On Fire!',
      description: 'Got 5 problems correct in a row!',
      icon: '🔥',
      dateEarned: new Date(),
      rarity: 'rare'
    });
  }
  
  if (current.currentStreak === 10 && previous.currentStreak < 10) {
    badges.push({
      id: 'streak-10',
      name: 'Unstoppable!',
      description: 'Got 10 problems correct in a row!',
      icon: '⚡',
      dateEarned: new Date(),
      rarity: 'epic'
    });
  }
  
  // Milestone badges
  if (current.totalProblemsAttempted >= 50 && previous.totalProblemsAttempted < 50) {
    badges.push({
      id: 'milestone-50',
      name: 'Dedicated Learner',
      description: 'Completed 50 problems!',
      icon: '📚',
      dateEarned: new Date(),
      rarity: 'rare'
    });
  }
  
  if (current.totalProblemsAttempted >= 100 && previous.totalProblemsAttempted < 100) {
    badges.push({
      id: 'milestone-100',
      name: 'Math Champion',
      description: 'Completed 100 problems!',
      icon: '🏆',
      dateEarned: new Date(),
      rarity: 'epic'
    });
  }
  
  // Perfect score badge
  if (current.totalCorrect >= 20 && (current.totalCorrect / current.totalProblemsAttempted) === 1) {
    const hasPerfectBadge = previous.badges.some(b => b.id === 'perfect-20');
    if (!hasPerfectBadge) {
      badges.push({
        id: 'perfect-20',
        name: 'Perfectionist',
        description: 'Got 20 problems correct with no mistakes!',
        icon: '💎',
        dateEarned: new Date(),
        rarity: 'legendary'
      });
    }
  }
  
  return badges;
}
