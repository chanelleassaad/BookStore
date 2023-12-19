export interface BookDetailsModel {
  bookCopyId:      number;
  bookTitle:       string;
  bookDescription: string;
  authors:         string[];
  price:           number;
  bookCover:       string;
  categories:      string[];
  reviews:         Review[];
  publisherName:   string;
  publicationYear: number;
}

export interface Review {
  rating:        string;
  reviewMessage: string;
}
