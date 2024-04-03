import { SigninUseCase } from '@/users/aplication/usecases/signin.usecase'

export class SigninDto implements SigninUseCase.Input {
  email: string
  password: string
}
