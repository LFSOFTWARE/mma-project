import { Injectable } from '@nestjs/common';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { Repository } from 'typeorm';
import { Fighter } from 'src/models/fighter.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter)
    private repository: Repository<Fighter>,
  ) {}
  create(createFighterDto: CreateFighterDto) {
    const newFighter = this.repository.create(createFighterDto);
    return this.repository.save(newFighter);
  }

  findAll() {
    return `This action returns all fighter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fighter`;
  }

  update(id: number, updateFighterDto: UpdateFighterDto) {
    return `This action updates a #${id} fighter`;
  }

  remove(id: number) {
    return `This action removes a #${id} fighter`;
  }
}
