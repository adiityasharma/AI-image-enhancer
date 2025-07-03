import axios from "axios";

const API = "wxyrfnfyuyry2dvyd";
const base_url = "https://techhk.aoscdn.com"


export const enhancedImageAPI = async (file)=>{


  try {
    const task_id = await uploadImage(file)

    const fetchedEnhancedData = await fetchEnhancedImage(task_id)

    

  } catch (error) {
    console.log(error.message)
  }
}

const uploadImage = async (file)=>{
  const formData = new FormData();
  formData.append("image_file", file)

  const {data} = await axios.post(`${base_url}/api/tasks/visual/scale`, formData, {
    headers:{
      "Content-Type": "multipart/formdata",
      "X-API-KEY": API
    }
  })

  return data.data.task_id

}

const fetchEnhancedImage = async (task_id)=>{

  const {data} = await axios.get(`${base_url}/api/tasks/visual/scale/${task_id}`, {
    headers: {
      "X-API-KEY": API
    }
  })

  return data.data.image

}