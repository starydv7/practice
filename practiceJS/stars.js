// lower left star pattern

function upperLeftStarPattern(rows) {
    for (let i = rows; i >= 1; i--) {
      let row = ' '.repeat(rows - i) + '*'.repeat(i);
      console.log(row);
    }
  }
  
  const rows = 5;
  upperLeftStarPattern(rows);
  