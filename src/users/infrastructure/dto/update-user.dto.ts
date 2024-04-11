import { UpdateUserUseCase } from '@/users/aplication/usecases/update-user.usercase'
import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateUserDto implements Omit<UpdateUserUseCase.Input, 'id'> {
  @IsString()
  @IsNotEmpty()
  name: string
}
