import * as t from 'io-ts'

type EmailBrand = {
  readonly Email: unique symbol
}

export const Email = t.brand(
  t.string,
  (value): value is t.Branded<string, EmailBrand> => isEmail(value),
  'Email',
)

const isEmail = (value: string) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
}
