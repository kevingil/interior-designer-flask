# Interior Designer AI
>Generate interior design renders with Stable Diffusion XL


This project has been forked to a production repository


[Link](https://interiordesigner-ai.com/)


![IDAI.png](https://cdn.kevingil.com/interior-designer-11-23.png)


## Develop

This project uses Stable Diffusion to generate renders and Cloudflare R2 storage. You need to setup your API keys.

Setup API Keys

```sh
#Setup .env in server/app/routes/
STABILITYAI_API_KEY=your_key
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


## Build with Docker
```sh
docker compose build
docker compose up -d
```
