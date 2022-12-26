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
    const index = users.findIndex((user) => user.id === id
    )
}

addUser({
    id : 20,
    username : 'Marjorie',
    room : 'Korea'
})

console.log(users)

const res = addUser({
    id : 21,
    username : 'Marjorie',
    room: 'Korea'
})

console.log(res)