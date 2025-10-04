import type { Problem, DifficultyLevel } from '../types';
import { randomInt, randomDecimal, randomProperFraction, randomImproperFraction, formatFraction, reduceFraction, generateWrongAnswers, shuffleArray } from '../utils/mathUtils';

export class FractionProblems {
  static generateAddition(difficulty: DifficultyLevel): Problem {
    const id = `fraction-add-${Date.now()}-${randomInt(1000, 9999)}`;
    
    let frac1, frac2, answer, question, explanation;
    
    if (difficulty === 'easy') {
      // Same denominators
      const denominator = randomInt(2, 10);
      const num1 = randomInt(1, denominator - 1);
      const num2 = randomInt(1, denominator - num1);
      
      frac1 = { numerator: num1, denominator };
      frac2 = { numerator: num2, denominator };
      answer = formatFraction(num1 + num2, denominator);
      
      question = `What is ${formatFraction(num1, denominator)} + ${formatFraction(num2, denominator)}?`;
      explanation = `Since both fractions have the same denominator (${denominator}), we can add the numerators: ${num1} + ${num2} = ${num1 + num2}. So the answer is ${answer}.`;
    } else {
      // Different denominators
      frac1 = randomProperFraction();
      frac2 = randomProperFraction();
      
      // Find common denominator
      const lcm = (frac1.denominator * frac2.denominator) / gcd(frac1.denominator, frac2.denominator);
      const newNum1 = frac1.numerator * (lcm / frac1.denominator);
      const newNum2 = frac2.numerator * (lcm / frac2.denominator);
      
      const sumNumerator = newNum1 + newNum2;
      const reduced = reduceFraction(sumNumerator, lcm);
      answer = formatFraction(reduced.numerator, reduced.denominator);
      
      question = `What is ${formatFraction(frac1.numerator, frac1.denominator)} + ${formatFraction(frac2.numerator, frac2.denominator)}?`;
      explanation = `First, find a common denominator. The LCD of ${frac1.denominator} and ${frac2.denominator} is ${lcm}. Convert: ${formatFraction(frac1.numerator, frac1.denominator)} = ${formatFraction(newNum1, lcm)} and ${formatFraction(frac2.numerator, frac2.denominator)} = ${formatFraction(newNum2, lcm)}. Then add: ${formatFraction(newNum1, lcm)} + ${formatFraction(newNum2, lcm)} = ${formatFraction(sumNumerator, lcm)} = ${answer}.`;
    }
    
    return {
      id,
      topic: 'fractions',
      difficulty,
      question,
      type: 'fill-in-blank',
      correctAnswer: answer,
      explanation,
    };
  }

  static generateMultiplication(difficulty: DifficultyLevel): Problem {
    const id = `fraction-mult-${Date.now()}-${randomInt(1000, 9999)}`;
    
    const frac1 = difficulty === 'easy' ? randomProperFraction() : randomImproperFraction();
    const frac2 = randomProperFraction();
    
    const resultNum = frac1.numerator * frac2.numerator;
    const resultDen = frac1.denominator * frac2.denominator;
    const reduced = reduceFraction(resultNum, resultDen);
    const answer = formatFraction(reduced.numerator, reduced.denominator);
    
    const question = `What is ${formatFraction(frac1.numerator, frac1.denominator)} × ${formatFraction(frac2.numerator, frac2.denominator)}?`;
    const explanation = `To multiply fractions, multiply the numerators together and the denominators together: (${frac1.numerator} × ${frac2.numerator}) ÷ (${frac1.denominator} × ${frac2.denominator}) = ${formatFraction(resultNum, resultDen)}${reduced.numerator !== resultNum ? ` = ${answer}` : ''}.`;
    
    return {
      id,
      topic: 'fractions',
      difficulty,
      question,
      type: 'fill-in-blank',
      correctAnswer: answer,
      explanation,
    };
  }
}

export class AlgebraProblems {
  static generateLinearEquation(difficulty: DifficultyLevel): Problem {
    const id = `algebra-linear-${Date.now()}-${randomInt(1000, 9999)}`;
    
    let equation, answer, explanation;
    
    if (difficulty === 'easy') {
      // Simple x + a = b format
      const a = randomInt(1, 20);
      const x = randomInt(1, 15);
      const b = x + a;
      
      equation = `x + ${a} = ${b}`;
      answer = x;
      explanation = `To solve x + ${a} = ${b}, subtract ${a} from both sides: x = ${b} - ${a} = ${x}.`;
    } else if (difficulty === 'medium') {
      // ax + b = c format
      const a = randomInt(2, 8);
      const b = randomInt(1, 15);
      const x = randomInt(1, 10);
      const c = a * x + b;
      
      equation = `${a}x + ${b} = ${c}`;
      answer = x;
      explanation = `To solve ${a}x + ${b} = ${c}, first subtract ${b} from both sides: ${a}x = ${c - b}. Then divide by ${a}: x = ${(c - b) / a} = ${x}.`;
    } else {
      // ax + b = cx + d format
      const a = randomInt(2, 6);
      const c = randomInt(2, 6);
      const x = randomInt(1, 8);
      const b = c * x + randomInt(1, 10);
      const d = a * x;
      
      equation = `${a}x + ${b} = ${c}x + ${d}`;
      answer = x;
      explanation = `To solve ${a}x + ${b} = ${c}x + ${d}, first subtract ${c}x from both sides: ${a - c}x + ${b} = ${d}. Then subtract ${b}: ${a - c}x = ${d - b}. Finally divide by ${a - c}: x = ${(d - b) / (a - c)} = ${x}.`;
    }
    
    const question = `Solve for x: ${equation}`;
    
    return {
      id,
      topic: 'algebra',
      difficulty,
      question,
      type: 'number-input',
      correctAnswer: answer,
      explanation,
    };
  }
}

