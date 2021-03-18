import './App.css';
import { useDispatch } from 'react-redux';
import { openSnackbar } from './components/shared/dynamicSnackbar/DynamicSnackbarSlice';
import Weather from './components/Weather';
import DataService from './services/dataService';

function App() {
  const dispatch = useDispatch();
  const handleClick = () => {
    DataService.get('/test')
      .then(response => {
        console.log('response', response.data.message);
        dispatch(openSnackbar({
          message: response.data.message,
          severity: 'success'
        }));
      });
  }
  return (
    <div className="App">
      <button onClick={handleClick}>
        test
      </button>
      <Weather />
    </div>
  );
}

export default App;
