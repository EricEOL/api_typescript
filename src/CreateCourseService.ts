interface Course {
  name: String;
  duration: number;
  educator: String;
}

class CreateCourseService {

  execute({name, duration, educator}: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();