import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1606867355588 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(new Table({
            name: 'letters',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()'
              },
              {
                name: 'remetente',
                type: 'varchar',
              },
              {
                name: 'destinatario',
                type: 'varchar'
              },
              {
                name: 'msg',
                type: 'varchar'
              },
            ]
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('letters');
    }

}
