import logo from './logo.svg';
import './App.css';
//component mẫu có sẵn, chứa mã nguồn giao diện ban đầu của dự án
function App() {
  //kết quả trả về của 1 component là 1 mã html có kèm xử lý dữ liệu nếu có
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
