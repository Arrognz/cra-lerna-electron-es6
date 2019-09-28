class User {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.mail = undefined;
  }
}

User.prototype.toString = function serialize() {
  return `${this.name} [${this.job}]`;
};

export default User;
