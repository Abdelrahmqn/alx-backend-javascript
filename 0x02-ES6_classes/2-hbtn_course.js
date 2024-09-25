export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!(Array.isArray(val))) {
      throw new TypeError('Studentsstudentss must be array of strings');
    }

    val.forEach((students) => {
      if (typeof students !== 'string') {
        throw new TypeError('Each Studentsstudents must be array of strings');
      }
    });

    this._students = val;
  }
}
