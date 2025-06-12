![image](https://harshsingh.me/og.png)

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

## Forking

This project is licensed with the "[Do What The F\*ck You Want To Public License (wtfpl)](https://choosealicense.com/licenses/wtfpl/)" license, and the permissions/limitations are pretty self explanatory. Attribution isn't required, but I'd appreciate it.
