export default class HolbertonCourse {
  constructor(name, length, student) {
    this._name = name;
    this._length = length;
    this._student = student;
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

  get student() {
    return this._student;
  }

  set student(val) {
    if (!(Array.isArray(val))) {
      throw new TypeError('Students must be array of strings');
    }

    val.forEach((student) => {
      if (student !== 'string') {
        throw new TypeError('Each Student must be array of strings');
      }
    });

    this._student = val;
  }
}
