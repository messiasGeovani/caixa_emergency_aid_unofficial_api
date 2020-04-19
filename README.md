# Caixa emergency aid unofficial api
> The nodejs REST api for the caixa emergency aid unofficial app


This is a simple api made to be consumed by the [react native app.](https://github.com/messiasGeovani/caixa_emergency_aid_unofficial_app)

## Installation

To install and config the project dependencies, is recommended the [yarn](https://yarnpkg.com/lang/en/) package manager.

```sh
yarn
```

However, you also can use [npm](https://www.npmjs.com/get-npm).

```sh
npm install
```

## Usage manual

- ### Routes guide

The project contains the current routes:

| Method | Uri        | Functionality                                  | Content-Type |
|--------|------------|------------------------------------------------|--------------|
| POST   | /evaluation  | used to add a evaluation info.                | json         |


## Project estructure

This project was created using the [express framework](https://expressjs.com/) to create the server routes and middlewares:

```
├── package.json
└── src
    ├── App
    │   ├── controllers
    │   │   └── rankController.js
    │   ├── index.js
    │   ├── Models
    │   │   └── Evaluation.js
    │   └── routes.js
    └── server.js

```

## Database

The [MongoDB](https://www.mongodb.com/) DBMS was used to store the application data in conjunction with [mongoose ODM](https://mongoosejs.com/):

#### Evaluation Model:

```
{
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userCity: {
        type: String,
        required: true
    },
    rankLevel: {
        type: String,
        required: true
    }
}
```

## Meta

Linkedin Profile – [Messias Geovani](https://www.linkedin.com/in/messias-geovani-00125416a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGnSoFwiETD%2BtGrv4dF9mSw%3D%3D) 

Email – messias.geovani.lima@gmail.com

Github profile – [messiasGeovani](https://github.com/messiasGeovani)

## Contributing

1. Fork it (<https://github.com/messiasGeovani/caixa_emergency_aid_unofficial_api/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
