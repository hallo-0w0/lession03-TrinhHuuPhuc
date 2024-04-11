import logo from './logo.svg';
import './App.css';
import THP_FuncDemo from './components/THP_FuncDemo';
import THP_ClassComp from './components/THP_ClassComp';

function App() {
  // Khai báo biến đối tượng
  const user = {
    userName: "k22cnt3",
    password: "123456a@",
    firstName: "Trinh Huu",
    lastName: "Phuc"
  }

  // Khai báo hàm formatName
  function formatName(user) {
    return <h2>Xin chào, {user.firstName} {user.lastName}</h2>;
  }

  return (
    <div className="App">
      {/* Biểu thức JSX */}
      <div>
        <p>fullName: {user.firstName} {user.lastName}</p>
        {formatName(user)}
      </div>
      
      {/* Sử dụng function component */}
      <div> 
        <THP_FuncDemo/>
        {/* Sử dụng Func_Comp với props */}
        <THP_FuncDemo userName="THP" fullName="Trinh Huu Phuc" age="20"/>
      </div>

      {/* Sử dụng class component */}
      <div>
        {/* Không sử dụng props */}
        <THP_ClassComp/>
        <THP_ClassComp company="Fit-NTU - K22CNT3" course="Reactjs"/>
        <THP_ClassComp company="Fit-NTU - K22CNT4" course="Reactjs 1"/>
        <THP_ClassComp company="Fit-NTU - K22CNT5" course="Reactjs 2"/>
        <THP_ClassComp company="Fit-NTU - K22CNT6" course="Reactjs 3"/>
      </div>
    </div>
  );
}

export default App;
