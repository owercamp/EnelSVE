class ITEMS {
  constructor(book: any) {
    return [
      book.getIDNumber(),
      book.getPatient(),
      book.getPosition(),
      book.getExamType(),
      book.getDestiny(),
      book.getDate(),
      book.getDateOfBirth(),
      book.getAuricleAuricEarRight(),
      book.getAuricleAuricleLeftEar(),
      book.getAuditoryCanalRightEar(),
      book.getAuditoryCanalLeftEar(),
      book.getTympanicMembraneLeftEar(),
      book.getTympanicMembraneRightEar(),
      book.getOd500(),
      book.getOd1000(),
      book.getOd2000(),
      book.getOd3000(),
      book.getOd4000(),
      book.getOd6000(),
      book.getOd8000(),
      book.getOi500(),
      book.getOi1000(),
      book.getOi2000(),
      book.getOi3000(),
      book.getOi4000(),
      book.getOi6000(),
      book.getOi8000()
    ];
  }
}

export default ITEMS;