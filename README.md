
# Compound Lookup

Compound Lookup is a web application that allows users to view and edit detailed information about various chemical compounds. The app includes a paginated compound list and compound detail view, with backend support for CRUD operations using Express.js and MySQL.



## Features

- View a list of chemical compounds with pagination.
- View detailed information about a compound.
- CRUD operations for compounds.
- Docker support for easy setup.
- Unit testing for backend services.



## Tech Stack

- Frontend: Angular,  Bootstrap
- Backend: Express.js, Node.js
- Database: MySQL with Sequelize ORM



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in backend

`PORT=3307`

`DB_HOST=localhost`

`DB_PORT=3306`

`DB_USER=root`

`DB_PASSWORD=yourpassword`

`DB_NAME=compound_lookup`



## API Reference

#### Get all compounds

```http
  GET /api/compounds
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | (Optional) Page number for pagination. |
| `limit` | `number` | (Optional) Number of items per page. |

#### Get compound by id

```http
  GET /api/compounds/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. The unique ID of the compound |

### Create compound
```http
  POST /api/compounds/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. compound name
| `description` | `string` | **Required**. compound description
| `imageSource` | `string` | **Required**. compound photo 

### Update compound
```http
  PUT /api/compounds/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. unique id of the compound    |
| `name`      | `string` | **Required**. compound name
| `description` | `string` | **Required**. compound description
| `imageSource` | `string` | **Required**. compound photo 


### Delete compound
```http
  DELETE /api/compounds/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. unique id of the compound    |

## Run Locally

Clone the project

```bash
  git clone https://github.com/jkaus324/CompoundLookup
```

Go to the project directory

```bash
  cd CompoundLookup
```

Install Frontend dependencies

```bash
  cd Frontend
  npm install
```

Start the server

```bash
  ng serve
```

Install Backend dependencies

```bash
  cd Backend
  npm install
```

Start the server

```bash
  npm run dev
```

