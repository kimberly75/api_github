import axios from 'axios'

async function getResultUserAPI({ user }) {
  console.warn("user getresultrepos", user)
  return axios.get("https://api.github.com/users/"+ user)
}

async function getResultReposAPI({ user }) {
  return axios.get("https://api.github.com/users/" + user + "/repos")
}

async function getResultStarredAPI({ user }) {
  return axios.get("https://api.github.com/users/"+ user +"/starred")
}

export { getResultUserAPI, getResultReposAPI, getResultStarredAPI }
