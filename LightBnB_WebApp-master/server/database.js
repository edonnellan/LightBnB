const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});


/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */

const getUserWithEmail = (email) => {
  return pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email])
    .then((result) => {
      console.log(result.rows);
      if (!result.rows) {
      return null;
      }
      // console.log("result.rows[0]:", result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


// const getUserWithEmail = function (email) {
//   let user;
//   for (const userId in users) {
//     user = users[userId];
//     if (user.email.toLowerCase() === email.toLowerCase()) {
//       break;
//     } else {
//       user = null;
//     }
//   }
//   return Promise.resolve(user);
// }
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */

const getUserWithId = (id) => {
  return pool.query(
    `SELECT * FROM users WHERE id = $1`,
    [id])
    .then((result) => {
      console.log('result.rows[0]', result.rows[0]);
      if (!result.rows[0]) {
      return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};



// const getUserWithId = function (id) {
//   return Promise.resolve(users[id]);
// }
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */

const addUser = ({name, email, password}) => {
  console.log("name etc: ", name, email, password)
  return pool.query(
    `INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
    `,
    [name, email, password])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};



// const addUser = function (user) {
//   const userId = Object.keys(users).length + 1;
//   user.id = userId;
//   users[userId] = user;
//   return Promise.resolve(user);
// }
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */



const getAllReservations = (guest_id, limit =10) => {
  return pool.query(`SELECT reservations.*, properties.*, property_reviews.*
  FROM reservations
  JOIN properties ON reservations.property_id = properties.id
  JOIN property_reviews ON property_reviews.property_id = properties.id
  WHERE reservations.guest_id = $1
  GROUP BY reservations.id, properties.title, cost_per_night, start_date
  ORDER BY start_date
  LIMIT $2;
  `,
  [guest_id, limit])
  .then((result) => {
      return result;
  })
  .catch((err) => {
    console.log(err.message);
  });
};



// const getAllReservations = function (guest_id, limit = 10) {
//   return getAllProperties(null, 2);
// }
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */

const getAllProperties = (options, limit = 10) => {
  return pool.query(
    `SELECT * FROM properties LIMIT $1;`,
    [limit])
    .then((result) => {
      // console.log(result.rows.length);
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


// const getAllProperties = function(options, limit = 10) {
//   const limitedProperties = {};
//   for (let i = 1; i <= limit; i++) {
//     limitedProperties[i] = properties[i];
//   }
//   return Promise.resolve(limitedProperties);
// }
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;
