export const selectMovies = store => store.movies.movies;
export const selectLoading = store => store.movies.isLoading;
export const selectError = store => store.movies.error;
export const selectTotalPage = store => store.movies.totalPage;
