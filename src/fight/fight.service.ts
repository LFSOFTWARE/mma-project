import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFightDto } from './dto/create-fight.dto';
import { UpdateFightDto } from './dto/update-fight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fight } from 'src/entitys/fight.entity';
import { Repository } from 'typeorm';
import { Fighter } from 'src/entitys/fighter.entity';
import { Event } from 'src/entitys/event.entity';

@Injectable()
export class FightService {
  constructor(
    @InjectRepository(Fight)
    private repository: Repository<Fight>,
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(Fighter)
    private fighterRepository: Repository<Fighter>,
  ) {}

  async create(createFightDto: CreateFightDto) {
    const event = await this.eventRepository.findOne({
      where: { id: createFightDto.event },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }
    const fighterA = await this.fighterRepository.findOne({
      where: { id: createFightDto.fighterA },
    });

    if (!fighterA) {
      throw new NotFoundException('FighterA not found');
    }

    const fighterB = await this.fighterRepository.findOne({
      where: { id: createFightDto.fighterB },
    });

    if (!fighterB) {
      throw new NotFoundException('FighterB not found');
    }

    const newFight = this.repository.create({
      event,
      fighterA,
      fighterB,
      resultado: createFightDto.resultado,
    });

    return await this.repository.save(newFight);
  }

  async findAll(
    page = 1,
    pageSize = 50,
  ): Promise<{ fights: Fight[]; total: number }> {
    const [fights, total] = await this.repository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      relations: ['event', 'fighterA', 'fighterB'],
    });

    return { fights, total };
  }

  async findOne(id: number) {
    const fight = await this.repository.findOne({
      where: { id },
      relations: ['event', 'fighterA', 'fighterB'],
    });
    if (!fight) {
      throw new NotFoundException('Fight not found');
    }
    return fight;
  }

  async update(id: number, updateFightDto: UpdateFightDto) {
    const fight = await this.repository.findOne({
      where: { id },
    });

    if (!fight) {
      throw new NotFoundException('Fight not found');
    }

    // await this.repository.update(id, updateFightDto);

    return await this.repository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const fight = await this.repository.findOne({ where: { id } });
    if (!fight) {
      throw new NotFoundException('Fight not found');
    }
    return await this.repository.remove(fight);
  }
}
