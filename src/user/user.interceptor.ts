import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { User } from './user.entity';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      // Hide the password information on each request to user
      map((data) => {
        console.log(data);
        if (data instanceof User) data.password = undefined;
        else if (data instanceof Array)
          for (const u of data) u.password = undefined;
        return data;
      }),
    );
  }
}
