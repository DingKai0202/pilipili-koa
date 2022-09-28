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
    createTime: {
      type: Sequelize.DATE
    },
    updateTime: {
      type: Sequelize.DATE
    }
  }, { freezeTableName: true, timestamps: false })
  // freezeTableName 限制表名加s  timestamps 不自动查时间戳
  return Users
}