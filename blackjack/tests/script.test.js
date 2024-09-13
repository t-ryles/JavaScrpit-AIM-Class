import { expect, test, describe, beforeEach } from 'vitest';
import { buildDeck } from '../script';


describe('buildDeck', () => {
  test('Should return a deck of cards', () =>  {
    // Arrange
    let numOfDecks = 7;
    // Act
    const deck = buildDeck(numOfDecks);
    const result = deck.length;
    // Assert
    expect(result).toBe(364);
  });
});

