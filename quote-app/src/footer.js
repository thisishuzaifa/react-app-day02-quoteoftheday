function Footer({info}){
  return (
    <footer>
      <p>
         © {info.copyright} {info.author}
      </p>

    </footer>
  );
}   

export default Footer;