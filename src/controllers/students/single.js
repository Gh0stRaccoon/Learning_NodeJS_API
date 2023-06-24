
let students = require('../../utils/students/info')
const cursos = require('../../utils/courses/info')

exports.student_single = (req, res) => {
  const student_id = req.params.id
  const { course: course_id, ...student_info } = students.find(student => student.id === student_id) || {}

  if (student_info.name) {
    const curso = cursos.find(course => course.id === course_id)
    const student_curso = { ...student_info, course: curso }
    return res.status(200).json(student_curso)
  }

  return res.status(404).json({ error: "student no encontrado" })
}

exports.student_delete = (req, res) => {
  const student_id = req.params.id
  const student_index = students.findIndex(student => student.id === student_id);
  if (student_index != -1) {
    const student_to_remove = students[student_index]
    students.splice(student_index, 1)

    return res.status(200).json({ message: 'student eliminado con éxito.', deleted_item: student_to_remove })
  }

  return res.status(404).json({ error: 'No se encontró el student a eliminar' })
}

exports.student_single_put = (req, res) => {
  try {
    const student_id = req.params.id
    const { name, lastname, course } = req.body
    const student_index = students.findIndex(student => student.id === student_id);
    if (student_index != -1) {
      const student_to_update = students[student_index]
      console.log(student_to_update, student_index)
      const student_updated = {
        id: student_to_update.id,
        name: name || student_to_update.name,
        lastname: lastname || student_to_update.lastname,
        course: course || student_to_update.course
      }
      students[student_index] = student_updated
      return res.status(200).send(student_updated)
    }
    throw new Error('Usuario no encontrado, nada que editar')
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}
