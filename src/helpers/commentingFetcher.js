import  axios from 'axios'
import { getSessionToken, getCsrfToken} from "@sangre-fp/connectors/session"

const baseUrl = process.env.REACT_APP_COMMENTING_API_URL
async function httpRequest(baseUrl, method, path, payload = null) {
    console.log(2222, `${baseUrl}/${path}`)
  return axios({
      method,
      url: `${baseUrl}/${path}`,
      headers: {
          'X-CSRF-Token': getCsrfToken(),
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getSessionToken()}`
      },
      withCredentials: true,
      data: payload || null
  })
}

export const commentingApi = {
    //get all votes from all phenomenon by radarId
    getAllComments: async (gid, radarId) => {
        return await httpRequest(baseUrl, 'GET', `${gid}/radar/${radarId}`)

    },

    getAllCommentsByPhenId: async (gid, radarId, phenId) => {
        return await httpRequest(baseUrl, 'GET', `${gid}/radar/${radarId}/phenomenon/${phenId}`)
    },

    // add or edit comment
    upsertComment: async (gid, radarId, pid, section, cmtId, payload) => {
        return await httpRequest(baseUrl, 'POST', `${gid}/radar/${radarId}/phenomenon/${pid}/${section}/${cmtId}`, payload)
    },

    //delete all cmts from all phenomenon by radarId
    deleteComment: async (gid, radarId, pid, section, cmtId) => {
        return await httpRequest(baseUrl, 'DELETE', `${gid}/radar/${radarId}/phenomenon/${pid}/${section}/${cmtId}`)
    }
}