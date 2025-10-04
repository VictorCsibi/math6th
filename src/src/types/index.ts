export interface Problem {
  id: string;
  topic: MathTopic;
  difficulty: DifficultyLevel;
  question: string;
  type: ProblemType;
  correctAnswer: number | string;
  options?: string[];
  explanation: string;
  hints?: string[];
}

export interface UserProgress {
  userId: string;
  totalProblemsAttempted: number;
  totalCorrect: number;
  topicProgress: Record<MathTopic, TopicProgress>;
  badges: Badge[];
  recentScores: number[];
  currentStreak: number;
  bestStreak: number;
}

export interface TopicProgress {
  topic: MathTopic;
  problemsAttempted: number;
  correctAnswers: number;
  averageScore: number;
  difficultiesUnlocked: DifficultyLevel[];
  lastAttempted: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateEarned: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface ProblemSession {
  sessionId: string;
  problems: Problem[];
  currentProblemIndex: number;
  userAnswers: (string | number | null)[];
  scores: number[];
  startTime: Date;
  endTime?: Date;
  topic: MathTopic;
  difficulty: DifficultyLevel;
}

export type MathTopic = 
  | 'fractions'
  | 'algebra'
  | 'geometry'
  | 'word-problems'
  | 'decimals'
  | 'percentages'
  | 'integers'
  | 'measurement';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type ProblemType = 
  | 'multiple-choice'
  | 'fill-in-blank'
  | 'drag-drop'
  | 'number-input'
  | 'equation-input';

export interface MathTopicConfig {
  id: MathTopic;
  name: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
  prerequisites?: MathTopic[];
}

export interface AnswerValidation {
  isCorrect: boolean;
  userAnswer: string | number;
  correctAnswer: string | number;
  tolerance?: number;
  explanation: string;
  score: number;
}
