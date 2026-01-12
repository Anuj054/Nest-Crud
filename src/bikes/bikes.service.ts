import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bike, BikeDocument } from './schemas/bike.schema';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikesService {
  constructor(
    @InjectModel(Bike.name)
    private bikeModel: Model<BikeDocument>,
  ) { }

  findAll() {
    return this.bikeModel.find().exec();
  }

  async findOne(id: string) {
    const bike = await this.bikeModel.findById(id).exec();
    if (!bike) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
    return bike;
  }

  create(createBikeDto: CreateBikeDto) {
    return this.bikeModel.create(createBikeDto);
  }

  async update(id: string, updateBikeDto: UpdateBikeDto) {
    const bike = await this.bikeModel.findByIdAndUpdate(
      id,
      updateBikeDto,
      { new: true },
    );

    if (!bike) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
    return bike;
  }

  async remove(id: string) {
    const bike = await this.bikeModel.findByIdAndDelete(id);
    if (!bike) {
      throw new NotFoundException(`Bike with ID ${id} not found`);
    }
  }
}
