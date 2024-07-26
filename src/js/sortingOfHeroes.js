export default function sortingofheroes(heros) {
const sorted = heros.sort((a, b) => b.health - a.health);
     return sorted;
}