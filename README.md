# I'M IN!

<br>

## Description

This is an app to create groups with the people who wants to meet and don't want more whatsapp groups

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anon I can sign up in the platform so that I can start using the app.
-  **Login:** As a user I can login to the platform so that I can play competitions.
-  **Logout:** As a user I can logout from the platform so no one else can use it.
-  **Create group:** As a user I can create a group.
-  **Join group:** As a user I can join other's people groups if I have their group code.
-  **See my groups:** As a user I can see which groups I am in.
-  **Delete group:** As a user I can delete a group that I've created.
-  **Edit group:** As a user I can edit a group that I've created.
-  **User Profile:** As a user I can see my name, and the 3 buttons to roam between different options.
-  **Leave group:** As a user I can leave a group that I've entered.

## Backlog

Chat:
- Chat with the other users that are in the same group as I am
- Geolocation



<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | SplashPage           | public `<Route>`      | Home page, redirect to login page                |
| `/signup`            | SignupPage           | anon only  `<AnonRoute>`   | Signup form, link to login, navigate to homepage after signup |
| `/login`             | LoginPage            | anon only `<AnonRoute>`  | Login form, link to signup, navigate to homepage after login |
| `/logout`            | n/a                  | User only `<PrivateRoute>` | Navigate to login/homepage after logout, expire session |
| `/Profile` | ProfilePage | User only `<PrivateRoute>`  |Navigate between create a group, join a group and my groups|
| `/create` | CreateGroup | user only `<PrivateRoute>`  | Create a group                                               |
| `/groups`  | GroupsPage | user only `<PrivateRoute>`  | List of all the groups displayed                             |
| `/group/:id`     | n/a                   | user only `<PrivateRoute>`  | Delete group                                        |
| `/group/:id` | GroupPage | user only  `<PrivateRoute>` | List of the people in the group, chat and invite link        |
| /join/:id | JoinGroup(id) | user only  `<PrivateRoute>` | Enter a group with that id |
| `/join` | JoinGroup | user only  `<PrivateRoute>` | Go to /Join/:id |


## Components

- LoginPage
- SignUpPage
- HomeScreen
- CreateGroupPage
- GroupPage(:id)
- ListOfGroups
- JoinGroup
- SeeGroup
- EditGroup
- Join


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
- Group Service
  - Group.Create
  - Group.SeeDetails
  - Group.Edit
  - Group.Delete
  - Group.Leave
  - Group.AddUser
  
- Use Service 

  - User.MyGroups
  - User.JoinGroup(:id)
  

<br>


# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  Groups: [Array of _id], // Starts as an empty array
  
}
```



Group model

```javascript
 {
   name: {type: String, required: true},
   description: {type: String, required: true},
   participants: [Array of _ids],
   duration: {type: Number, required: true},
   maxParticipants: {type: Number, required: true},
	 chat: []
   timeStamp: 
 }
```



Chat model

```javascript
{
  TBD,
}
```

<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return home page        |
| POST        | `/auth/signup`                | {name, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/groups` |                              |                | 400          |                                                              |
| GET         | `/groups/:id`       | {id},Title, participants, description, max cap and time limit |                |              | Show specific group. |
| POST        | `/groups/create` | {name,users, description, max cap, time limit} | 201            | 400          | Create and save a new group                         |
| PUT         | `/groups/edit/:id` | {name,users, description, max cap, time limit} | 200            | 400          | edit group                                          |
| DELETE      | `/groups/delete/:id` | {id}                         | 201            | 400          | delete group                                        |
| PUT      | `/add/users_id/_group_id` | {user_id, group_id} |                |           |                                                              |


<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/0QlnxnDQ/project-3)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/guillemtubert/project3-im-in)

[Server repository Link](https://github.com/screeeen/project-server) TBD

[Deployed App Link](http://heroku.com) tbd

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/17yvSXmm0FoUZZ1iBAVtst0ZhFaA5WU5Ufwm87lc7zJw/edit?usp=sharing)
