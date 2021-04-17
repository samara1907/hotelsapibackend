
const express = require('express');
const app = express();
const cors = require('cors');
const addhotel = require('./controlar/addhotel');
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{res.send(`working`)})

app.post('/add', async(req,res)=>{
	try{
		const {rating,name,email,phone,city,singleroomprice,doubleroomprice,tripleroomprice,website,startdate,expiredate,board,notes} = req.body;
		const newhotel= await pool.query("INSERT INTO hotels (rating,name,email,phone,city,singleroomprice,doubleroomprice,tripleroomprice,website,startdate,expiredate,board,notes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *" , [rating,name,email,phone,city,singleroomprice,doubleroomprice,tripleroomprice,website,startdate,expiredate,board,notes]);
		res.json(newhotel.rows[0]);
	}catch(err){
		console.error(err.message);
	}
});

app.get("/add", async (req,res)=>{
	try{
		const hotelslist = await pool.query("SELECT * FROM hotels ORDER BY rating ASC");
		res.json(hotelslist.rows);
	}catch(err){
		console.error(err.message);
	}
});

app.get("/add/:id", async (req,res)=>{
	try{
		const {id} = req.params;
		const hotel = await pool.query("SELECT * FROM hotels WHERE id = $1", [id]);
		res.json(hotel.rows[0]);
	}catch(err){
		console.error(err.message);
	}
});

app.put("/update/:id", async(req,res)=>{
	try{
		const { id } = req.params;
		const {singleroomprice,doubleroomprice,tripleroomprice,startdate,expiredate,board,notes} = req.body;
		const updatehotel = await pool.query("UPDATE hotels SET singleroomprice=$1,doubleroomprice=$2,tripleroomprice=$3,startdate=$4,expiredate=$5, board=$6, notes=$7 WHERE id=$8 RETURNING *",
		 [singleroomprice,doubleroomprice,tripleroomprice,startdate,expiredate,board,notes,id]);
		res.json("hotel is updated!");
	}catch(err){
		console.error(err.message);
	}
});

app.delete("/delete/:id", async (req,res)=>{
	try{
		const {id} = req.params;
		const deletehotel = await pool.query("DELETE FROM hotels WHERE id = $1", [id]);
		res.json("hotel is deleted!");
	}catch(err){
		console.error(err.message);
	}
});


var PORT = process.env.PORT || 5000 ;

app.listen(process.env.PORT || 5000, ()=>{
	console.log(`done ${process.env.PORT}`);
})
