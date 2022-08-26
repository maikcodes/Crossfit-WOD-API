# WORKOUT API NOTES

This document is my personal notes for this project, if you need more explanations about it, please go to links and check it.

## **Tips**

- ### **Architecture.**

| Layers            | N°  |
| ----------------- | --- |
| Router            | 4   |
| Controller        | 3   |
| Service Layer     | 2   |
| Data Access Layer | 1   |
| Database          | 0   |

- ### **Tree**

```bash

Project
C:.
│   package-lock.json
│   package.json
│
└───src
    │   index.js
    │
    ├───controllers
    │       apiController.js
    │
    ├───database
    │       database.json
    │       utils.js
    │       Model.js
    │
    ├───services
    │       apiService.js
    │
    └───v1
        └───routes
                apiRoutes.js
```

- **Versioning.** Create a version folder for each version, its important for supporting actual version while you create a new version, remember some apps depends of your previous api version.

  - _It's applies on routes. But, if you need specific controllers or services you can create a specific folder for those and include in the new version, "the goal is not break previous versions"._

- **Manage Errors.** Use correctly error status, remember you use HTTP methods, so HTTP protocol has own error for different cases.

- **Logical nesting.** Its means that you must provide in the same endpoint resources that are associated with other resources. No more than three levels nesting.

- **Posible features to implement fot**

  - Receive all workouts that require a barbell: /api/v1/workouts?equipment=barbell
  - Get only 5 workouts: /api/v1/workouts?length=5
  - When using pagination, receive the second page: /api/v1/workouts?page=2
  - Sort the workouts in the response in descending order by their creation date: /api/v1/workouts?sort=-createdAt
  - You can also combine the parameters, to get the last 10 updated workouts for example: /api/v1/workouts?sort=-updatedAt&length=10

- **Cache.** If api will grow, probably use cache are necessary, but is better implement features only if are necessary, while the api is growing.

- **Security.** [REST API Security Essentials.](https://restfulapi.net/security-essentials/)

- **Documentation**
  - [OpenAPI Specification](https://swagger.io/specification/)
  - [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)
  - [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc)
  - [swwager.io](https://swagger.io/docs/specification/about/)

## _URLs_

- _Workouts._

  - Get all workouts: **http://localhost:4000/api/v1/workouts**
  - Get one workout: **http://localhost:4000/api/v1/workouts/:workoutId**
  - Create new workout: **http://localhost:4000/api/v1/workouts**
  - Update one workout: **http://localhost:4000/api/v1/workouts/:workoutId**
  - Delete one workout: **http://localhost:4000/api/v1/workouts/:workoutId**
  - Get one workout with record: **http://localhost:4000/api/v1/workouts/:workoutId/records**
  - Get all workouts using params, mode param: **http://localhost:4000/api/v1/workout?mode=modeName**

- _Records._

  - Get all workouts: **http://localhost:4000/api/v1/records**
  - Get one workout: **http://localhost:4000/api/v1/records/:recordId**
  - Create new workout: **http://localhost:4000/api/v1/records**
  - Update one workout: **http://localhost:4000/api/v1/records/:recordId**
  - Delete one workout: **http://localhost:4000/api/v1/records/:recordId**

- _Members._
  - Get all workouts: **http://localhost:4000/api/v1/members**
  - Get one workout: **http://localhost:4000/api/v1/members/:workoutId**
  - Create new workout: **http://localhost:4000/api/v1/members**
  - Update one workout: **http://localhost:4000/api/v1/members/:workoutId**
  - Delete one workout: **http://localhost:4000/api/v1/members/:workoutId**

### _Links._

- [REST API Design Best Practices Handbook – How to Build a REST API with JavaScript, Node.js, and Express.js](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/#rest-api-best-practices) by "Jean-Marc Möckel"

```

```
