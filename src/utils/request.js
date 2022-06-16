import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/9d12c14426b750d73d484c14876cc29f',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
