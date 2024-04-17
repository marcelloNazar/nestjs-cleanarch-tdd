import { UpdateUserUseCase } from '@/users/aplication/usecases/update-user.usercase'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateUserDto implements Omit<UpdateUserUseCase.Input, 'id'> {
  @ApiProperty({ description: 'User Name' })
  @IsString()
  @IsNotEmpty()
  name: string
}
