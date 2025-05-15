import BOOK from "../../models/Book";
import ITEMS from "../configurations/configItems";
import InsertDTO from "../Dto/InsertDto";

const InsertRegister = (array: Array<object>) => {
  const book = new BOOK();
  for (const element of array) {
    RegisterInformation(element, book);
  }
}

const RegisterInformation = (values: object | any, book: BOOK) => {
  const structure: any = {};
  const Items: any = new ITEMS(book);

  for (const key in values) {
    for (const element of Items) {
      switch (String(key).toUpperCase().trim()) {
        case element:
          structure[element] = values[key];
      }
    }
  }

  const register = new InsertDTO(
    `${structure[book.getIDNumber()]}-${new Date().getFullYear()}` || "",
    "",
    structure[book.getIDNumber()] || "",
    structure[book.getPatient()] || "",
    structure[book.getPosition()] || "",
    "",
    structure[book.getDestiny()] || "",
    ...Array(3).fill(""),
    structure[book.getDateOfBirth()] || "",
    "",
    structure[book.getAuricleAuricEarRight()] || "",
    structure[book.getAuricleAuricleLeftEar()] || "",
    structure[book.getAuditoryCanalRightEar()] || "",
    structure[book.getAuditoryCanalLeftEar()] || "",
    structure[book.getTympanicMembraneLeftEar()] || "",
    structure[book.getTympanicMembraneRightEar()] || "",
    structure[book.getDate()] || "",
    ...Array(2).fill(""),
    structure[book.getExamType()] || "",
    structure[book.getOd500()] || "",
    structure[book.getOd1000()] || "",
    structure[book.getOd2000()] || "",
    structure[book.getOd3000()] || "",
    structure[book.getOd4000()] || "",
    structure[book.getOd6000()] || "",
    structure[book.getOd8000()] || "",
    structure[book.getOi500()] || "",
    structure[book.getOi1000()] || "",
    structure[book.getOi2000()] || "",
    structure[book.getOi3000()] || "",
    structure[book.getOi4000()] || "",
    structure[book.getOi6000()] || "",
    structure[book.getOi8000()] || "",
    ...Array(31).fill("")
  );

  const registerArray = Object.values(register);

  google.script.run.withSuccessHandler(response => {
    console.log(response);
  })
    .withFailureHandler(error => {

    })
    .insertInfo(registerArray);
}

export { InsertRegister };