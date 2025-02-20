import express, { Express, Request, Response } from "express"; 
import dotenv from "dotenv";
import data from "./database.json";
import fs from 'fs';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());

function getDataByID(id: number){
  for (let val of data) {
    if (val["id"] === id) {
      return val;
    }
  }
  return null;
}

app.get('/items', (req: Request, res: Response) => {
  let newData;
  if (req.query.category) {
    const category = req.query.category;
    newData = data.filter((item) => item["category"] === category)
  }
  else {
    newData = data;
  }
  res.send(JSON.stringify(newData, null, 4));
});

app.post('/items', (req: Request, res: Response) => {
  if (!req.body || !req.body.name || !req.body.amount || !req.body.price || !req.body.category) {
    res.status(422).send(JSON.stringify({"message": "Invalid input!"}))
    return;
  }
  let newId;
  if (data.length > 0) {
    newId = data[data.length-1]["id"] + 1
  }
  else {
    newId = 1
  }
  const newItem = {
    "id": newId,
    "name": req.body.name,
    "amount": req.body.amount,
    "price": req.body.price,
    "category": req.body.category
  };
  data.push(newItem);
  fs.writeFile("database.json", JSON.stringify(data, null, 4), (error) => {
    if (error) throw error;
    res.send(JSON.stringify({"message": "Successful adding new item"}))
  })
});

app.get('/items/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const val = getDataByID(id);
  if (val) {
    res.send(JSON.stringify(val, null, 4));
      return;
  }
  res.status(404).send(JSON.stringify({"message": "Item not found!"}));
});

app.put('/items/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const val = getDataByID(id);
  if (!val) {
    res.status(404).send(JSON.stringify({"message": "Item not found!"}));
    return;
  }
  if (req.body.name) {
    val["name"] = req.body.name
  }
  if (req.body.amount) {
    val["amount"] = req.body.amount
  }
  if (req.body.price) {
    val["price"] = req.body.price
  }
  if (req.body.category) {
    val["category"] = req.body.category
  }
  fs.writeFile("database.json", JSON.stringify(data, null, 4), (error) => {
    if (error) throw error;
    res.send({"message": "Update successful"});
  })
});

app.delete('/items/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const newData = data.filter((item) => item["id"] != id);
  fs.writeFile("database.json", JSON.stringify(newData, null, 4), (error) => {
    if (error) throw error;
    res.send({"message": "Delete successful"});
  })
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});