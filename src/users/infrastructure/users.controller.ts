import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  HttpCode,
  Query,
  Put,
} from '@nestjs/common'
import { SignupDto } from './dto/signup'
import { UpdateUserDto } from './dto/update-user.dto'
import { SignupUseCase } from '../aplication/usecases/signup.usecase'
import { SigninUseCase } from '../aplication/usecases/signin.usecase'
import { UpdateUserUseCase } from '../aplication/usecases/update-user.usercase'
import { UpdatePasswordUseCase } from '../aplication/usecases/update-password.usecase'
import { DeleteUserUseCase } from '../aplication/usecases/delete-user.usecase'
import { GetUserUseCase } from '../aplication/usecases/getuser.usecase'
import { ListUsersUseCase } from '../aplication/usecases/listusers.usecase'
import { SigninDto } from './dto/signin.dto'
import { ListUsersDto } from './dto/list-users.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import { UserOutput } from '../aplication/dtos/user-output'
import {
  UserCollectionPresenter,
  UserPresenter,
} from './presenters/user.presenter'

@Controller('users')
export class UsersController {
  @Inject(SignupUseCase.UseCase)
  private signupUseCase: SignupUseCase.UseCase

  @Inject(SigninUseCase.UseCase)
  private signinUseCase: SigninUseCase.UseCase

  @Inject(UpdateUserUseCase.UseCase)
  private updateUserUseCase: UpdateUserUseCase.UseCase

  @Inject(UpdatePasswordUseCase.UseCase)
  private updatePasswordUseCase: UpdatePasswordUseCase.UseCase

  @Inject(DeleteUserUseCase.UseCase)
  private deleteUserUseCase: DeleteUserUseCase.UseCase

  @Inject(GetUserUseCase.UseCase)
  private getUserUseCase: GetUserUseCase.UseCase

  @Inject(ListUsersUseCase.UseCase)
  private listUsersUseCase: ListUsersUseCase.UseCase

  static userToResponse(output: UserOutput) {
    return new UserPresenter(output)
  }

  static listUsersToResponse(output: ListUsersUseCase.Output) {
    return new UserCollectionPresenter(output)
  }

  @Post()
  async create(@Body() signupDto: SignupDto) {
    const output = await this.signupUseCase.execute(signupDto)
    return UsersController.userToResponse(output)
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() signinDto: SigninDto) {
    const output = await this.signinUseCase.execute(signinDto)
    return UsersController.userToResponse(output)
  }

  @Get()
  async search(@Query() searchParams: ListUsersDto) {
    const output = await this.listUsersUseCase.execute(searchParams)
    return UsersController.listUsersToResponse(output)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const output = await this.getUserUseCase.execute({ id })
    return UsersController.userToResponse(output)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const output = await this.updateUserUseCase.execute({
      id,
      ...updateUserDto,
    })
    return UsersController.userToResponse(output)
  }

  @Patch(':id')
  async updatePassword(
    @Param('id') id: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    const output = await this.updatePasswordUseCase.execute({
      id,
      ...updatePasswordDto,
    })
    return UsersController.userToResponse(output)
  }

  @HttpCode(204)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.deleteUserUseCase.execute({ id })
  }
}
