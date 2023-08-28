import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { Statistics } from 'src/entitys/statistics.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Fighter } from 'src/entitys/fighter.entity';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Statistics)
    private repository: Repository<Statistics>,
    @InjectRepository(Fighter)
    private fighterRepository: Repository<Fighter>,
  ) {}
  async create(createStatisticDto: CreateStatisticDto) {
    const fighter = await this.fighterRepository.findOne({
      where: { id: createStatisticDto.fighter },
    });

    if (!fighter) {
      throw new NotFoundException('Fighter not found');
    }

    const figtherDto: any = createStatisticDto;
    figtherDto.fighter = fighter;

    const newRanking = this.repository.create(figtherDto);

    return await this.repository.save(newRanking);
  }

  async findAll(
    page = 1,
    pageSize = 50,
  ): Promise<{ statistics: Statistics[]; total: number }> {
    const [statistics, total] = await this.repository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      relations: ['fighter'],
    });

    return { statistics, total };
  }

  async findOne(id: number) {
    const statistic = await this.repository.findOne({
      where: { id },
      relations: ['fighter'],
    });
    if (!statistic) {
      throw new NotFoundException('statistic not found');
    }
    return statistic;
  }

  async findByFighter(
    idFighter: number,
    page = 1,
    pageSize = 50,
  ): Promise<{ statistics: Statistics[]; total: number }> {
    const fighter = await this.fighterRepository.findOne({
      where: { id: idFighter },
    });

    if (!fighter) {
      throw new NotFoundException('Fighter not found');
    }

    const [statistics, total] = await this.repository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return { statistics, total };
  }

  async remove(id: number) {
    const statistic = await this.repository.findOne({ where: { id } });
    if (!statistic) {
      throw new NotFoundException('Statistic not found');
    }
    return await this.repository.remove(statistic);
  }
}
