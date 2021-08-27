db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);
db.produtos.updateMany(
  { tags: "bovino" },
  { $set: { avaliacao: 5 } },
);
db.produtos.updateMany(
  { tags: "ave" },
  { $set: { avaliacao: 3 } },
);
db.produtos.find({}, { avaliacao: 1, nome: 1, _id: 0 });
