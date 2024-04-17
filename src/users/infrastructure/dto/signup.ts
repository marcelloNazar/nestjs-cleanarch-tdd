import { SignupUseCase } from '@/users/aplication/usecases/signup.usecase'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class SignupDto implements SignupUseCase.Input {
  @ApiProperty({ description: 'Username' })
  @IsString()
  @IsNotEmpty()
  name: string

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
