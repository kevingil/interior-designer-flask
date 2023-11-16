# Interior Designer AI
>Generate interior design renders with DallE

![IDAI.png](https://cdn.kevingil.com/idai111523.png)


## Develop

This project uses OpenAI to generate renders and Cloudflare R2 storage. You need to setup your API keys.

Setup API Keys

```sh
#Setup .env in server/app/routes/
OPENAI_API_KEY=your_key
CLOUDFLARE_R2_TOKEN=your_token
R2_ACCESS_KEY_ID=your_id
R2_SECRET_ACCESS_KEY=your_key
CLOUDFLARE_ACCOUNT_ID=your_id
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

![IDAI-2.png](https://cdn.kevingil.com/idai111523-2.png)


## Build with Docker
```sh
docker compose build
docker compose up -d
```
