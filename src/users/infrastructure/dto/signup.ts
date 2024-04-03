import { SignupUseCase } from '@/users/aplication/usecases/signup.usecase'

export class SignupDto implements SignupUseCase.Input {
  name: string
  email: string
  password: string
}
