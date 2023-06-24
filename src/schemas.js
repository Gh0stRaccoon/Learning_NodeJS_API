const courses = require('./utils/courses/info')

const alumno = {
  id: 'auto',
  name: 'string',
  lastname: 'string',
  course: 'string'
}

const curso = {
  id: 'auto',
  name: 'string',
  description: 'string'
}

const verifySchema = (schema, req) => {
  const noPassKeys = []

  for (key in schema) {
    console.log(schema[key])
    if (!(schema[key] === typeof req[key]) && schema[key] !== 'auto') {
      noPassKeys.push(key)
    }
    if (key === 'course') {
      const courseExist = req.course ? courses.some(course => course.id === req.course) : null
      if (!courseExist && req.course) {
        return { error: true, message: 'No existe un curso con el id entregado', courses }
      }
      continue
    }
  }
  return { error: !!noPassKeys.length, message: `${noPassKeys.length ? `En la petición faltan los siguientes keys: ${noPassKeys.join(', ')}.` : 'Validación exitosa'}` }
}

const schemas = { alumno, curso, verifySchema }

module.exports = schemas