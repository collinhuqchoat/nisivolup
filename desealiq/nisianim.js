function onComplete(newBoard, direction) {
  // Update the game state
  gameState.isGameOver = true;

  // Display the final board
  renderBoard(newBoard);

  // Declare a winner
  if (player1.score > player2.score) {
    alert("Player 1 wins!");
  } else if (player2.score > player1.score) {
    alert("Player 2 wins!");
  } else {
    alert("It's a tie!");
  }
}
