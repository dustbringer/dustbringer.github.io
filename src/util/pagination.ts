export const N_PER_PAGE = 6;
export const getPage = <T>(list: T[], page: number, nPerPage: number) =>
  list.slice(nPerPage * (page - 1), nPerPage * page);
