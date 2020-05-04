module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("notifications", {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.Number,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
	},
	isActive:{
		type:Sequelize.BOOLEAN
	}
  });

  return User;
};
