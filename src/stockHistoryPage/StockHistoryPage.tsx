import { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { StockPage } from './stockHistoryPage.interface';
import { Pagination } from '../component';
import { changeListStock } from '../model';
import { useAppDispatch } from '../store/store.hooks';
import { ELEMENT_PER_PAGE } from './stockHistoryPage.constants';
import styles from './stockHistoryPage.module.css';

export const StockHistoryPage = (props: StockPage) => {
  const { stockData } = props;
  const [currentPage, setCurrentPage] = useState(1);

  let endIndex = currentPage * ELEMENT_PER_PAGE;
  let startIndex = endIndex - ELEMENT_PER_PAGE;
  const currentArrayStocks = stockData.slice(startIndex, endIndex);

  const dispatch = useAppDispatch();
  const handleDragEnd = (e: DropResult) => {
    if (!e.destination) return;
    dispatch(changeListStock(e));
  };

  return (
    <div>
      <div className={styles.wrapTableDnd}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>number</th>
                <th>change</th>
                <th>label</th>
                <th>date</th>
              </tr>
            </thead>
            <Droppable droppableId="table">
              {(provider) => (
                <tbody ref={provider.innerRef} {...provider.droppableProps}>
                  {currentArrayStocks.map((el, index) => (
                    <Draggable
                      key={el.priceDate + index}
                      draggableId={el.priceDate + index}
                      index={index}
                    >
                      {(provider) => (
                        <tr
                          key={el.priceDate + index}
                          {...provider.draggableProps}
                          {...provider.dragHandleProps}
                          ref={provider.innerRef}
                        >
                          <td align="center">{index + 1}</td>
                          <td align="center">{el.change}</td>
                          <td align="center">{el.label}</td>
                          <td align="center">{el.date}</td>
                        </tr>
                      )}
                    </Draggable>
                  ))}
                  {provider.placeholder}
                </tbody>
              )}
            </Droppable>
          </table>
        </DragDropContext>
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        arrLength={stockData.length}
        currentPage={currentPage}
      />
    </div>
  );
};
