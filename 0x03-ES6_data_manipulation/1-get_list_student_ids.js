export default function getListStudentIds(objs) {
  const ids = objs instanceof Array ? objs.map((obj) => obj.id) : [];
  return ids;
}
