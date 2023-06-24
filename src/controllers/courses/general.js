const { verifySchema, ...schemas } = require('../../schemas')
const { v4: uuid } = require('uuid')
let cursos = require('../../utils/courses/info')

exports.get_courses = (req, res) => {
  return res.status(200).json(cursos)
}

exports.create_course = (req, res) => {
  const validationResult = verifySchema(schemas.curso, req.body)

  if (validationResult.error) {
    return res.json({ error: `${validationResult.message}` })
  }
  const { name, description } = req.body
  const new_course = { name, description, id: uuid().slice(0, 6) }
  cursos.push(new_course)
  return res.status(201).json({ message: 'El curso fue agregado con éxito.', course: new_course })
}
