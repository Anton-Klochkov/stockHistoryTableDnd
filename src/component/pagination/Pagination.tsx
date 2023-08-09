import clsx from 'clsx';
import { ReactComponent as Arrow } from './assets/arrow.svg';
import { PaginationProps } from './pagination.interface';
import styles from './pagination.module.css';
import { ELEMENT_PER_PAGE } from '../../stockHistoryPage/stockHistoryPage.constants';

export const Pagination = (props: PaginationProps) => {
  const { setCurrentPage, currentPage, arrLength } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(arrLength / ELEMENT_PER_PAGE); i++) {
    pageNumbers.push(i);
  }
  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const onSetPage = (number: number) => () => {
    setCurrentPage(number);
  };

  return (
    <div className={styles.pagination}>
      <button onClick={onPrev} className={styles.button}>
        <Arrow className={styles.wrapperButton} />
      </button>
      <div className={styles.paginationItem}>
        {pageNumbers.map((num: number) => (
          <div
            key={num}
            className={clsx(
              styles.wrapperButton,
              num === currentPage && styles.active,
            )}
          >
            <button
              onClick={onSetPage(num)}
              key={num}
              className={styles.button}
            >
              {num}
            </button>
          </div>
        ))}
      </div>
      <button onClick={onNext} className={styles.button}>
        <Arrow className={clsx(styles.wrapperButton, styles.arrowLeft)} />
      </button>
    </div>
  );
};
