export interface CartModel {
  books:         Book[];
  totalPrice:    number;
  totalQuantity: number;
  basketId:      number;
}

export interface Book {
  bookId:     number;
  bookCover:  string;
  title:      string;
  authorName: string;
  price:      number;
  quantity:   number;
}
