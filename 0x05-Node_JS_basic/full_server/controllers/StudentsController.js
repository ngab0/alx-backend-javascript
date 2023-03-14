import readDatabase from '../utils';

const caseInsensitiveSort = (a, b) => {
  if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
  if (a[0].toLowerCase() > b[0].toLowerCase()) return 1;
  return 0;
};

const validMajors = ['CS', 'SWE'];

export default class StudentsController {
  static getAllStudents(request, response) {
    const dbFile = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(dbFile)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        for (const [field, group] of Object.entries(studentGroups).sort(caseInsensitiveSort)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const dbFile = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!validMajors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dbFile)
      .then((studentGroups) => {
        let responseText = '';
        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}
