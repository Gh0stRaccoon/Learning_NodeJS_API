const express = require('express')
const router = express.Router()
let cursos = require('../../utils/courses/info')

exports.get_course = (req, res) => {
  const course_id = req.params.id
  const course = cursos.find(course => course.id === course_id)
  return course ? res.status(200).json(course) : res.status(404).json({ error: "Curso no encontrado" })
}

exports.delete_course = (req, res) => {
  const course_id = req.params.id
  const course_index = cursos.findIndex(course => course.id === course_id);
  if (course_index != -1) {
    const course_to_remove = cursos[course_index]
    alumnos.splice(course_index, 1)

    return res.status(200).json({ message: 'Curso eliminado con éxito.', deleted_item: course_to_remove })
  }

  return res.status(404).json({ error: 'No se encontró el curso a eliminar' })
}
