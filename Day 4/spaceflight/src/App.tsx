import { Container } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import MyNews from './components/MyNews';
import DetailedNews from './components/DetailedNews';

function App() {
  return (
    <BrowserRouter>
      <Container fluid className='App p-0'>
        <header>
          <MyNavbar></MyNavbar>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<MyNews />}></Route>
            <Route path='/details/:newsId' element={<DetailedNews />}></Route>
          </Routes>
        </main>
      </Container>
    </BrowserRouter>
  );
}

export default App;
