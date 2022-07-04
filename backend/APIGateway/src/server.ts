import express from 'express'
import logger from 'morgan'
import helmet from 'helmet'
import httpProxy from 'express-http-proxy'
import { resolve } from 'path'
import { readFileSync } from 'fs'
import { load } from 'js-yaml'

const app = express()

const pathFile = resolve(process.cwd(), 'config.yml')
const readConfig = readFileSync(pathFile, { encoding: 'utf8' })
const { services } = load(readConfig, { json: true })

app.use(logger('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.json({ message: 'Running application' })
})

services.forEach(({ name, url }) => {
  app.use(`/${name}`, httpProxy(url, { timeout: 3000 }))
})

app.listen(3000, () => console.log('Aplicação rodando')) // Porta em que está ouvindo
