const fs = require("fs");
const path = require("path");
class Course {
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
  }

  getCourse() {
    return {
      title: this.title,
      price: this.price,
      img: this.img,
    };
  }

  async save() {
    const course = await Course.getAll();
    await course.push(this.getCourse());
    console.log(course);
    fs.writeFile("./data/courses.json", JSON.stringify(course), () => {});
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile("./data/courses.json", "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  }
}
module.exports = Course;
