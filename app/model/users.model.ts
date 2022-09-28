module.exports = (sequelize: any, Sequelize: any) => {
  const Users = sequelize.define('t_user', {
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    salt: {
      type: Sequelize.STRING
    },
    // createTime: {
    //   type: Sequelize.DATETIME
    // },
    // updateTime: {
    //     type: Sequelize.DATETIME
    // }
  }, { freezeTableName: true, timestamps: false })
  return Users
}