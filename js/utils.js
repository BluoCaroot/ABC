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
    key1: 'health',
    key2: 1,
    value: 'Could the most magical time of year be so full of loneliness, anger and stress?'
},
{
    key1: 'health',
    key2: 2,
    value: 'Being a nice person is not the same as being kind. Why the difference is so important'
},
{
    key1: 'health',
    key2: 3,
    value: 'Why most men don’t have enough close friends'
},
{
    key1: 'health',
    key2: 4,
    value: 'It’s not too late to get vaccinated, as the holidays – and respiratory virus season – ramp up'
},
{
    key1: 'health',
    key2: 5,
    value: 'To keep pounds off, patients may need to continue taking weight loss drug, study suggests'
},
{
    key1: 'health',
    key2: 6,
    value: 'Doctors should intervene to help children with obesity, task force draft says, but it doesn’t recommend surgery or meds'
},
{
    key1: 'news',
    key2: 1,
    value: 'Humanitarian crisis worsens in Gaza as Israel-Hamas war intensifies'
},
{
    key1: 'news',
    key2: 2,
    value: 'Stocks notch a sixth straight week of gains after November jobs data'
},
{
    key1: 'news',
    key2: 3,
    value: 'A police officer’s death has torn this Boston suburb apart'
},
{
    key1: 'news',
    key2: 4,
    value: 'US government’s proposal to boost EV sales is challenging but not impossible'
},
{
    key1: 'news',
    key2: 5,
    value: 'Google reaches deal with Canada to keep news content on its platform'
},
{
    key1: 'news',
    key2: 6,
    value: 'The US economy added 199,000 jobs in November'
},
{
    key1: 'tech',
    key2: 1,
    value: 'This company envisions a future where humanoid robots are as ubiquitous as smartphones'
},
{
    key1: 'tech',
    key2: 2,
    value: 'Former Twitter head of information security claims he was fired after raising concerns about cost cuts at Elon Musk’s company'
},
{
    key1: 'tech',
    key2: 3,
    value: 'OpenAI officially announces Sam Altman has returned as CEO and Microsoft gains a non-voting board seat'
},
{
    key1: 'tech',
    key2: 4,
    value: 'The 4 key events that led to UPenn President Liz Magill’s resignation'
},
{
    key1: 'tech',
    key2: 5,
    value: 'The Fed’s higher-for-longer strategy on interest rates is slowly crumbling. Welcome to higher-for-long-enough'
},
{
    key1: 'tech',
    key2: 6,
    value: 'Elon Musk is going down a conspiratorial rabbit hole and taking X with him'
},
{
    key1: 'sport',
    key2: 1,
    value: 'Lionel Messi says he is focused on playing at next year’s Copa América but doesn’t rule out appearing at 2026 World Cup'
},
{
    key1: 'sport',
    key2: 2,
    value: 'The meteoric rise of ‘The Passtronaut.’ How Josh Dobbs went from perennial back-up to cult hero'
},
{
    key1: 'sport',
    key2: 3,
    value: 'LeBron James wins IST MVP as Los Angeles Lakers hold off Indiana Pacers for debut NBA Cup title'
},
{
    key1: 'sport',
    key2: 4,
    value: 'Aston Villa confirms status as unlikely Premier League title contender, defeating Arsenal and Manchester City in same week'
},
{
    key1: 'sport',
    key2: 5,
    value: 'Tiger Woods’ comeback at the Hero World Challenge proves he’s not ready to ‘sail off into the sunset’'
},
{
    key1: 'sport',
    key2: 6,
    value: 'Magnus Carlsen and Pep Guardiola: Two sporting kings meet to talk tactics as bromance blossoms'
}
]