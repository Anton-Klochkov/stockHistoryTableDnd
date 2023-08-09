import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/store.hooks';
import { stock } from './model/stockHistory';
import { StockHistoryPage } from './stockHistoryPage';

function App() {
  const dispatch = useAppDispatch();

  const stockData = useAppSelector((store) => store.stockData.stock);
  const stockDataError = useAppSelector((store) => store.stockData.error);

  useEffect(() => {
    dispatch(stock());
  }, [dispatch]);

  return (
    <div className="App">
      {stockDataError === undefined ? (
        <div>
          <StockHistoryPage stockData={stockData} />
        </div>
      ) : (
        <>
          <p>{stockDataError}</p>
        </>
      )}
    </div>
  );
}

export default App;
