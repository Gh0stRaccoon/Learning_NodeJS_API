
const { verifySchema, ...schemas } = require('../../schemas')
const { v4: uuid } = require('uuid')
let students = require('../../utils/students/info')
const cursos = require('../../utils/courses/info')

exports.create_student = async (req, res) => {
  const verificationResult = verifySchema(schemas.student, req.body)
  if (verificationResult.error) {
    return res.status(400).json({ ...verificationResult })
  }
  const student = req.body
  const new_student = { ...student, id: uuid().slice(0, 6) }
  students.push(new_student)

  res.status(201).json({ message: 'student creado con éxito', studend: new_student })

}

exports.get_students = async (req, res) => {
  const students_cursos = students.map(student => {
    const { name, lastname, course } = student
    const courseInfo = cursos.find(curso => curso.id === course)
    return {
      name, lastname, course: courseInfo
    }
  })
  return res.status(200).json(students_cursos)
}