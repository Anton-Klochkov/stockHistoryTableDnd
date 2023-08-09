import { Dispatch } from 'react';

export interface PaginationProps {
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  arrLength: number;
}
