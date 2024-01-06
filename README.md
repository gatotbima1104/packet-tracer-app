# Packet Tracker Application 
# Tech Stach (Typescript only) 
`(Server (Nest Js), Web (Next Js))`

## Server Installation

`npm install`

`create .env`

### inside .env

`API_KEY={your_api_key}
URL=https://api.binderbyte.com/v1/track?`

`npm run start:dev`

### Try with endpoint [Get = Method Only]
`localhost:3000/tracker?courier={jne/jnt/etc}/id={021318/12301/etc}`

### response API
`{
  "summary": { 
        "awb": "005232883423",
        ...
    },
    "detail": {
        "origin": "Kota",
        ...
    },
    "history": [
        {
            "date": "2023-12-20 13:30:00",
            ...
        },
        {
            "date": "2023-12-20 11:32:00",
            ...
        },
    ]
}`

### Enjoy
