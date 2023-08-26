import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // Make sure you have properly set up the ConfigModule

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async (configService: ConfigService) => ({
        type: 'postgres', // You can change this to your database type
        host: 'localhost', // Hostname of your database server
        port: 5432, // Port number as a number
        username: 'postgres', // Username for the database
        password: 'password', // Password for the database
        database: 'mma', // Name of the database
        entities: [User],
        synchronize: true, // Set to true for development, but false for production
      }),
    }),
  ],
})
export class DatabaseModule {}
