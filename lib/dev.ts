export const allFollowers = async (limit: string) => {
  const page1 = fetch(`https://dev.to/api/followers/users?per_page=${limit}`, {
    headers: {
      api_key: process.env.DEV_API,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err))

  const page2 = fetch(
    `https://dev.to/api/followers/users?per_page=${limit}&page=2`,
    {
      headers: {
        api_key: process.env.DEV_API,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.log(err))

  return Object.keys(await page2).length + Object.keys(await page1).length
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
