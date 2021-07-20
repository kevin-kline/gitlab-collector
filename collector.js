// const { Gitlab } = require("@gitbeaker/node")
const axios = require('axios')
const routes = require('./config/routes')
const fetchData = async () => {
  // const api = new Gitlab({
  //   token: "6RxxyVNVdcjrMewi9sm_"
  // })
  try {
    console.log('trying...', routes[0]);
    //  let projects = await api.Projects.all()
    //  console.log('projects', projects);
    routes.forEach(async route => {
      const res = await axios.get(route.url)
      console.log('res.data', res.data);
    })
  } catch (error) {
    console.log('error', error);
  }
}
fetchData()

module.exports = fetchData