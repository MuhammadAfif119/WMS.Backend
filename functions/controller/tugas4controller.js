const { product, stok } = require("../models");

const tugas4controller = {
  async index(req, res) {
    try {
      const products = await product.findAll();
      return res.send(products);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async store(req, res) {
    try {
      const { name, price, quantity } = req.body;
      const newproduct = await product.create({
        name: name,
        price: price,
        quantity: quantity,
      });
      return res.send(newproduct);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const findproduct = await product.findOne({
        where: {
          id: id,
        },
      });
      return res.send(findproduct);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async update(req, res) {
    try {
      const { name, price, quantity } = req.body;
      const { id } = req.params;
      console.log(req.body, 'slsl');
      const updated = await product.update(
        {
          name: name,
          price: price,
          quantity: quantity,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.send("selesai");
    } catch (error) {
      return res.send(error.message);
    }
  },
  async destroy(req, res) {
    try {
      const { id } = req.params;
      await product.destroy({
        where: {
          id: id,
        },
      });
      return res.send("terhapus");
    } catch (error) {
      return res.send(error.message);
    }
  },
  async index2(req, res) {
    try {
      const stoks = await stok.findAll();
      return res.send(stoks);
    } catch (error) {
      return res.send(error.message);
    }
  },
  async store2(req, res) {
    try {
      const { product_id, keterangan, kuantitas, customer } = req.body;
      const newstok = await stok.create({
        product_id: product_id,
        keterangan: keterangan,
        kuantitas: kuantitas,
        customer: customer,
      });
      return res.send(newstok);
    } catch (error) {
      return res.send(error.message);
    }
  },

  async show2(req, res) {
    try {
      const { id } = req.params;
      const findstok = await stok.findOne({
        where: {
          id: id,
        },
      });
      return res.send(findstok);
    } catch (error) {
      return res.send(error.message);
    }
  },
  async update2(req, res) {
    try {
      const { product_id, keterangan, kuantitas, customer } = req.body;
      const { id } = req.params;
      const updated = await stok.update(
        {
          product_id: product_id,
          keterangan: keterangan,
          kuantitas: kuantitas,
          customer: customer,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.send("selesai");
    } catch (error) {
      return res.send(error.message);
    }
  },
  async destroy2(req, res) {
    try {
      const { id } = req.params;
      await stok.destroy({
        where: {
          id: id,
        },
      });
      return res.send("terhapus");
    } catch (error) {
      return res.send(error.message);
    }
  },
  
};

module.exports = tugas4controller;
