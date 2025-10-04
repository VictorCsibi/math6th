# Development Guide

## Getting Started

This is a React application for 6th grade math problem evaluators.

### Prerequisites
- Node.js (v20+)
- npm (v10+)

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Opens the app at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Testing
```bash
npm test
```

## Project Structure

```
math6th/
├── public/           # Static files
│   ├── index.html   # HTML template
│   └── favicon.ico  # Site icon
├── src/             # Source files
│   ├── App.js       # Main App component
│   ├── App.css      # App styles
│   ├── index.js     # Entry point
│   └── index.css    # Global styles
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation
```

## Adding Math Problem Evaluators

To add a new math problem evaluator:

1. Create a new component in `src/components/` (e.g., `FractionEvaluator.js`)
2. Import and add it to `src/App.js` in the main section
3. Style it using CSS modules or inline styles

### Example Component

```jsx
// src/components/FractionEvaluator.js
import React, { useState } from 'react';

function FractionEvaluator() {
  const [numerator, setNumerator] = useState('');
  const [denominator, setDenominator] = useState('');
  
  return (
    <div className="evaluator">
      <h2>Fraction Evaluator</h2>
      <input 
        type="number" 
        value={numerator}
        onChange={(e) => setNumerator(e.target.value)}
        placeholder="Numerator"
      />
      <input 
        type="number" 
        value={denominator}
        onChange={(e) => setDenominator(e.target.value)}
        placeholder="Denominator"
      />
      {/* Add evaluation logic here */}
    </div>
  );
}

export default FractionEvaluator;
```

Then in `App.js`:
```jsx
import FractionEvaluator from './components/FractionEvaluator';

// Inside the main section:
<main className="App-main">
  <FractionEvaluator />
</main>
```

## Best Practices

- Keep components small and focused
- Use meaningful variable names
- Add comments for complex logic
- Test each evaluator thoroughly
- Follow React hooks conventions
