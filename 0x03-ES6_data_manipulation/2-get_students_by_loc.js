// 2-get_students_by_loc.js
function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) || typeof city !== 'string') {
    return [];
  }
  return students.filter((students) => students.location === city);
}

export default getStudentsByLocation;

