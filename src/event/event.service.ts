import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fight } from 'src/entitys/fight.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/entitys/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private repository: Repository<Event>,
    @InjectRepository(Fight)
    private fightRepository: Repository<Fight>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const newEvent = this.repository.create(createEventDto);
    return await this.repository.save(newEvent);
  }

  async findAll(
    page = 1,
    pageSize = 50,
  ): Promise<{ events: Event[]; total: number }> {
    const [events, total] = await this.repository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      relations: ['fights'],
    });

    return { events, total };
  }

  async findOne(id: number) {
    const event = await this.repository.findOne({
      where: { id },
      relations: ['fights'],
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  async remove(id: number) {
    const event = await this.repository.findOne({ where: { id } });
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return await this.repository.remove(event);
  }
}
