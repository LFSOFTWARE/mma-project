import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRankingDto } from './dto/create-ranking.dto';
import { UpdateRankingDto } from './dto/update-ranking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ranking } from './entities/ranking.entity';
import { Repository } from 'typeorm';
import { Fighter } from 'src/entitys/fighter.entity';

@Injectable()
export class RankingService {
  constructor(
    @InjectRepository(Ranking)
    private repository: Repository<Ranking>,
    @InjectRepository(Fighter)
    private fighterRepository: Repository<Fighter>,
  ) {}

  async create(createRankingDto: CreateRankingDto) {
    const fighter = await this.fighterRepository.findOne({
      where: { id: createRankingDto.fighter },
    });

    if (!fighter) {
      throw new NotFoundException('Fighter not found');
    }

    const newRanking = this.repository.create(createRankingDto);

    return await this.repository.save(newRanking);
  }

  async findAll(
    page = 1,
    pageSize = 50,
  ): Promise<{ rankings: Ranking[]; total: number }> {
    const [rankings, total] = await this.repository.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
      relations: ['fighter'],
    });

    return { rankings, total };
  }

  async findOne(id: number) {
    const ranking = await this.repository.findOne({
      where: { id },
      relations: ['fighter'],
    });
    if (!ranking) {
      throw new NotFoundException('Ranking not found');
    }
    return ranking;
  }

  update(id: number, updateRankingDto: UpdateRankingDto) {
    return `This action updates a #${id} ranking`;
  }

  async remove(id: number) {
    const ranking = await this.repository.findOne({ where: { id } });
    if (!ranking) {
      throw new NotFoundException('Ranking not found');
    }
    return await this.repository.remove(ranking);
  }
}
