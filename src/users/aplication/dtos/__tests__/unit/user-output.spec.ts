import { UserEntity } from '@/users/entities/user.entity'
import { UserDataBuilder } from '@/users/helpers/user-data-builder'
import { UserOutputMapper } from '../../user-output'

describe('UserOutputMapper unit tests', () => {
  it('should convert a user in output', () => {
    const entity = new UserEntity(UserDataBuilder({}))
    const spyToJson = jest.spyOn(entity, 'toJSON')
    const sut = UserOutputMapper.toOutput(entity)

    expect(spyToJson).toHaveBeenCalled()
    expect(sut).toStrictEqual(entity.toJSON())
  })
})
