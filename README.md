
# Netflix Clone

Users can sign up and log in. Logged in users can view movies, TV shows, etc; get videos according to specific genres of their wish and add them to their watchlist.
## Tech Stack

**Client:** React, Redux

**Server:** Node, Express

**Database:** MongoDB

**Authentication**: Firebase, JWT
## Run Locally

Clone the project

```bash
  git clone https://github.com/debashis-mishra/netflix-clone
```

### Spin up the Server

Go to the project's server directory

```bash
  cd netflix-clone/server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
### Start Client

Go to the project's client directory

```bash
  cd netflix-clone/client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## API Reference

#### Get liked movies

```http
  GET /api/user/liked/:email
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email of the user whose liked movies are to be fetched. |

#### Like a video

```http
  POST /api/user/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of the user who liked the movie. |
| `data`      | `Array` | **Required**. Videos liked by the user. |

#### Like a video

```http
  GET /api/user/remove
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of the user who disliked the movie. |
| `movieId`      | `string` | **Required**. Id of the movie disliked by the user. |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### 1. Add a .env file at the same level of src folder in the server folder and add the following variables:

`PORT`

`MONGODB_URI`

### 2. Add a .env file at the same level of src folder in the client folder and add the following variables:

`REACT_APP_HOST`

TMDB:

`REACT_APP_API_KEY`

`REACT_APP_TMDB_BASE_URL`

`REACT_APP_READ_ACCESS_TOKEN`

Firebase:

`REACT_APP_apiKey`

`REACT_APP_authDomain`

`REACT_APP_projectId`

`REACT_APP_storageBucket`

`REACT_APP_messagingSenderId`

`REACT_APP_appId`

`REACT_APP_measurementId`
