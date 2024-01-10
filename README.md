# Packet Tracker Application 
# Tech Stach (Typescript only) 
`(Server (Nest Js), Web (Next Js))`

### .env
```

API_KEY={your_api_key}
URL=https://api.binderbyte.com/v1/track?

```

## Server Installation
```

=> npm install
=> npm run start:dev

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
`/history-packet`

Get history by ID
`/history-packet/{id}`

Get history with search query
`/history-packet?courier={search(example = jne/jnt/sicepat etc..)}`

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
