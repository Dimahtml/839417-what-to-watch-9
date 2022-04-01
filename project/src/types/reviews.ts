export type Review = {
  id: number;
  user: {
    id: number;
    name: string;
  },
  rating: number,
  comment: string;
  date: string;
};

export type PostingReview = {
  comment: string;
  rating: number;
  id: string;
}

export type Reviews = Review[];
