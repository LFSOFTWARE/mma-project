import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFighterDto } from './dto/create-fighter.dto';
import { UpdateFighterDto } from './dto/update-fighter.dto';
import { Repository } from 'typeorm';
import { Fighter } from 'src/entitys/fighter.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter)
    private repository: Repository<Fighter>,
  ) {}

  async create(createFighterDto: CreateFighterDto) {
    const newFighter = this.repository.create(createFighterDto);
    return await this.repository.save(newFighter);
  }

  async findAll(
    page = 1,
    pageSize = 50,
  ): Promise<{ fighters: Fighter[]; total: number }> {
    const [fighters, total] = await this.repository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return { fighters, total };
  }

  async findOne(id: number) {
    const fighter = await this.repository.findOne({ where: { id } });
    if (!fighter) {
      throw new NotFoundException('Fighter not found');
    }
    return fighter;
  }

  async update(id: number, updateFighterDto: UpdateFighterDto) {
    const fighter = await this.repository.findOne({ where: { id } });

    if (!fighter) {
      throw new NotFoundException('Fighter not found');
    }

    await this.repository.update(id, updateFighterDto);

    return await this.repository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const fighter = await this.repository.findOne({ where: { id } });
    if (!fighter) {
      throw new NotFoundException('Fighter not found');
    }
    return await this.repository.remove(fighter);
  }
}
