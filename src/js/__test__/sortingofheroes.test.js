import sortingofheroes from '../sortingOfHeroes.js';

    let received = sortingofheroes([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]);
      let healthy = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ];

      describe('the La Croix cans on my desk', () => {
        test('have all the same properties', () => {
          expect(received).toEqual(healthy);
        });
        test('are not the exact same can', () => {
          expect(received).not.toBe(healthy);
        });
      });