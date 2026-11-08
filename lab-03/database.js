const fs = require("fs");
const os = require("os");
const path = require("path");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const openDatabase = async () => {
  let dbPath = path.join(__dirname, "books.db");

  // On Vercel / serverless environment, the deployment directory is read-only.
  // Copy books.db to the OS temp directory so SQLite can read and write without EROFS errors.
  if (process.env.VERCEL) {
    const tmpDb = path.join(os.tmpdir(), "books.db");
    if (!fs.existsSync(tmpDb) && fs.existsSync(dbPath)) {
      fs.copyFileSync(dbPath, tmpDb);
    }
    dbPath = tmpDb;
  }

  const database = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  console.log("Database connected successfully");

  return database;
};

module.exports = openDatabase;