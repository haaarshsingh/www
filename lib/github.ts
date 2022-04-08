export const userInfo = () => {
  return fetch('https://api.github.com/users/harshhhdev')
    .then((response) => response.json())
    .catch((err) => console.error(err))
}
