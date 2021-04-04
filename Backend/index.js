const express = require('express')

const bodyparser = require("body-parser")
const sql = require("mssql")
const cors = require("cors")
const backendport = 5000

sql.connect("Server=localhost;Database=BDSpotPer;User id=spotperuser;Password=Spotper;").then(conn =>(global.conn=conn) ).catch(err => console.log("erro!" + err))
const router = express.Router();
app = express()
app.use(cors())

function execSQLQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}


router.get('/', (req, res) => res.json({ message: "works" }))

router.get('/albuns',(req,res)=>{
    execSQLQuery(" SELECT * FROM Album ",res)
})

router.get('/albuns/:id',(req,res)=>{
    execSQLQuery("SELECT f.* FROM faixa f inner join faixa_album fa on fa.faixa_num_fk=f.num_faixa and fa.album_cod_album_fk="+parseInt(req.params.id),res)
})

router.get('/playlist',(req,res)=>{
    execSQLQuery("SELECT * FROM Playlist",res)

})

router.get('/playlist/:id',(req,res)=>{
    execSQLQuery("SELECT f.* FROM Playlist p inner join Faixa_Playlist fp on p.cod=fp.playlist_cod_fk inner join Faixa f on fp.faixa_num_faixa_fk=f.num_faixa where p.cod="+parseInt(req.params.id),res)
})

router.delete('/playlist/:faixaid/:idplaylist',(req,res)=>{
    execSQLQuery("DELETE FROM Faixa_Playlist fp where fp.faixa_num_faixa_fk="+parseInt(req.params.faixaid)+"and fp.playlist_cod_fk="+parseInt(req.params.idplaylist),res)

})

router.post("/playlist",(req,res)=>{
    nomeplaylist=req.body.nomeplaylist
    codplaylist=req.body.codplaylist

    dateToday=new Date().toISOString().slice(0, 10);

    execSQLQuery("INSERT INTO Playlist(cod,nome,data_criacao,tempo_total) values ("+codplaylist+","+nomeplaylist+","+dateToday+", 0)",res)

})

router.post('/playlist/add',(req,res)=>{
    faixaid=parseInt(req.body.faixaid)
    playlistid=parseInt(req.body.playlistid)
    execSQLQuery("INSERT into Faixa_Playlist (faixa_num_faixa_fk,playlist_cod_fk,ultima_vez_tocada,numero_vez_tocada) values ("+faixaid+","+playlistid+",0,0)",res)
});



app.use('/', router)



app.listen(backendport)