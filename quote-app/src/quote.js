import { useState } from 'react';


function Quote(quotes) {
    const [btnName, setBtnName] = useState('Get Quote');
    const [click, setClick] = useState(false);
    const [num, setNum] = useState(0);

    const generateNum = () => {
        setNum(Math.floor((Math.random() * quotes.quotes.length) + 0));
    }
    const DisplayQuote = (quote) => {
        return(
            <blockquote>
                <p>{quote.quote}</p>
                <footer>{quote.author}</footer>
            </blockquote>
        )
    }

    return(
        <div>
            {!click ? <p>Click button to get a quote</p> : DisplayQuote(quotes.quotes[num])}
            <button onClick={() => {
                setClick(true);
                generateNum();
                console.log(num);
                setBtnName('Get Another Quote');
            }}>
                {btnName}
            </button>
        </div>
    )
}

export default Quote;