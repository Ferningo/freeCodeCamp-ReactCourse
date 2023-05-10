const MyComponent = () => {
  return (
    <>
      <h1>Reasons why I'm excited about learning React</h1>
      <ol>
        <li>It's awesome</li>
        <li>It's cool</li>
        <li>It's interesting</li>
        <li>It's enigmatic</li>
      </ol>
    </>
  );
};

const rootElement = document.getElementById("main-section");
ReactDOM.render(<MyComponent />, rootElement);
