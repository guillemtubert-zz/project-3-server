const users = [];

const addUser=({id, username, room})=>{
    //Hem de passar el nom a una sola string i a lowercase
    username=username.trim().toLowerCase();
    room=room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.username === username);

    // if(existingUser) {
    //     return {error: 'Username is taken'};
    // }

    const user = {id, username, room};

    users.push(user);

    console.log('in addUser, users array', users);


    return { user }

}

const removeUser =(id)=>{
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    console.log('in getUser, users array', users);
    return users.find((user) => user.id === id)
};

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports= {addUser, removeUser, getUser, getUsersInRoom};