# Math Academy - Educational Website for Middle School Students

A React-based educational math website designed to help middle school students practice and improve their math skills through interactive problems and gamification.

## 🚀 Features

### ✅ Completed Features

- **Interactive Dashboard** - Welcoming homepage with progress overview, motivational quotes, and math facts
- **Progress Tracking** - Persistent storage of user progress, scores, streaks, and badges
- **Topic Selection** - Beautiful animated cards for different math topics
- **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- **Gamification Elements** - Badge system with different rarities and achievement tracking
- **Smooth Animations** - Framer Motion animations for enhanced user experience

### 🔄 In Development

- **Problem Generator** - Dynamic math problem generation for each topic
- **Answer Evaluation System** - Robust validation with tolerance for numerical answers
- **Grading & Feedback** - Immediate feedback with explanations and retry options

### 📋 Planned Features

- **Multiple Problem Types** - Multiple choice, fill-in-blank, drag-and-drop
- **Voice Narration** - Audio support for accessibility
- **Teacher Dashboard** - Classroom mode and progress monitoring
- **Advanced Topics** - More math subjects and difficulty levels

## 🎯 Math Topics

- 🍕 **Fractions** - Add, subtract, multiply, and divide fractions
- 📐 **Algebra** - Solve equations and work with variables  
- 🔷 **Geometry** - Explore shapes, angles, and spatial relationships
- 📖 **Word Problems** - Apply math skills to real-world scenarios
- 🔢 **Decimals** - Work with decimal numbers and place values
- 📊 **Percentages** - Calculate percentages and solve percent problems
- ➕➖ **Integers** - Work with positive and negative numbers
- 📏 **Measurement** - Convert units and solve measurement problems

## 🛠️ Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Math.js** for mathematical operations
- **Lucide React** for icons

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── Dashboard.tsx # Main dashboard component
│   └── TopicCard.tsx # Topic selection cards
├── hooks/
│   └── useProgress.ts # Progress tracking hook
├── types/
│   └── index.ts      # TypeScript type definitions
├── utils/
│   ├── constants.ts  # App constants and configurations
│   ├── mathUtils.ts  # Mathematical utility functions
│   └── problemGenerators.ts # Problem generation logic
└── App.tsx          # Main application component
```

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## 🎮 How to Use

1. **Start Learning** - Open the app and view your progress dashboard
2. **Choose a Topic** - Click on any math topic card to begin practicing
3. **Track Progress** - Watch your accuracy improve and earn badges
4. **Stay Motivated** - Read daily math facts and inspirational quotes

## 🏆 Badge System

- 🎯 **Getting Started** - Complete your first problem
- 🔥 **On Fire!** - Get 5 problems correct in a row
- ⚡ **Unstoppable!** - Get 10 problems correct in a row  
- 📚 **Dedicated Learner** - Complete 50 problems
- 🏆 **Math Champion** - Complete 100 problems
- 💎 **Perfectionist** - Get 20 problems correct with no mistakes

## 🤝 Contributing

This project is designed with modular architecture for easy expansion:

- Add new math topics by creating generators in `problemGenerators.ts`
- Extend the UI with new components in `components/ui/`
- Enhance progress tracking in `useProgress.ts`
- Add new badge types and achievements

## 📱 Accessibility

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- Responsive design for all devices
- High contrast color schemes

## 📄 License

This project is open source and available under the MIT License.
