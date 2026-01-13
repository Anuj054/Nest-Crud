import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) { }

    async findByEmail(email: string) {
        return this.userModel.findOne({ email });
    }

    async create(email: string, password: string) {
        const hashed = await bcrypt.hash(password, 10);
        return this.userModel.create({ email, password: hashed });
    }

    async validateUser(email: string, password: string) {
        const user = await this.findByEmail(email);
        if (!user) return null;

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null;

        return user;
    }
}
