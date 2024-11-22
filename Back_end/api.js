import express from  'express'
import cors from 'cors'
import sql from './database.js'


const app = express()
app.use(express.json())
app.use(express.urlencoded({extends: true}))
app.use(cors())


app.get('/login/:usuario/:senha', async (req, res) =>{
    const {usuario, senha } = req.params   
// mudar para o bd
    const consulta = await sql `select * from usuario where
    nome_usuario = ${usuario} and senha = ${senha}`
    // 
    if(consulta != null && consulta != ''){
        return res.status(200).json(consulta)
    }
   else{
    return res.status(401).json('usuario ou senha incorreto')
   }
   
        
})

app.listen (3000, ()=>{
    console.log('Rodando')
});