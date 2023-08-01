const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");

const tugascontroller = {
  async isi(req, res) {
    try {
      const query = `
      WITH total_in AS (
        SELECT
          product_id,
          SUM(kuantitas) AS total_masuk
        FROM
          stoks
        WHERE
          keterangan = 'Masuk'
        GROUP BY
          product_id
      ),
      total_out AS (
        SELECT
          product_id,
          SUM(stoks.kuantitas) AS total_keluar
        FROM
          stoks
        WHERE
         keterangan = 'Keluar'
        GROUP BY
         product_id
      )
      SELECT
        products.id,
        products.name,
        products.quantity,
        products.price,
        CAST(COALESCE(total_in.total_masuk, 0) AS INT) AS total_masuk,
        CAST(COALESCE(total_out.total_keluar, 0) AS INT) AS total_keluar,
        CAST(products.quantity + COALESCE(total_in.total_masuk, 0) - COALESCE(total_out.total_keluar, 0) AS INT) AS sisa
      FROM
        products
      LEFT JOIN
        total_in ON products.id = total_in.product_id
      LEFT JOIN
        total_out ON products.id = total_out.product_id;
      `;

      const results = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      console.log(results);

      res.status(200).json(results);
    } catch (error) {
      console.error("Unable to fetch data:", error);
      res.status(500).json({ error: "Unable to fetch data" });
    }
  },
  async keluar(req, res) {
    try {
      const query = `
      SELECT products.id, products.name, products.price, stoks.kuantitas, stoks.customer
FROM products
JOIN stoks
ON stoks.product_id=products.id
WHERE stoks.keterangan= 'Keluar'
      `;

      const results = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      console.log(results);

      res.status(200).json(results);
    } catch (error) {
      console.error("Unable to fetch data:", error);
      res.status(500).json({ error: "Unable to fetch data" });
    }
  },
  async masuk(req, res) {
    try {
      const query = `
      SELECT products.id, products.name, products.price, stoks.kuantitas, stoks.customer
FROM products
JOIN stoks
ON stoks.product_id=products.id
WHERE stoks.keterangan= 'Masuk'
      `;

      const results = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      console.log(results);

      res.status(200).json(results);
    } catch (error) {
      console.error("Unable to fetch data:", error);
      res.status(500).json({ error: "Unable to fetch data" });
    }
  },
  async stok(req, res) {
    try {
      const query = `
      SELECT stoks.id, products.name, stoks.kuantitas, stoks.keterangan, stoks.customer
FROM stoks
JOIN products
ON stoks.product_id=products.id
      `;

      const results = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      console.log(results);

      res.status(200).json(results);
    } catch (error) {
      console.error("Unable to fetch data:", error);
      res.status(500).json({ error: "Unable to fetch data" });
    }
  },
};

module.exports = tugascontroller;
