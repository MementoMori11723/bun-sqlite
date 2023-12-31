import { Database } from "bun:sqlite";

const db = new Database("base.db", { create: true });

let query = db.query(
  `create table foo(id int primary key,username varchar(225),passwd varchar(225));`
);
query.run();

query = db.query(`insert into foo values(1,'admin','1234');`);
query.run();

query = db.query(`select * from foo`);
console.log(query.values());

db.close();
