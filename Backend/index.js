const express = require('express')

const bodyparser = require("body-parser")
const sql = require("mssql")
const cors = require("cors")
const backendport = 5000


sql.connect("Server=localhost;Database=BDSpotPer;User id=spotperuser;Password=Spotper;").then(conn => (global.conn = conn)).catch(err => console.log("erro!" + err))

app = express()
app.use(cors())

app.use(express.urlencoded());
app.use(express.json());


function execSQLQuery(sqlQry, res) {
    global.conn.request()
        .query(sqlQry)
        .then(result => res.json(result.recordset))
        .catch(err => res.json(err));
}
const router = express.Router();

app.post("/playlist", async (req, res) => {
    try {
        console.log(req.body);
        nomeplaylist = req.body.nomeplaylist
        dateToday = new Date().toISOString().slice(0, 10);

        execSQLQuery("INSERT INTO Playlist(nome,data_criacao,tempo_total) values ('" + nomeplaylist + "','" + dateToday + "', 0)", res)
    } catch (error) {
        console.log(error.message);
    }
})
app.delete("/playlist/:idfaixa/:idplaylist", async (req, res) => {
    try {
        
        idfaixas = req.params.idfaixa;
        idplaylists = req.params.idplaylist;

        execSQLQuery(`DELETE FROM Faixa_Playlist WHERE Faixa_Playlist.faixa_num_faixa_fk =  ${parseInt(idfaixas)} AND Faixa_Playlist.playlist_cod_fk = ${parseInt(idplaylists)}`, res)
    } catch (error) {
        console.log(error.message);
    }
})
router.post('/', (req, res) => console.log(req))
router.get('/', (req, res) => res.json({ message: "works" }))

router.get('/albuns', (req, res) => {
    execSQLQuery(" SELECT * FROM Album ", res)
})

router.get('/albuns/:id', (req, res) => {
    execSQLQuery("SELECT f.* FROM faixa f inner join faixa_album fa on fa.faixa_num_fk=f.num_faixa and fa.album_cod_album_fk=" + parseInt(req.params.id), res)
})

router.get('/playlist', (req, res) => {
    execSQLQuery("SELECT * FROM Playlist", res)

})

router.get('/playlist/:id', (req, res) => {
    execSQLQuery("SELECT f.* FROM Playlist p inner join Faixa_Playlist fp on p.cod=fp.playlist_cod_fk inner join Faixa f on fp.faixa_num_faixa_fk=f.num_faixa where p.cod=" + parseInt(req.params.id), res)
})



router.get('/playlist/:id/add', (req, res) => {
    execSQLQuery(`SELECT * from Faixa`, res)
})

router.post('/playlist/:idplaylist/add/:idfaixa', (req, res) => {
    faixaid = parseInt(req.params.idfaixa)
    playlistid = parseInt(req.params.idplaylist)
    console.log(req.params)
   execSQLQuery("INSERT into Faixa_Playlist (faixa_num_faixa_fk,playlist_cod_fk,ultima_vez_tocada,numero_vez_tocada) values (" + faixaid + "," + playlistid + ",null,0)", res)
});



app.use('/', router)



app.listen(backendport)