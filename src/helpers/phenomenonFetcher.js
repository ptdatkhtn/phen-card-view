import axios from 'axios'
import { getSessionToken } from '@sangre-fp/connectors/session'
import statisticsApi from '@sangre-fp/connectors/statistics-api'

const SEARCH_API_URL = process.env.REACT_APP_SEARCH_API_URL
const RADAR_API_URL = process.env.REACT_APP_RADAR_DATA_API_URL
/*
 Fields in document: short_name,image_url,archived,uuid,ingress_body,original_id,language,
 related_phenomena,title,group,state,visibility,video_url,media_text,description,body,feed_tag,
 media_body_text
 */

 async function httpGetRequest(baseUrl,path, payload = null) {
  return axios({
      method: 'get',
      url: `${baseUrl}/${path}`,
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getSessionToken()}`
      },
      withCredentials: true,
      data: payload || null
  })
}


async function httpPostRequest(type, payload = null) {
    return axios({
        method: 'post',
        url: `${SEARCH_API_URL}/${type}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getSessionToken()}`
        },
        data: payload
    }).then(res => res.data)
}

export async function getRadarData(rid) {
  return httpGetRequest(RADAR_API_URL, rid)
}

// eslint-disable-next-line max-params
export async function getPhenomenonNewsByPhenId(news_feed_uuids, gid=[0], language, size = 10) {
  return httpPostRequest('news-item', {
    news_feed_uuids: news_feed_uuids,
    groups: gid,
    language
  }).then(({result}) => (console.log('result', result)))
}

// eslint-disable-next-line max-params
export async function getPhenomena({ phenomena = [], query, groups = [0], page = 0, size = 10, language = null, enhanced = 1, tags = [], types = [], time_min = null, time_max = null, include_archived = false }) {
    return httpPostRequest('phenomenon', {
      phenomena,
      query,
      groups,
      page,
      size,
      language,
      enhanced,
      include_archived,
      // TODO: Implement passing properties in this structure
      tags: tags.length > 0 ? { 'fp:docs/props/has': tags } : {},
      types,
      time_min,
      time_max
    }).then(({result, ...rest}) => ({
      // TODO: Replace group in using function with groups property
      // TODO: Start to use separate properties for tags
      result: result.map(({ groups, ...doc }) => ({
        groups,
        group: groups.length > 0 && groups[1],
        ...doc,
        tags: Object.keys(doc).reduce((tags, key) => /^tags_/.test(key) ? [...tags, ...doc[key]] : tags, [])
      })),
      ...rest
    }))
}

export async function getPhenomenaStatistic (id) {
  return statisticsApi.getPhenomenaStatistics(id);
}