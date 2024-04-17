import { SortDirection } from '@/shared/domain/repositories/searchable-repository-contracts'
import { ListUsersUseCase } from '@/users/aplication/usecases/listusers.usecase'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class ListUsersDto implements ListUsersUseCase.Input {
  @ApiPropertyOptional({ description: 'Page that will be returned' })
  @IsOptional()
  page?: number

  @ApiPropertyOptional({ description: 'Number of records per page' })
  @IsOptional()
  perPage?: number

  @ApiPropertyOptional({
    description: 'Column defined to order the data: "name" or "createdAt"',
  })
  @IsOptional()
  sort?: string

  @ApiPropertyOptional({
    description: 'Data ordering: ascending or descending',
  })
  @IsOptional()
  sortDir?: SortDirection

  @ApiPropertyOptional({ description: 'Data entered to filter the result' })
  @IsOptional()
  filter?: string
}
