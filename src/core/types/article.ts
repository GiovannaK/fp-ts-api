import * as t from 'io-ts'

export const articleCodec = t.type({
  slug: t.string,
  title: t.string,
  description: t.string,
  body: t.string,
  createdAt: t.string,
  updatedAt: t.string,
  favorited: t.boolean,
  favoriteCount: t.number,
})

export type Article = t.TypeOf<typeof articleCodec>

export type Articles = {
  articles: Article[]
  articlesCount: number
}
