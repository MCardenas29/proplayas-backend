import { Migration } from '@mikro-orm/migrations';
import { hash } from 'bcrypt';
import { UserRole } from '../role/role.enum';

export class Migration20240923054527 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table \`user\` (\`email\` varchar(255) not null, \`password\` varchar(72) not null, \`role\` enum('admin', 'editor') null default null, primary key (\`email\`)) default character set utf8mb4 engine = InnoDB;`,
    );
    const passwd = await hash('123tamarindo', 12);
    this.addSql(`insert into \`user\`(email, password, role)
      values ('admin@admin.admin', '${passwd}', '${UserRole.ADMIN}')`);
  }
}
