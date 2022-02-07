import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { CreateUser } from '@/core/types/user'
import { pipe } from 'fp-ts/lib/function'

export type OutsideRegister<A> = (data: CreateUser) => Promise<A>

type Register = <A>(outsideRegister: OutsideRegister<A>) =>
  (data: CreateUser) => TE.TaskEither<Error, A>

export const register: Register = (outsideRegister) => (data) => {
  return pipe(
    TE.tryCatch(
      () => outsideRegister(data),
      E.toError,
    ),
  )
}
