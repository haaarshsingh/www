export const allFollowers = async () => {
  return fetch('https://dev.to/api/followers/users?per_page=1000', {
    headers: {
      api_key: process.env.DEV_API,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err))
}

export const allPosts = async (limit: string) => {
  return fetch(`https://dev.to/api/articles/me/all?per_page=${limit}`, {
    headers: {
      api_key: process.env.DEV_API,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err))
}
