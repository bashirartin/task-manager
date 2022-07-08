require('./src/db/mongoose')
const User = require('./src/models/user')
const Task = require('./src/models/task')

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments( { age })
//     return count
// }

// updateAgeAndCount('62bd6a34368bf0e0f38cbafb', 33).then((res) => {
//     console.log(res)
// }).catch((e) =>  {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('62c7f1d8b66c5e7ebd57e249').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})