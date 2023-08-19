import axios from "axios"

const URL = 'http://localhost:5000'

const getRequest = async (endpoint = '', query) =>{
  try{
    const res = await axios.get(`${URL}/${endpoint}`)

    return res
  } catch(err){
    console.log(err)
  }
}

const main = () => getRequest()
const getAllBooks = (query) => getRequest('/graphql', query)

const index = {
  main,
  getAllBooks
}

export default index