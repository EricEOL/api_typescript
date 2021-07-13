import {  Router, Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {

  const course = {
    name: "NodeJS",
    duration: 100,
    educator: "Eric"
  }

  CreateCourseService.execute(course);

  return res.send("Loucura");
}