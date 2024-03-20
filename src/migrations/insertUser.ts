import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertUser080100_1647629357376 implements MigrationInterface {
  name = 'insertUser080100_1647629357376';
  transaction?: boolean;
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO user (fullName, shortName, email, password, phone , role) VALUES
      ('User 1 Full Name', 'User 1 Short Name', 'user1@example.com', 'password1', '123456789', 1),
      ('User 2 Full Name', 'User 2 Short Name', 'user2@example.com', 'password2', '987654321', 1),
      ('User 3 Full Name', 'User 3 Short Name', 'user3@example.com', 'password3', '456123789', 1),
      ('User 4 Full Name', 'User 4 Short Name', 'user4@example.com', 'password4', '789456123', 1),
      ('User 5 Full Name', 'User 5 Short Name', 'user5@example.com', 'password5', '321654987', 1)
    ON DUPLICATE KEY UPDATE email = VALUES(email)
   `,
    );
  }
  down(queryRunner: QueryRunner): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
