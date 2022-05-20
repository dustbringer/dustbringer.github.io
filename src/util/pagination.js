export const N_PER_PAGE = 6;
export const getPage = (list, page, nPerPage) =>
  list.slice(nPerPage * (page - 1), nPerPage * page);
