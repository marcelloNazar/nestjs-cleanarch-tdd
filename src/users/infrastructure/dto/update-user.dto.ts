import { UpdateUserUseCase } from '@/users/aplication/usecases/update-user.usercase'

export class UpdateUserDto implements Omit<UpdateUserUseCase.Input, 'id'> {
  name: string
}
