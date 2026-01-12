import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BikeDocument = Bike & Document;

@Schema({ timestamps: true })
export class Bike {
  @Prop({ required: true })
  make: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  type: string;
}

export const BikeSchema = SchemaFactory.createForClass(Bike);
