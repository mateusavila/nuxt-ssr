require('isomorphic-fetch')

export const fetchResource = (url) => {
  return fetch(`${url}`, { mode: 'cors' })
    .then(response => response.json())
    .then(response => response)
}

export const postsListResource = (url) => {
  let total = 0
  let pages = 0
  let posts = []
  return fetch(`${url}`, { mode: 'cors' })
  .then(response => {
    total = +response.headers.get('x-wp-total')
    pages = +response.headers.get('x-wp-totalpages')
    posts = response.json()
    return {
      total, pages, posts
    }
  })
}
