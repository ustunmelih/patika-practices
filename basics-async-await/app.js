let posts = [
  {
    title: 'Blog Post',
    body: 'Body',
    author: 'mel',
  },
  {
    title: 'Mini Blog Post',
    body: 'Body2',
    author: 'ust',
  },
]

let newPost = {
  title: 'Huge Blog Post',
  body: 'Body3',
  author: 'Meli',
}

const listPost = (data) => {
  return new Promise((resolve, reject) => {
    console.log('postlar listeleniyor...')
    if (data) {
      console.log('listeleme başarılı')
      resolve(posts)
    } else {
      reject('postlar listelenemedi!')
    }
  })
}

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    console.log('post ekleniyor...')
    if (newPost) {
      posts.push(newPost)
      resolve('ekleme başarılı')
    } else {
      reject('ekleme başarısız!')
    }
  })
}

const processPost = async () => {
  try {
    let listedPosts = await listPost(false)
    console.log(listedPosts)

    let isAdded = await addPost(newPost)
    console.log(isAdded)

    listedPosts = await listPost(true)
    console.log(listedPosts)
  } catch (err) {
    console.log(err)
  }
}

processPost()
