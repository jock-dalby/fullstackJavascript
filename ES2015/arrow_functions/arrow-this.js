this.greet = () => {
    this.teacher.greet(this.students.length).then(
      greeting => console.log(`${this.teacher.name} says: `, greeting),
      err => console.log(err));
  }
