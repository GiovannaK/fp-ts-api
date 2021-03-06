import * as t from 'io-ts'
import { profileCodec } from './profile'
import { tagCodec } from './tag'

export const articleCodec = t.type({
  slug: t.string,
  title: t.string,
  description: t.string,
  body: t.string,
  tagList: t.array(tagCodec),
  createdAt: t.string,
  updatedAt: t.string,
  favorited: t.boolean,
  favoriteCount: t.number,
  auhtor: profileCodec,
})

export type Article = t.TypeOf<typeof articleCodec>

export const articlesCodec = t.type({
  articles: t.array(articleCodec),
  articlesCount: t.number,
})
export type Articles = t.TypeOf<typeof articlesCodec>
