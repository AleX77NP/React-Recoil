import './App.css';
import Tasks from './components/Tasks'
import { RecoilRoot } from 'recoil'
import PriorityTasks from './components/PriorityTasks';

function App() {
  return (
    <RecoilRoot>
      <div style={{ width: '720px', margin: 'auto', marginTop: '50px',}}>
        <h1 style={{ paddingBottom: '25px', textAlign: 'center'}}>My Task List</h1>
        <Tasks />
        <h2 style={{ paddingBottom: '25px', textAlign: 'center'}}>Priority Tasks</h2>
        <PriorityTasks />
      </div>
    </RecoilRoot>
  );
}

export default App;
