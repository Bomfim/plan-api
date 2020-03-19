const model = require('../models/plans');

function createPlan(data) {
  return new Promise((resolve, reject) => {
    model.create(data).then(res => {
      resolve(res);
    }).catch(err => {
      console.log(err);
      reject(err);
    })
  });
}

function readPlan(data) {
  return new Promise((resolve, reject) => {
    if (data && data.id) {
      model.findByPk(data.id).then(res => {
        resolve(res);
      }).catch(err => {
        console.log(err);
        reject(err);
      })
    } else {
      model.findAll().then(res => {
        resolve(res);
      }).catch(err => {
        console.log(err);
        reject(err);
      })
    }
  });
}

function updatePlan(params, data) {
  return new Promise((resolve, reject) => {
    if (Number.isInteger(+params.id)) {
      model.update(data, {
        where: {
          id: params.id
        }
      }).then(() => {
        resolve(readPlan(params));
      }).catch(err => {
        console.log(err);
        reject(err);
      });
    } else {
      reject({error: `Plan '${params.id}' does not exists`});
    }
  });
}

function deletePlan(data) {
  return new Promise((resolve, reject) => {
    if (Number.isInteger(+data.id)) {
      model.destroy({
        where: {
          id: data.id
        }
      }).then(res => {
        if (res) {
          resolve(res);
        } else {
          reject({error: `Plan '${data.id}' does not exists`});
        }
      }).catch(err => {
        console.log(err);
        reject(err);
      });
    } else {
      reject({error: `Plan '${data.id}' does not exists`});
    }
  });
}

module.exports = {
  createPlan: createPlan,
  readPlan: readPlan,
  updatePlan: updatePlan,
  deletePlan: deletePlan
};