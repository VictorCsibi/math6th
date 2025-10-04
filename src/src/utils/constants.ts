import type { MathTopic, MathTopicConfig } from '../types';

export const MATH_TOPICS: MathTopicConfig[] = [
  {
    id: 'fractions',
    name: 'Fractions',
    description: 'Learn to add, subtract, multiply, and divide fractions',
    icon: '🍕',
    color: 'bg-red-500',
    borderColor: 'border-red-500'
  },
  {
    id: 'algebra',
    name: 'Algebra',
    description: 'Solve equations and work with variables',
    icon: '📐',
    color: 'bg-blue-500',
    borderColor: 'border-blue-500'
  },
  {
    id: 'geometry',
    name: 'Geometry',
    description: 'Explore shapes, angles, and spatial relationships',
    icon: '🔷',
    color: 'bg-purple-500',
    borderColor: 'border-purple-500'
  },
  {
    id: 'word-problems',
    name: 'Word Problems',
    description: 'Apply math skills to real-world scenarios',
    icon: '📖',
    color: 'bg-green-500',
    borderColor: 'border-green-500'
  },
  {
    id: 'decimals',
    name: 'Decimals',
    description: 'Work with decimal numbers and place values',
    icon: '🔢',
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-500'
  },
  {
    id: 'percentages',
    name: 'Percentages',
    description: 'Calculate percentages and solve percent problems',
    icon: '📊',
    color: 'bg-indigo-500',
    borderColor: 'border-indigo-500'
  },
  {
    id: 'integers',
    name: 'Integers',
    description: 'Work with positive and negative whole numbers',
    icon: '➕➖',
    color: 'bg-teal-500',
    borderColor: 'border-teal-500'
  },
  {
    id: 'measurement',
    name: 'Measurement',
    description: 'Convert units and solve measurement problems',
    icon: '📏',
    color: 'bg-pink-500',
    borderColor: 'border-pink-500'
  }
];

export const MOTIVATIONAL_QUOTES = [
  "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston",
  "The only way to learn mathematics is to do mathematics. - Paul Halmos",
  "Mathematics is the music of reason. - James Joseph Sylvester",
  "In mathematics, you don't understand things. You just get used to them. - John von Neumann",
  "Mathematics is the key and door to the sciences. - Galileo Galilei",
  "Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein",
  "Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country. - David Hilbert",
  "The study of mathematics is apt to commence in disappointment... We are told that by its aid the stars are weighed and the billions of molecules in a drop of water are counted. Yet, like the ghost of Hamlet's father, this great science eludes the efforts of our mental weapons to grasp it. - Alfred North Whitehead"
];

export const MATH_FACTS = [
  "Zero is the only number that is neither positive nor negative!",
  "The word 'mathematics' comes from the Greek word 'mathema', meaning 'knowledge' or 'learning'.",
  "A pizza that has radius 'z' and height 'a' has volume π × z × z × a = pizza!",
  "The number 9 is considered a 'magic number' because any number multiplied by 9 has digits that add up to 9!",
  "There are more possible games of chess than there are atoms in the observable universe!",
  "The Fibonacci sequence appears everywhere in nature - from flower petals to seashells!",
  "Ancient Egyptians used fractions in the form of unit fractions (1/2, 1/3, 1/4, etc.).",
  "The symbol π (pi) was first used by Welsh mathematician William Jones in 1706."
];

export function getRandomQuote(): string {
  return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
}

export function getRandomMathFact(): string {
  return MATH_FACTS[Math.floor(Math.random() * MATH_FACTS.length)];
}

export function getTopicConfig(topic: MathTopic): MathTopicConfig | undefined {
  return MATH_TOPICS.find(t => t.id === topic);
}
