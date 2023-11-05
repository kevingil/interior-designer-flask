# Interior Designer AI
>Generate interior design renders with DallE

![9RAdS.png](https://cdn.kevingil.com/screenshot_interior_designer.png)



## Develop

Setup API Key

```sh
#Setup .env in server/app/routes/
OPENAI_API_KEY=your_key
```

Run

```sh
#from client/
npm install
npm run dev

#from server/ 
pip install -r requirements.txt
python server.py
```


## Build with Docker
```sh
docker compose build
docker compose up -d
```
