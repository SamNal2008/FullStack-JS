import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

  private readonly courses: Course[];

  create(createCourseDto: CreateCourseDto) {
    let newCourse = new Course();

    newCourse.content = createCourseDto.content;
    newCourse.title = createCourseDto.title;
    newCourse.id = this.courses.length;

    this.courses.push(new Course());
  }

  findAll() {
    return this.courses;
  }

  findOne(id: number) {
    return this.courses.find(elt => {
      return elt.id === id
    });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    if (id >= this.courses.length) {
      return false;
    }
    let index = this.courses.findIndex(elt => {
      return elt.id === id;
    });
    this.courses.splice(index, 1);
    return true;
  }
}
