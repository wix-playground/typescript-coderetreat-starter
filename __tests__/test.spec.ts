class GameOfLife {
    constructor(private state) { }

    next() {
        return this.state;
    }
}
describe('game of life', () => {
    it('it returns empty game if the there are not cells', () => {
        const game = new GameOfLife([]);

        expect(game.next()).toEqual([]);
    });
});