
const testNum = num => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`${num} is greater then 10`)
        } else {
            reject(`${num} is less then 10`)
        }
    })
}

testNum(5)
    .then(result => console.log(result))
    .catch(error => console.log(error))

testNum(20)
    .then(result => console.log(result))
    .catch(error => console.log(error))

testNum(10)
    .then(result => console.log(result))
    .catch(error => console.log(error))


const makeAllCaps = words => {
        return new Promise((resolve, reject) => {
            if (words.every(word => {
                return typeof word === "string"
            })
        ){
            resolve(sortWords(words.map(word => {
                return word.toUpperCase()
            })
        )
    )
    } else {
        reject("Not a word")
        }
    })
 }
    
const sortWords = words => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort())
        } else {
            reject("words only")
        }
    })
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado']

makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error))

const complicatedArray = ['cucumber', 44, true]

makeAllCaps(complicatedArray)
    .then(sortWords(complicatedArray))
    .then(result => console.log(result))
    .catch(error => console.log(error))