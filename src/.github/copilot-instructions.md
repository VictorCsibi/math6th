<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Math Academy - Educational Math Website

This is a React-based educational math website for middle school students built with TypeScript, Tailwind CSS, and Framer Motion.

## Project Structure

- **Components**: Located in `src/components/`
  - `Dashboard.tsx` - Main dashboard with progress overview
  - `TopicCard.tsx` - Individual topic selection cards
  - `ui/` - Reusable UI components (Button, Card, ProgressBar, Badge, Input)

- **Types**: All TypeScript interfaces in `src/types/index.ts`
  - Problem, UserProgress, Badge, MathTopic, etc.

- **Utils**: Helper functions and constants
  - `mathUtils.ts` - Mathematical operations and validations 
  - `problemGenerators.ts` - Problem generation for different topics
  - `constants.ts` - Math topics configuration and motivational content

- **Hooks**: Custom React hooks
  - `useProgress.ts` - User progress tracking and localStorage persistence

## Key Features

1. **Homepage Dashboard** - Progress tracking, motivational quotes, badges
2. **Topic Selection** - Interactive cards for different math topics
3. **Progress Tracking** - Persistent progress storage with badges and streaks
4. **Responsive Design** - Mobile-friendly with Tailwind CSS
5. **Animations** - Smooth transitions with Framer Motion

## Development Guidelines

- Use TypeScript for all new components
- Follow the established component structure with proper typing
- Use Tailwind CSS classes for styling
- Implement proper error handling for mathematical operations
- Maintain accessibility with ARIA labels and semantic HTML
- Use Framer Motion for animations and transitions

## Math Topics Supported

- Fractions (addition, multiplication)
- Algebra (linear equations)
- Geometry (area problems)
- Word Problems (real-world scenarios)
- Decimals, Percentages, Integers, Measurement (planned)

## Problem Generation

Each math topic has its own problem generator class with difficulty levels (easy, medium, hard). Problems include:
- Question text
- Correct answer
- Explanation
- Multiple choice options (when applicable)
- Difficulty-based complexity scaling
