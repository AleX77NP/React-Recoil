import './App.css';
import Tasks from './components/Tasks'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <div style={{ width: '720px', margin: 'auto', marginTop: '50px',}}>
        <h1 style={{ paddingBottom: '25px', textAlign: 'center'}}>My Task List</h1>
        <Tasks />
      </div>
    </RecoilRoot>
  );
}

export default App;
