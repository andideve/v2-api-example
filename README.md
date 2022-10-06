# v2-api

## Endpoints

### Get Author

#### Request

##### **GET** /author

#### Response (200)

##### Body (application/json)

- **name** string
- **description** string
- **urls** object
  - **github** string
  - **twitter** string
- **twitter** object
  - **username** string
- **images** array of objects (_optional_)
  - **width** integer
  - **url** string
- **intro** string (_optional_)

### Get Links

#### Request

##### **GET** /linktrees

#### Response (200)

##### Body (application/json)

- **linktrees** array of objects
  - **category** string
  - **items** array of objects
    - **label** string
    - **href** string
    - **text_color** string (_optional_)
    - **bg_color** string (_optional_)

### Get Projects

#### Request

##### **GET** /projects

##### Query

- **archived** boolean (_optional_)
- **sort** string (_optional_)
  Allowed values: "ASC" "DESC"
- **limit** integer (_optional_)

#### Response (200)

##### Body (application/json)

- **projects** array of objects
  - **date** string
  - **title** string
  - **description** string
  - **tags** array of strings (_optional_)
  - **github** string (_optional_)
  - **external** string (_optional_)
  - **archived** boolean (_optional_)

### Create Email (N/A)

#### Request

##### **POST** /email

##### Body (application/json)

- **name** string
- **from** string
- **body** string
- **subject** string (_optional_)

#### Response (201)

##### Body (application/json)

- **name** string
- **from** string
- **body** string
- **subject** string (_optional_)
