import React, { useState, useEffect, useCallback } from ‘react’;

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 16;
const BLOCK_SIZE = 24;

// ゴージャスなペントミノ定義（宝石風カラー）
const PENTOMINOES = {
F: {
shape: [[0,1,1],[1,1,0],[0,1,0]],
colors: { main: ‘#FF1744’, light: ‘#FF8A80’, dark: ‘#D50000’, glow: ‘#FF5252’ }
},
I: {
shape: [[1],[1],[1],[1],[1]],
colors: { main: ‘#00E5FF’, light: ‘#84FFFF’, dark: ‘#00B8D4’, glow: ‘#18FFFF’ }
},
L: {
shape: [[1,0],[1,0],[1,0],[1,1]],
colors: { main: ‘#FF9100’, light: ‘#FFD180’, dark: ‘#FF6D00’, glow: ‘#FFAB40’ }
},
N: {
shape: [[0,1],[1,1],[1,0],[1,0]],
colors: { main: ‘#76FF03’, light: ‘#CCFF90’, dark: ‘#64DD17’, glow: ‘#B2FF59’ }
},
P: {
shape: [[1,1],[1,1],[1,0]],
colors: { main: ‘#E040FB’, light: ‘#EA80FC’, dark: ‘#AA00FF’, glow: ‘#D500F9’ }
},
T: {
shape: [[1,1,1],[0,1,0],[0,1,0]],
colors: { main: ‘#7C4DFF’, light: ‘#B388FF’, dark: ‘#651FFF’, glow: ‘#7C4DFF’ }
},
U: {
shape: [[1,0,1],[1,1,1]],
colors: { main: ‘#FFEA00’, light: ‘#FFFF8D’, dark: ‘#FFD600’, glow: ‘#FFFF00’ }
},
V: {
shape: [[1,0,0],[1,0,0],[1,1,1]],
colors: { main: ‘#1DE9B6’, light: ‘#A7FFEB’, dark: ‘#00BFA5’, glow: ‘#64FFDA’ }
},
W: {
shape: [[1,0,0],[1,1,0],[0,1,1]],
colors: { main: ‘#F50057’, light: ‘#FF80AB’, dark: ‘#C51162’, glow: ‘#FF4081’ }
},
X: {
shape: [[0,1,0],[1,1,1],[0,1,0]],
colors: { main: ‘#00B0FF’, light: ‘#80D8FF’, dark: ‘#0091EA’, glow: ‘#40C4FF’ }
},
Y: {
shape: [[0,1],[1,1],[0,1],[0,1]],
colors: { main: ‘#FFD740’, light: ‘#FFE57F’, dark: ‘#FFC400’, glow: ‘#FFAB00’ }
},
Z: {
shape: [[1,1,0],[0,1,0],[0,1,1]],
colors: { main: ‘#FF6E40’, light: ‘#FFAB91’, dark: ‘#FF3D00’, glow: ‘#FF9E80’ }
}
};

const PIECE_KEYS = Object.keys(PENTOMINOES);

// ゴージャスブロックコンポーネント
const GemBlock = ({ colors, size }) => {
if (!colors) {
return (
<div
style={{
width: size,
height: size,
background: ‘linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)’,
borderRadius: 2
}}
/>
);
}

return (
<div
style={{
width: size,
height: size,
background: `radial-gradient(ellipse at 30% 30%, ${colors.light} 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, ${colors.dark} 0%, transparent 50%), linear-gradient(135deg, ${colors.light} 0%, ${colors.main} 30%, ${colors.dark} 100%)`,
borderRadius: 4,
boxShadow: `inset 2px 2px 4px rgba(255,255,255,0.5), inset -1px -1px 3px rgba(0,0,0,0.4), 0 0 8px ${colors.glow}88, 0 2px 4px rgba(0,0,0,0.5)`,
border: `1px solid ${colors.light}66`,
position: ‘relative’,
overflow: ‘hidden’
}}
>
{/* キラキラエフェクト */}
<div style={{
position: ‘absolute’,
top: 3,
left: 3,
width: 6,
height: 6,
background: ‘radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)’,
borderRadius: ‘50%’
}} />
<div style={{
position: ‘absolute’,
top: 5,
right: 5,
width: 3,
height: 3,
background: ‘rgba(255,255,255,0.6)’,
borderRadius: ‘50%’
}} />
</div>
);
};

export default function PentominoGame() {
const [board, setBoard] = useState(() =>
Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(null))
);
const [currentPiece, setCurrentPiece] = useState(null);
const [position, setPosition] = useState({ x: 0, y: 0 });
const [score, setScore] = useState(0);
const [lines, setLines] = useState(0);
const [gameOver, setGameOver] = useState(false);
const [isPaused, setIsPaused] = useState(false);
const [level, setLevel] = useState(1);

const getRandomPiece = useCallback(() => {
const key = PIECE_KEYS[Math.floor(Math.random() * PIECE_KEYS.length)];
return { …PENTOMINOES[key], type: key };
}, []);

const rotateMatrix = (matrix) => {
const rows = matrix.length;
const cols = matrix[0].length;
const rotated = Array(cols).fill(null).map(() => Array(rows).fill(0));
for (let r = 0; r < rows; r++) {
for (let c = 0; c < cols; c++) {
rotated[c][rows - 1 - r] = matrix[r][c];
}
}
return rotated;
};

const isValidPosition = useCallback((piece, pos, boardState) => {
if (!piece) return false;
for (let r = 0; r < piece.shape.length; r++) {
for (let c = 0; c < piece.shape[r].length; c++) {
if (piece.shape[r][c]) {
const newX = pos.x + c;
const newY = pos.y + r;
if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) return false;
if (newY >= 0 && boardState[newY][newX]) return false;
}
}
}
return true;
}, []);

const spawnPiece = useCallback(() => {
const piece = getRandomPiece();
const startX = Math.floor((BOARD_WIDTH - piece.shape[0].length) / 2);
const startPos = { x: startX, y: 0 };

```
if (!isValidPosition(piece, startPos, board)) {
  setGameOver(true);
  return;
}
setCurrentPiece(piece);
setPosition(startPos);
```

}, [getRandomPiece, isValidPosition, board]);

const lockPiece = useCallback(() => {
if (!currentPiece) return;

```
const newBoard = board.map(row => [...row]);

for (let r = 0; r < currentPiece.shape.length; r++) {
  for (let c = 0; c < currentPiece.shape[r].length; c++) {
    if (currentPiece.shape[r][c]) {
      const y = position.y + r;
      const x = position.x + c;
      if (y >= 0 && y < BOARD_HEIGHT && x >= 0 && x < BOARD_WIDTH) {
        newBoard[y][x] = currentPiece.colors;
      }
    }
  }
}

let clearedLines = 0;
const filteredBoard = newBoard.filter(row => {
  const isFull = row.every(cell => cell !== null);
  if (isFull) clearedLines++;
  return !isFull;
});

while (filteredBoard.length < BOARD_HEIGHT) {
  filteredBoard.unshift(Array(BOARD_WIDTH).fill(null));
}

if (clearedLines > 0) {
  const points = [0, 100, 300, 500, 800, 1200][Math.min(clearedLines, 5)] * level;
  setScore(s => s + points);
  setLines(l => {
    const newLines = l + clearedLines;
    setLevel(Math.floor(newLines / 10) + 1);
    return newLines;
  });
}

setBoard(filteredBoard);
setCurrentPiece(null);
```

}, [currentPiece, position, board, level]);

const moveDown = useCallback(() => {
if (!currentPiece || gameOver || isPaused) return;
const newPos = { …position, y: position.y + 1 };
if (isValidPosition(currentPiece, newPos, board)) {
setPosition(newPos);
} else {
lockPiece();
}
}, [currentPiece, position, board, isValidPosition, lockPiece, gameOver, isPaused]);

const moveHorizontal = useCallback((dir) => {
if (!currentPiece || gameOver || isPaused) return;
const newPos = { …position, x: position.x + dir };
if (isValidPosition(currentPiece, newPos, board)) {
setPosition(newPos);
}
}, [currentPiece, position, board, isValidPosition, gameOver, isPaused]);

const rotate = useCallback(() => {
if (!currentPiece || gameOver || isPaused) return;
const rotatedShape = rotateMatrix(currentPiece.shape);
const rotatedPiece = { …currentPiece, shape: rotatedShape };

```
const kicks = [0, -1, 1, -2, 2];
for (const kick of kicks) {
  const newPos = { ...position, x: position.x + kick };
  if (isValidPosition(rotatedPiece, newPos, board)) {
    setCurrentPiece(rotatedPiece);
    setPosition(newPos);
    return;
  }
}
```

}, [currentPiece, position, board, isValidPosition, gameOver, isPaused]);

const hardDrop = useCallback(() => {
if (!currentPiece || gameOver || isPaused) return;
let newY = position.y;
while (isValidPosition(currentPiece, { …position, y: newY + 1 }, board)) {
newY++;
}
setPosition({ …position, y: newY });
setTimeout(lockPiece, 50);
}, [currentPiece, position, board, isValidPosition, lockPiece, gameOver, isPaused]);

const resetGame = () => {
setBoard(Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(null)));
setCurrentPiece(null);
setPosition({ x: 0, y: 0 });
setScore(0);
setLines(0);
setLevel(1);
setGameOver(false);
setIsPaused(false);
};

useEffect(() => {
const handleKeyDown = (e) => {
if (gameOver) return;
switch (e.key) {
case ‘ArrowLeft’: e.preventDefault(); moveHorizontal(-1); break;
case ‘ArrowRight’: e.preventDefault(); moveHorizontal(1); break;
case ‘ArrowDown’: e.preventDefault(); moveDown(); break;
case ‘ArrowUp’: e.preventDefault(); rotate(); break;
case ’ ’: e.preventDefault(); hardDrop(); break;
case ‘p’: case ‘P’: setIsPaused(p => !p); break;
}
};
window.addEventListener(‘keydown’, handleKeyDown);
return () => window.removeEventListener(‘keydown’, handleKeyDown);
}, [moveHorizontal, moveDown, rotate, hardDrop, gameOver]);

useEffect(() => {
if (gameOver || isPaused) return;
const speed = Math.max(100, 700 - (level - 1) * 70);
const interval = setInterval(moveDown, speed);
return () => clearInterval(interval);
}, [moveDown, gameOver, isPaused, level]);

useEffect(() => {
if (!currentPiece && !gameOver) spawnPiece();
}, [currentPiece, spawnPiece, gameOver]);

const displayBoard = board.map(row => […row]);
if (currentPiece) {
for (let r = 0; r < currentPiece.shape.length; r++) {
for (let c = 0; c < currentPiece.shape[r].length; c++) {
if (currentPiece.shape[r][c]) {
const y = position.y + r;
const x = position.x + c;
if (y >= 0 && y < BOARD_HEIGHT && x >= 0 && x < BOARD_WIDTH) {
displayBoard[y][x] = currentPiece.colors;
}
}
}
}
}

const ControlButton = ({ onPress, children, style = {} }) => (
<button
onTouchStart={(e) => { e.preventDefault(); onPress(); }}
onMouseDown={onPress}
style={{
width: 56,
height: 56,
borderRadius: 12,
border: ‘none’,
background: ‘linear-gradient(145deg, #3a3a5c, #2a2a4c)’,
boxShadow: ‘4px 4px 10px #1a1a2e, -2px -2px 8px #4a4a6e, inset 1px 1px 2px rgba(255,255,255,0.1)’,
color: ‘white’,
fontSize: 24,
display: ‘flex’,
alignItems: ‘center’,
justifyContent: ‘center’,
cursor: ‘pointer’,
userSelect: ‘none’,
WebkitTapHighlightColor: ‘transparent’,
…style
}}
>
{children}
</button>
);

return (
<div style={{
minHeight: ‘100vh’,
background: ‘linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)’,
padding: ‘8px’,
display: ‘flex’,
flexDirection: ‘column’,
alignItems: ‘center’,
fontFamily: ‘system-ui, sans-serif’,
overflow: ‘hidden’
}}>
{/* ヘッダー: スコア表示 */}
<div style={{
display: ‘flex’,
justifyContent: ‘space-around’,
width: ‘100%’,
maxWidth: 320,
marginBottom: 8,
gap: 8
}}>
{[
{ label: ‘💎 SCORE’, value: score.toLocaleString(), color: ‘#00E5FF’ },
{ label: ‘📊 LINES’, value: lines, color: ‘#76FF03’ },
{ label: ‘⚡ LV’, value: level, color: ‘#FFEA00’ }
].map((item, i) => (
<div key={i} style={{
flex: 1,
background: ‘linear-gradient(145deg, #2a2a4c, #1a1a2e)’,
borderRadius: 10,
padding: ‘6px 8px’,
textAlign: ‘center’,
boxShadow: ‘0 4px 15px rgba(0,0,0,0.4), inset 1px 1px 2px rgba(255,255,255,0.1)’
}}>
<div style={{ fontSize: 9, color: ‘#888’, letterSpacing: 1 }}>{item.label}</div>
<div style={{
fontSize: 18,
fontWeight: ‘bold’,
color: item.color,
textShadow: `0 0 10px ${item.color}66`
}}>{item.value}</div>
</div>
))}
</div>

```
  {/* ゲームボード */}
  <div style={{
    position: 'relative',
    background: 'linear-gradient(145deg, #1a1a3e, #0a0a1e)',
    padding: 6,
    borderRadius: 12,
    boxShadow: `
      0 0 30px rgba(100, 100, 255, 0.2),
      inset 0 0 20px rgba(0,0,0,0.5),
      0 10px 30px rgba(0,0,0,0.5)
    `,
    border: '2px solid #3a3a6a'
  }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${BOARD_WIDTH}, ${BLOCK_SIZE}px)`,
      gridTemplateRows: `repeat(${BOARD_HEIGHT}, ${BLOCK_SIZE}px)`,
      gap: 1,
      background: '#0a0a1e'
    }}>
      {displayBoard.flat().map((cell, i) => (
        <GemBlock key={i} colors={cell} size={BLOCK_SIZE} />
      ))}
    </div>

    {/* オーバーレイ */}
    {(gameOver || isPaused) && (
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backdropFilter: 'blur(4px)'
      }}>
        <div style={{ 
          fontSize: 28, 
          fontWeight: 'bold', 
          color: '#fff',
          textShadow: '0 0 20px rgba(255,255,255,0.5)',
          marginBottom: 8
        }}>
          {gameOver ? '💥 GAME OVER' : '⏸️ PAUSED'}
        </div>
        {gameOver && (
          <div style={{ 
            fontSize: 20, 
            color: '#FFEA00',
            textShadow: '0 0 10px #FFEA0066',
            marginBottom: 16
          }}>
            {score.toLocaleString()} pts
          </div>
        )}
        <button
          onClick={gameOver ? resetGame : () => setIsPaused(false)}
          style={{
            padding: '12px 32px',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: 25,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.5)'
          }}
        >
          {gameOver ? '🔄 RETRY' : '▶️ RESUME'}
        </button>
      </div>
    )}
  </div>

  {/* コントロールボタン */}
  <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
    {/* 上段: 回転 & ドロップ */}
    <div style={{ display: 'flex', gap: 60 }}>
      <ControlButton onPress={rotate}>🔄</ControlButton>
      <ControlButton onPress={hardDrop}>⚡</ControlButton>
    </div>
    
    {/* 下段: 左右移動 & 下移動 */}
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <ControlButton onPress={() => moveHorizontal(-1)}>◀</ControlButton>
      <ControlButton onPress={moveDown}>▼</ControlButton>
      <ControlButton onPress={() => moveHorizontal(1)}>▶</ControlButton>
    </div>
  </div>

  {/* ポーズ/リセットボタン */}
  <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
    <button
      onClick={() => setIsPaused(p => !p)}
      style={{
        padding: '8px 20px',
        fontSize: 14,
        color: '#ccc',
        background: 'linear-gradient(145deg, #3a3a5c, #2a2a4c)',
        border: '1px solid #4a4a6a',
        borderRadius: 20,
        cursor: 'pointer'
      }}
    >
      {isPaused ? '▶️ 再開' : '⏸️ 停止'}
    </button>
    <button
      onClick={resetGame}
      style={{
        padding: '8px 20px',
        fontSize: 14,
        color: '#FF6E40',
        background: 'linear-gradient(145deg, #3a3a5c, #2a2a4c)',
        border: '1px solid #4a4a6a',
        borderRadius: 20,
        cursor: 'pointer'
      }}
    >
      🔄 リセット
    </button>
  </div>
</div>
```

);
}
