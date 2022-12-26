const users = []

const addUser = ({id, username, room}) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

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

addUser({
    id : 20,
    username : 'Marjorie',
    room : 'Korea'
})


addUser({
    id : 21,
    username : 'Solon',
    room : 'Korea'
})


addUser({
    id : 20,
    username : 'Heeseung',
    room : 'Seoul'
})

// const removedUser = removeUser(20)
// console.log(removedUser)
// console.log(users)

// const res = addUser({
//     id : 21,
//     username : 'Marjorie',
//     room: 'Korea'
// })

// console.log(res)