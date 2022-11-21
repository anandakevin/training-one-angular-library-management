export interface Book {
  bookId: number;
  bookName: string;
  bookCategoryId: string;
  bookAuthor: string;
  bookImage: any;
  //use HTMLImageEleemnt or File
  bookNumber: number;
  bookDescription: string;
  publisher: string;
  isAvailable: any;
}

export class BookModel {
  constructor(
    public bookName: string,
    public bookCategoryId: string,
    public bookAuthor: string,
    public bookImage: any,
    public bookNumber: number,
    public bookDescription: string,
    public publisher: string,
    public isAvailable: any
  ) {}
}