export class GeometryProblems {
  static generateAreaProblem(difficulty: DifficultyLevel): Problem {
    const id = `geometry-area-${Date.now()}-${randomInt(1000, 9999)}`;
    
    const shapes = ['rectangle', 'triangle', 'circle'];
    const shape = shapes[randomInt(0, difficulty === 'easy' ? 1 : shapes.length - 1)];
    
    let question, answer, explanation;
    
    if (shape === 'rectangle') {
      const length = randomInt(3, 15);
      const width = randomInt(3, 12);
      answer = length * width;
      
      question = `What is the area of a rectangle with length ${length} units and width ${width} units?`;
      explanation = `The area of a rectangle is length × width = ${length} × ${width} = ${answer} square units.`;
    } else if (shape === 'triangle') {
      const base = randomInt(4, 16);
      const height = randomInt(3, 12);
      answer = (base * height) / 2;
      
      question = `What is the area of a triangle with base ${base} units and height ${height} units?`;
      explanation = `The area of a triangle is (base × height) ÷ 2 = (${base} × ${height}) ÷ 2 = ${answer} square units.`;
    } else {
      const radius = randomInt(2, 8);
      answer = Math.round(Math.PI * radius * radius * 100) / 100;
      
      question = `What is the area of a circle with radius ${radius} units? (Use π ≈ 3.14, round to 2 decimal places)`;
      explanation = `The area of a circle is πr² = 3.14 × ${radius}² = 3.14 × ${radius * radius} = ${answer} square units.`;
    }
    
    return {
      id,
      topic: 'geometry',
      difficulty,
      question,
      type: 'number-input',
      correctAnswer: answer,
      explanation,
    };
  }
}

export class WordProblems {
  static generateProblem(difficulty: DifficultyLevel): Problem {
    const id = `word-problem-${Date.now()}-${randomInt(1000, 9999)}`;
    
    const scenarios = [
      'shopping',
      'travel',
      'cooking',
      'sports',
      'school'
    ];
    
    const scenario = scenarios[randomInt(0, scenarios.length - 1)];
    
    if (scenario === 'shopping') {
      const itemPrice = randomDecimal(5, 50, 2);
      const quantity = randomInt(2, 8);
      const tax = difficulty === 'hard' ? randomDecimal(0.05, 0.1, 3) : 0;
      
      const subtotal = itemPrice * quantity;
      const total = subtotal + (subtotal * tax);
      const answer = Math.round(total * 100) / 100;
      
      const question = tax > 0 
        ? `Sarah buys ${quantity} items at $${itemPrice} each. If there's a ${(tax * 100).toFixed(1)}% tax, what is the total cost?`
        : `Sarah buys ${quantity} items at $${itemPrice} each. What is the total cost?`;
      
      const explanation = tax > 0
        ? `First calculate subtotal: ${quantity} × $${itemPrice} = $${subtotal}. Then add tax: $${subtotal} × ${(tax * 100).toFixed(1)}% = $${(subtotal * tax).toFixed(2)}. Total: $${subtotal} + $${(subtotal * tax).toFixed(2)} = $${answer}.`
        : `Total cost = quantity × price = ${quantity} × $${itemPrice} = $${answer}.`;
      
      return {
        id,
        topic: 'word-problems',
        difficulty,
        question,
        type: 'number-input',
        correctAnswer: answer,
        explanation,
      };
    }
    
    // Default case - simple addition/subtraction problem
    const num1 = randomInt(10, 100);
    const num2 = randomInt(5, 50);
    const operation = Math.random() > 0.5 ? 'addition' : 'subtraction';
    const answer = operation === 'addition' ? num1 + num2 : num1 - num2;
    
    const question = operation === 'addition'
      ? `Tom has ${num1} marbles and receives ${num2} more. How many marbles does he have now?`
      : `Lisa has ${num1} stickers and gives away ${num2}. How many stickers does she have left?`;
    
    const explanation = operation === 'addition'
      ? `${num1} + ${num2} = ${answer} marbles.`
      : `${num1} - ${num2} = ${answer} stickers.`;
    
    return {
      id,
      topic: 'word-problems',
      difficulty,
      question,
      type: 'number-input',
      correctAnswer: answer,
      explanation,
    };
  }
}

// Helper function for GCD (Greatest Common Divisor)
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}
