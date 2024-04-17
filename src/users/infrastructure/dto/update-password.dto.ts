import { UpdatePasswordUseCase } from '@/users/aplication/usecases/update-password.usecase'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class UpdatePasswordDto
  implements Omit<UpdatePasswordUseCase.Input, 'id'>
{
  @ApiProperty({ description: 'User New Password' })
  @IsString()
  @IsNotEmpty()
  password: string

  @ApiProperty({ description: 'User Current Password' })
  @IsString()
  @IsNotEmpty()
  oldPassword: string
}
