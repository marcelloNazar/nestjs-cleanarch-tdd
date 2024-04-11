import { UpdatePasswordUseCase } from '@/users/aplication/usecases/update-password.usecase'
import { IsNotEmpty, IsString } from 'class-validator'

export class UpdatePasswordDto
  implements Omit<UpdatePasswordUseCase.Input, 'id'>
{
  @IsString()
  @IsNotEmpty()
  password: string

  @IsString()
  @IsNotEmpty()
  oldPassword: string
}
