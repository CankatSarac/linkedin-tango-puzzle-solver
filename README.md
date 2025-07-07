# LinkedIn Tango Puzzle Solver

A free online solver for LinkedIn's Tango puzzle game, inspired by the daily puzzle challenges. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🧩 **Multiple Grid Sizes**: Interactive 4×4, 5×5, 6×6, and 7×7 grids
- ⚡ **Smart Solver**: Enhanced backtracking algorithm that finds multiple solutions
- 🔢 **Multiple Solutions Display**: View and navigate through all possible solutions
- 🔗 **Constraint System**: Add equals (=) and different (×) constraints between cells
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Improved UI**: Black text for better readability and modern interface
- 💡 **Example Puzzles**: Pre-loaded examples for each grid size
- 🔄 **Solution Navigation**: Browse through multiple solutions when available

## How to Play Tango

1. **Choose Grid Size**: Select from 4×4, 5×5, 6×6, or 7×7 grids
2. **Fill the Grid**: Place suns ☀️ and moons 🌙 in the grid
3. **Balance Rule**: Each row and column must contain equal numbers of suns and moons (for odd sizes, allow difference of 1)
4. **No Three in a Row**: No more than two identical symbols can be adjacent horizontally or vertically
5. **Constraint Rules**:
   - Cells with `=` between them must contain the same symbol
   - Cells with `×` between them must contain different symbols

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd linkedin-tango-solver
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Usage

1. **Choose Grid Size**: Select your preferred grid size (4×4, 5×5, 6×6, or 7×7)
2. **Load an Example**: Click "📝 Load Example" to try a pre-made puzzle for the selected size
3. **Set Constraints**: Click between cells to add = or × constraints
4. **Place Symbols**: Click on cells to place suns or moons
5. **Solve**: Click "🧩 Solve Puzzle" to automatically find all solutions
6. **Navigate Solutions**: Use Previous/Next buttons to browse through multiple solutions
7. **View All Solutions**: For puzzles with many solutions, click to view all at once
8. **Reset**: Click "🔄 Reset" to clear the grid

## Algorithm

The enhanced solver uses a backtracking algorithm with multiple solution detection:

1. **Constraint Checking**: Validates rules in real-time for different grid sizes
2. **Backtracking**: Systematically tries all possibilities to find all solutions
3. **Multiple Solution Detection**: Finds up to 100 solutions to prevent excessive computation
4. **Adaptive Rules**: Handles both even grids (equal symbols) and odd grids (difference of 1)
5. **Optimization**: Prunes invalid branches early for performance

## Tech Stack

- **Framework**: Next.js 15.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Build Tool**: Turbopack (Next.js built-in)

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # Main Tango solver component
├── components/
│   └── ui/               # Reusable UI components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── label.tsx
│       ├── select.tsx
│       └── separator.tsx
└── lib/
    └── utils.ts          # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - feel free to use this project for learning and personal use.

## Acknowledgments

- Inspired by LinkedIn's Tango puzzle game
- UI design influenced by modern puzzle solver interfaces
- Built with modern web technologies for optimal performance
