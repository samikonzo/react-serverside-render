import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './client/App.jsx'
import Html from './client/Html.js'
import path from 'path'

global.l = console.log
const port = 3000
const app = express()


l(path.resolve('/foo','/bar','/baz'))



app.get('/', (req, res) => {

	const body = renderToString(<App />);
	const title = 'Server-side rendering with Styled Components'

	res.send(
		Html({body, title})
	)	
})

app.listen(port)