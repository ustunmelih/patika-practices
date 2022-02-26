import axios from 'axios'

async function getData() {
  const { data: user } = await axios.get(
    'https://jsonplaceholder.typicode.com/users/${number}'
  )
  const { data: posts } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?userId=${number}'
  )

  return { user, posts }
}

export default getData
