import { UpdatePasswordUseCase } from '@/users/aplication/usecases/update-password.usecase'

export class UpdatePasswordDto
  implements Omit<UpdatePasswordUseCase.Input, 'id'>
{
  password: string
  oldPassword: string
}
