import React from 'react'

function HtmlPage() {
  const htmlElements = [Title, Header, Paragraph, Div, Br, Color, Button, Link, Image, Style]
  const [alertVisable, setAlertVisability] = useState(false);
  return (
    <div>
    <h1>Html Page</h1>
    {alertVisable && (<Alert onClose={() => setAlertVisability(false)}>Alert</Alert>
    )}
      <alert><li>{htmlElements}</li></alert>
    </div>
      )
}

export default HtmlPage