import React from "react"
import Grid from "./components/Grid.js"
import Form from "./components/Form.js"
import PassForm from "./components/PassForm.js"

export default function App() {
  return (
    <div>
      <div className="title">
        <h1>I&emsp;&emsp;A M&emsp;&emsp;A L I V E</h1>
      </div>
      <PassForm />
      <main>
        <Form />
        <Grid />
      </main>
      <p className="footer">hernanmr95@hotmail.com</p>
    </div>
  )
}


