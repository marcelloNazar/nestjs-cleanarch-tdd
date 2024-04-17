import { UserOutput } from '@/users/aplication/dtos/user-output'
import { Transform } from 'class-transformer'
import { CollectionPresenter } from '@/shared/infrastructure/presenters/collection.presenter'
import { ListUsersUseCase } from '@/users/aplication/usecases/listusers.usecase'
import { ApiProperty } from '@nestjs/swagger'

export class UserPresenter {
  @ApiProperty({ description: 'User identification' })
  id: string

  @ApiProperty({ description: 'Username' })
  name: string

  @ApiProperty({ description: 'User E-mail' })
  email: string

  @ApiProperty({ description: 'User creation date' })
  @Transform(({ value }: { value: Date }) => value.toISOString())
  createdAt: Date

  constructor(output: UserOutput) {
    this.id = output.id
    this.name = output.name
    this.email = output.email
    this.createdAt = output.createdAt
  }
}

export class UserCollectionPresenter extends CollectionPresenter {
  data: UserPresenter[]

  constructor(output: ListUsersUseCase.Output) {
    const { items, ...paginationProps } = output
    super(paginationProps)
    this.data = items.map(item => new UserPresenter(item))
  }
}
