import { get } from './http.js'

export const demo = p => get('musicRankingsDetails?type=1', p)
