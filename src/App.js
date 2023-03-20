import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLorems } from './store/features/lorem/loremSlice';


function App() {
  const dispatch = useDispatch();

  const lorem = useSelector((state)=>state.lorem);

  useEffect(() => {
    dispatch(getLorems());
  }, [])
  return (
    <div>
      {JSON.stringify(lorem.data)}
    </div>

  );
}

export default App;
