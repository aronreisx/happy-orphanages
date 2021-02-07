function deleteOrphanage(db, id) {
  return db.run(`
    DELETE FROM orphanages WHERE id=${id};
  `);
}

module.exports = deleteOrphanage;
