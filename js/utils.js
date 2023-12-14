export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
export function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const map = 
[
{
    key1: 'heath',
    key2: 1,
    value: 'Could the most magical time of year be so full of loneliness, anger and stress?'
},
{
    key1: 'heath',
    key2: 2,
    value: 'Being a nice person is not the same as being kind. Why the difference is so important'
},
{
    key1: 'heath',
    key2: 3,
    value: 'Why most men don’t have enough close friends'
},
{
    key1: 'heath',
    key2: 4,
    value: 'It’s not too late to get vaccinated, as the holidays – and respiratory virus season – ramp up'
}
]