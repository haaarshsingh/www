image

## Quickstart

Clone the website locally:

```
git clone https://github.com/haaarshsingh/www.git
```

### Setting up the project

```bash
cd www

# Install dependencies
bun install
```

### Starting server

```bash
bun dev
```

Server should now be running on [localhost](https://localhost:3000).

### Database

This website uses [Upstash](https://upstash.com) to store the location of the last visitor. Sign up for an account, and replace the following API keys in `.env.EXAMPLE` with your own:

```
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

### Music

The music card shows what I'm currently (or was last) listening to. Last.fm scrobbles from Spotify (and most other players) and exposes the same data through a free API. Create a [Last.fm API account](https://www.last.fm/api/account/create) and add the following to `.env.EXAMPLE`:

```
LASTFM_API_KEY=""
LASTFM_USERNAME=""
```

## Forking

This project is licensed with the "[Do What The Fck You Want To Public License (wtfpl)](https://choosealicense.com/licenses/wtfpl/)" license, and the permissions/limitations are pretty self explanatory. Attribution isn't required, but I'd appreciate it.