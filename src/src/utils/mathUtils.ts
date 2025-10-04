import { evaluate, parse, simplify } from 'mathjs';

/**
 * Safely evaluates a mathematical expression
 */
export function safeEvaluate(expression: string): number | null {
  try {
    const result = evaluate(expression);
    return typeof result === 'number' ? result : null;
  } catch (error) {
    console.error('Error evaluating expression:', error);
    return null;
  }
}

/**
 * Checks if two numerical answers are equal within a tolerance
 */
export function isNumericallyEqual(
  answer1: number | string,
  answer2: number | string,
  tolerance: number = 0.01
): boolean {
  const num1 = typeof answer1 === 'string' ? parseFloat(answer1) : answer1;
  const num2 = typeof answer2 === 'string' ? parseFloat(answer2) : answer2;
  
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }
  
  return Math.abs(num1 - num2) <= tolerance;
}

/**
 * Simplifies an algebraic expression and compares with another
 */
export function isAlgebraicallyEqual(expr1: string, expr2: string): boolean {
  try {
    const simplified1 = simplify(parse(expr1));
    const simplified2 = simplify(parse(expr2));
    
    // Convert to string and compare
    return simplified1.toString() === simplified2.toString();
  } catch (error) {
    console.error('Error comparing algebraic expressions:', error);
    return false;
  }
}

/**
 * Generates a random integer between min and max (inclusive)
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random decimal with specified decimal places
 */
export function randomDecimal(min: number, max: number, decimalPlaces: number = 2): number {
  const random = Math.random() * (max - min) + min;
  return Math.round(random * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
}

/**
 * Generates a proper fraction (numerator < denominator)
 */
export function randomProperFraction(): { numerator: number; denominator: number } {
  const denominator = randomInt(2, 12);
  const numerator = randomInt(1, denominator - 1);
  return { numerator, denominator };
}

/**
 * Generates an improper fraction
 */
export function randomImproperFraction(): { numerator: number; denominator: number } {
  const denominator = randomInt(2, 12);
  const numerator = randomInt(denominator + 1, denominator * 3);
  return { numerator, denominator };
}

/**
 * Finds the greatest common divisor
 */
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Reduces a fraction to its simplest form
 */
export function reduceFraction(numerator: number, denominator: number): { numerator: number; denominator: number } {
  const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor
  };
}

/**
 * Formats a fraction as a string
 */
export function formatFraction(numerator: number, denominator: number): string {
  if (denominator === 1) return numerator.toString();
  if (numerator === 0) return '0';
  
  const reduced = reduceFraction(numerator, denominator);
  return `${reduced.numerator}/${reduced.denominator}`;
}

/**
 * Converts a decimal to a percentage
 */
export function toPercentage(decimal: number, decimalPlaces: number = 1): string {
  return `${(decimal * 100).toFixed(decimalPlaces)}%`;
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generates wrong answers for multiple choice questions
 */
export function generateWrongAnswers(
  correctAnswer: number,
  count: number = 3,
  range: number = 10
): number[] {
  const wrongAnswers: Set<number> = new Set();
  
  while (wrongAnswers.size < count) {
    const offset = randomInt(-range, range);
    const wrongAnswer = correctAnswer + offset;
    
    if (wrongAnswer !== correctAnswer && !wrongAnswers.has(wrongAnswer)) {
      wrongAnswers.add(wrongAnswer);
    }
  }
  
  return Array.from(wrongAnswers);
}
