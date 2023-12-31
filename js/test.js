import * as util from './utils.js'
const arr = [1, 2, 3, 4, 5, 6]
const cat = [1, 2, 3, 4]
const map =
[
    {
        key: 2,
        value: 'health'
    },
    {
        key: 1,
        value: 'news'
    },
    {
        key: 3,
        value: 'tech'
    },
    {
        key: 4,
        value: 'sport'
    }
]
        
const url = window.location.href.split('/')
const file = url[url.length - 1]
const num = file.split('.')[0]

        
if (num != 'index')
{
    if (num.length == 1)
        document.title = document.querySelector('h2').innerText
    else
        document.title = num[0].toUpperCase() + num.substring(1)
}
if (num.length == 1) //num.length == 1 indicates that the file is an article
{
    util.shuffleArray(arr)
    const urll = [], urll1 = [], keys = []
    for (let i = 0; i < 6; ++i) {
        const rand = util.getRandomInt(0, 3)
        const tmp = map.filter((key) => { return key.key == cat[rand] })
        const { value } = tmp[0]
        if (value == url[url.length - 2] && arr[i] == num) {
            i--
            continue
        }

        urll.push(`../../images/${value}/${arr[i]}.jpg`)
        urll1.push(`../../articles/${value}/${arr[i]}.html`)
        keys.push({ key1: value, key2: arr[i] })

    }

    for (let i = 1; i <= 6; ++i) {
        const x = document.getElementById(`${i}`)
        const y = document.getElementById(`a${i}`)
        const z = document.getElementById(`t${i}`)
        x.src = urll[i - 1]
        y.href = urll1[i - 1]
        z.innerText = util.map.filter((elem) => {
            return (elem.key1 == keys[i - 1].key1 && elem.key2 == keys[i - 1].key2)
        })[0].value
    }
}