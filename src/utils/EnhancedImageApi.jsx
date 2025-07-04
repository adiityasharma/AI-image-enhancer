import axios from "axios";

const API = "wxyrfnfyuyry2dvyd";
const base_url = "https://techhk.aoscdn.com";

export const enhancedImageAPI = async (file) => {
  try {
    const task_id = await uploadImage(file);

    const fetchedEnhancedData = await PollForEnhancedImage(task_id);

    return fetchedEnhancedData.image;
  } catch (error) {
    console.log(error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${base_url}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/formdata",
        "X-API-KEY": API,
      },
    }
  );

  return data.data.task_id;
};

const fetchEnhancedImage = async (task_id) => {
  const { data } = await axios.get(
    `${base_url}/api/tasks/visual/scale/${task_id}`,
    {
      headers: {
        "X-API-KEY": API,
      },
    }
  );

  return data.data;
};

const PollForEnhancedImage = async (task_id, retries = 0)=>{
  const result = await fetchEnhancedImage(task_id)

  if(result.state === 4){
    console.log("Processing...");

    if(retries === 20){
      throw new Error("Time out, Please try again later.")
    }

    await new Promise((resolve)=> setTimeout(resolve), 2000)

    return PollForEnhancedImage(task_id, retries +1)
  }

  return result;
}
