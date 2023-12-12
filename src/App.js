import logo from './logo.svg';
import './App.css';
import { Link } from './componets/Link/Link'
import { Card } from './componets/Card/Card'
import { Company } from './componets/Company/Company'
import { Contacts } from './componets/Contacts/Contacts'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link link="https://reactjs.org" text="React" />
            <Link link="https://google.by" text="Google" />
            <Link link="https://yandex.by/" text="Yandex" />
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <Card textH2="React" textP="JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов." />
          <Card textH2="Google" textP="Транснациональная корпорация из США в составе холдинга Alphabet, инвестирующая в интернет-поиск, облачные вычисления и рекламные технологии." />
          <Card textH2="Yandex" textP="Российская транснациональная компания в отрасли информационных технологий." />
        </div>
      </main>
      <footer>
        <div className="container">
          <Company text="© 2023 Myfreedom ООО «ФридомЦентр» свидетельство о регистрации №191213060 выдано Минским горисполкомом 25 августа 2009 года. Республика Беларусь, г. Минск, ул. Пинская, 28/1, 1 этаж." />
          <Contacts address="Минск, Пинская, 28/1, первый этаж." email="hello@myfreedom.by" tel="+375 44 7 555 011" />
        </div>
      </footer>
    </div>
  );
}

export default App;
