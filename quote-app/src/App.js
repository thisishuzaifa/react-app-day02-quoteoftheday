import logo from './logo.svg';
import Footer from './footer.js';
import Header from './header.js';
import Quote from './quote.js';
import quotes from './quotes.js';

const appInfo = {
  title: 'Quote of the Day',
  author: 'Huzaifa',
  copyright: new Date().getFullYear()
};

function App() {
  return(
    <div class="main">
      <Header header={appInfo.title}/>
      <Quote quotes={quotes}/>
      <Footer info={appInfo} />
    </div>  
  );
}
 
export default App;
