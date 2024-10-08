export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * for each attribute get and sett
   */
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
