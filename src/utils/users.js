const users = []

const addUser = ({id, username, room}) => {
    username = String(username).trim().toLowerCase()
    room = String(room).trim().toLowerCase()

    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    const existingUser = users.find(user => {
        return user.room === room && user.username === username
    })

    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = String(room).trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id : 20,
//     username : 'Marjorie',
//     room : 'Korea'
// })


// addUser({
//     id : 21,
//     username : 'Solon',
//     room : 'Korea'
// })


// addUser({
//     id : 20,
//     username : 'Heeseung',
//     room : 'Korea'
// })

// const user = getUser(20)
// console.log(user)

// const userList = getUsersInRoom('Korea')
// console.log(userList)

// const removedUser = removeUser(20)
// console.log(removedUser)
// console.log(users)

// const res = addUser({
//     id : 21,
//     username : 'Marjorie',
//     room: 'Korea'
// })

// console.log(res)