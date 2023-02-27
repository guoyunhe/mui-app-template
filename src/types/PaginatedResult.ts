export default interface PaginatedResult<T> {
  meta: {
    /** Page number starts from 1 */
    currentPage: number;
    /** First page number, usually 1 */
    firstPage: number;
    /** API url to first page data */
    firstPageUrl: string;
    /** Last page number, same as total page count */
    lastPage: number;
    /** API url to last page data */
    lastPageUrl: string;
    /** API url to previous page data */
    previousPageUrl: string | null;
    /** API url to next page data */
    nextPageUrl: string | null;
    /** Number of records per page */
    perPage: number;
    /** Total record count */
    total: number;
  };
  data: T[];
}
