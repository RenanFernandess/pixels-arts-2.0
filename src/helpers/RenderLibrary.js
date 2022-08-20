class RenderLibrary extends Componente {
  constructor() {
    super();

    this.state = {};
    this.libraryState = {};
    this.currentBoard = {};
    this.saveBoard = new SaveBoard();
    this.boardSavedList = this.saveBoard.getBoardSavedList();
    this.createListingState();
    this.getSavedState();
    this.numberOfBoardThatWillBeListed(boardsList, this.boardSavedList);
  }

  render() {
    const { firstIndex, lastIndex } = this.state;

    this.boardSavedList.slice(firstIndex, lastIndex).forEach((board) => {
      boardsList.innerHTML += new CreatePreview(board);
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = { RenderLibrary };
}