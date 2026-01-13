import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,

} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BikesService } from './bikes.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';



@ApiTags('Bikes')
@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) { }

  @Get()
  findAll() {
    return this.bikesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikesService.findOne(id);
  }

  @Post()
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.create(createBikeDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikesService.update(id, updateBikeDto);
  }

  @Patch(':id')
  partialUpdate(
    @Param('id') id: string,
    @Body() updateBikeDto: UpdateBikeDto,
  ) {
    return this.bikesService.update(id, updateBikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikesService.remove(id);
  }
}
