# Packet Tracker Application 
# Tech Stach (Typescript only) 
`(Server (Nest Js), Web (Next Js))`

## Server Installation
```

`npm install`

`create .env`

`npm run start:dev`

```


### .env
```

`API_KEY={your_api_key}
URL=https://api.binderbyte.com/v1/track?`

```



### Endpoints API Documantation
``` 

Packet Information
Get packet Information [Get with id and specifiec courier]
`/tracker?courier={jne/jnt/etc}/id={021318/12301/etc}`

Get packet Information [Get with packet id only]
`/tracker/id?id={021318/12301/etc}`

>>>>>>>>>>>>>>>>> Updated Currently <<<<<<<<<<<<<<<<<<<<<<<

History
Get all history (default sorting DESC)
`/tracker/history`

Get history by ID
`/tracker/{id}`

Get history with search query
`/tracker?courier={search(example = jne/jnt/sicepat etc..)}`

>>>>>>>>>>>>>>>>>>>> Coming soon <<<<<<<<<<<<<<<<<<<<<<<<<<


```


### response API
```

{
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
}

```

# Enjoy Your Time, Send Your Coffe [Here]
