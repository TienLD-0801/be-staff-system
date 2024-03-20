import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class insertUser080100_1647629357376 implements MigrationInterface {
  name = 'insertUser080100_1647629357376';
  transaction?: boolean;
  async up(queryRunner: QueryRunner): Promise<void> {
    const hashedPassword = await bcrypt.hash('111111111', 12);
    await queryRunner.query(
      `INSERT INTO user (fullName, shortName, email, password, phone , role, isFrozen) VALUES
      ('Admin', 'admin', 'admin@gmail.com', '${hashedPassword}', '0123456789', 0, false),
      ('Manager', 'manager', 'manager@gmail.com', '${hashedPassword}', '0123456789', 1, false),
      ('Leader', 'leader', 'leader@gmail.com', '${hashedPassword}', '0123456789', 2, false),
      ('Staff', 'staff', 'staff@gmail.com', '${hashedPassword}', '0123456789', 3, false)
    ON DUPLICATE KEY UPDATE email = VALUES(email)
   `,
    );
  }
  down(_queryRunner: QueryRunner): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
