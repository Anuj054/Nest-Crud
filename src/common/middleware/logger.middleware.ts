import {
    Injectable,
    NestMiddleware,
    UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request & { user?: any }, res: Response, next: NextFunction) {
        const { method, originalUrl } = req;
        const startTime = Date.now();

        const publicRoutes = ['/auth/login', '/auth/register', '/api'];

        const isPublic = publicRoutes.some(route =>
            originalUrl.startsWith(route),
        );

        if (!isPublic) {
            const authHeader = req.headers.authorization;

            if (!authHeader) {
                throw new UnauthorizedException('Authorization header missing');
            }

            const [type, token] = authHeader.split(' ');

            if (type !== 'Bearer' || !token) {
                throw new UnauthorizedException('Invalid authorization format');
            }

            try {
                const decoded = jwt.verify(token, 'JWT_SECRET_KEY');
                req.user = decoded;
            } catch {
                throw new UnauthorizedException('Invalid or expired token');
            }
        }

        res.on('finish', () => {
            const duration = Date.now() - startTime;
            console.log(
                `[${method}] ${originalUrl} - ${res.statusCode} (${duration}ms)`,
            );
        });

        next();
    }
}
