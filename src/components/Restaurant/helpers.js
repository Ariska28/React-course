export const calculateRestaurantRating = (reviews) => {
  return Math.floor(
    reviews.reduce((result, review) => result + review.rating, 0) /
      reviews.length
  );
};
