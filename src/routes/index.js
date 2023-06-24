
const express = require('express')
const router = express.Router()
const { create_student, get_students } = require('../controllers/students/general')
const { student_single, student_single_put, student_delete } = require('../controllers/students/single')
const { get_courses, create_course } = require('../controllers/courses/general')
const { get_course, delete_course } = require('../controllers/courses/single')

module.exports = () => {
  router.post('/alumnos', create_student)
  router.get('/alumnos', get_students)

  router.get('/alumno/:id', student_single)
  router.delete('/alumno/:id', student_delete)
  router.put('/alumno/:id', student_single_put)

  router.get('/cursos', get_courses)
  router.post('/cursos', create_course)

  router.get('/curso/:id', get_course)
  router.post('/curso/:id', delete_course)

  return router
}