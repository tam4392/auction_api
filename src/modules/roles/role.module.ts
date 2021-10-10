// import { RoleController } from './controller/role.controller';
import { Role } from './entities/role.entity';
// import { RoleService } from './service/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [],
  controllers: [],
  exports: [],
})
export class RoleModule {}
