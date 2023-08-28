import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { FighterService } from './fighter.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';

@ApiTags('fighters') // Tag for this controller's endpoints
@Controller('fighter')
export class FighterController {
  constructor(private readonly fighterService: FighterService) {}

  @Post()
  async create(@Body() createFighterDto: CreateFighterDto) {
    return await this.fighterService.create(createFighterDto);
  }

  @Get()
  async findAll() {
    return await this.fighterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.fighterService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFighterDto: UpdateFighterDto,
  ) {
    return await this.fighterService.update(+id, updateFighterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.fighterService.remove(+id);
  }
}
