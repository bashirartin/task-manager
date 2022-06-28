// const testPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('This is right')
//         reject('This is wrong')
//     },2000)
// })


// testPromise.then((response) => {
//     console.log('Response '+ response)
// }).catch((error) => {
//     console.log('Error! ', error)
// })

const testCallback = (callback) => {
    setTimeout(() => {
        // callback('this is error', undefined)
        callback(undefined, 'this is right')
    },2000)
}

testCallback((error, result) => {
    if(error) {
        console.log('Error', error)
    }

    console.log('Result1 ', result)  
})