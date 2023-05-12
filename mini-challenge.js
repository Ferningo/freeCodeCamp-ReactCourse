const Header = () => {
  return (
    <header>
      <nav>{<img src="./react-logo.png" width="40px" />}</nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <small>© 2021 Fernandez development. All rights reserved.</small>
    </footer>
  );
};

const Page = () => {
  return (
    <>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  );
};

function FrontPage() {
  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}

ReactDOM.render(<FrontPage />, document.getElementById("main-section"));
