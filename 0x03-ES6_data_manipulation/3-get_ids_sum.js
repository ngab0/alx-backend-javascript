export default function getStudentIdsSum(students) {
  return students.reduce((idSum, student) => idSum + student.id, 0);
}
