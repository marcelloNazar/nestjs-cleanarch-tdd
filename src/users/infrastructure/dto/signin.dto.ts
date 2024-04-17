import { SigninUseCase } from '@/users/aplication/usecases/signin.usecase'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class SigninDto implements SigninUseCase.Input {
  @ApiProperty({ description: 'User E-mail' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ description: 'User Password' })
  @IsString()
  @IsNotEmpty()
  password: string
}
