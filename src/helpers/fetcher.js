import  axios from 'axios'
import { getSessionToken } from "@sangre-fp/connectors/session"

const baseUrl = process.env.REACT_APP_VOTING_BASE_URL_API

async function httpRequest(method, path, payload = null) {
  console.log('`${baseUrl}/${path}`', `${baseUrl}/${path}`)
  return axios({
      method,
      url: `${baseUrl}/${path}`,
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getSessionToken()}`
      },
      withCredentials: true,
      data: payload || null
  })
}

export const votingApi = {
  //Voting
  //get radar phenomenon vote for current user
  getVote: async (gid, radarId, pid) => {
    return await httpRequest('GET', `voting/${gid}/radar/${radarId}/phenomenon/${pid}/user`)
  },

  //get all radar phenomenon votes
  getVotes: async (gid, radarId, pid) => {
    return await httpRequest('GET', `voting/${gid}/radar/${radarId}/phenomenon/${pid}`)
  },

  //vote on radar phenomenon as current user
  addVote: async (gid, radarId, pid, payload) => {
    return await httpRequest('POST', `voting/${gid}/radar/${radarId}/phenomenon/${pid}`, payload)
  },
  
  // cancel radar phenomenon vote for current user
  deleteVote: async (gid, radarId, pid) => {
    return await httpRequest('DELETE', `voting/${gid}/radar/${radarId}/phenomenon/${pid}/user`)
  },

  //ThumbUp 
  //get radar phenomenon comment vote for current user
  getLike: async (gid, rid, pid, cid) => {
    return await httpRequest('GET', `voting/${gid}/radar/${rid}/phenomenon/${pid}/comment/${cid}/user`)
  },

  //get all radar phenomenon comment votes
  getLikes: async (gid, rid, pid, cid) => {
    return await httpRequest('GET', `voting/${gid}/radar/${rid}/phenomenon/${pid}/comment/${cid}`)
  },

  //vote on radar phenomenon comment as current user
  addLike: async (gid, rid, pid, cid, payload) => {
    return await httpRequest('POST', `voting/${gid}/radar/${rid}/phenomenon/${pid}/comment/${cid}`, payload)
  },

  //get all avg radar phenomenon ratings
  getPhenomenonRatings: async (gid, radarId, pid) => {
    return await httpRequest('GET', `rating/${gid}/radar/${radarId}/phenomenon/${pid}`)
  },

  //Rating
  //get avg radar phenomenon rating for current user
  getRatingsCurrentUser: async (gid, radarId, pid) => {
      return await httpRequest('GET', `rating/${gid}/radar/${radarId}/phenomenon/${pid}/user`)
  },
  //rate on radar phenomenon as current user
  addRatingCurrentUser: async (gid, radarId, pid, ratingId, payload) => {
      return await httpRequest('POST', `rating/${gid}/radar/${radarId}/phenomenon/${pid}/${ratingId}`, payload)
  },

  //clear radar phenomenon ratings for current user
  clearRatingsCurrentUser: async (gid, radarId, pid) => {
      return await httpRequest('DELETE', `rating/${gid}/radar/${radarId}/phenomenon/${pid}/user`)
  },

  getFlipAxisAfterSaved : async (gid, radarId) => {
      return await httpRequest('GET', `meta/rating/${gid}/radar/${radarId}/flipAxisAfterSaved/`)
  }
}