// import axios from "axios";
// import { BASE_URL } from './constants';

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// async function getAll(endpoint, token) {
//   try {
//     const response = await api.get(endpoint, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('API GET request error:', error);
//     throw error;
//   }
// }

// async function getOne(endpoint, id, token) {
//   try {
//     const response = await api.get(`${endpoint}/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('API GET request error:', error);
//     throw error;
//   }
// }

// async function post(endpoint, payload, token) {
//   try {
//     const response = await api.post(endpoint, payload, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('API POST request error:', error);
//     throw error;
//   }
// }

// async function deleteOne(endpoint, id, token) {
//   try {
//     const response = await api.delete(`${endpoint}/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('API DELETE request error:', error);
//     throw error;
//   }
// }

// async function put(endpoint, id, payload) {
//   try {
//     const response = await api.put(`${endpoint}/${id}`, payload);
//     return response.data;
//   } catch (error) {
//     console.error('API PUT request error:', error);
//     throw error;
//   }
// }

// async function patch(endpoint, id, payload, token) {
//   try {
//     const response = await api.patch(`${endpoint}/${id}`, payload, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('API PATCH request error:', error);
//     throw error;
//   }
// }

// const controller = {
//   post,
//   getAll,
//   getOne,
//   delete: deleteOne,
//   put,
//   patch,
// };

// export default controller;

import axios from "axios";
import { BASE_URL } from './constants';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getAll(endpoint, token) {
  try {
    const response = await api.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API GET request error:', error);
    throw error;
  }
}

async function getOne(endpoint, id, token) {
  try {
    const response = await api.get(`${endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API GET request error:', error);
    throw error;
  }
}

async function post(endpoint, payload, token) {
  try {
    const response = await api.post(endpoint, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // console.error('API POST request error:', error);
    throw error;
  }
}

async function deleteOne(endpoint, id, token) {
  try {
    const response = await api.delete(`${endpoint}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API DELETE request error:', error);
    throw error;
  }
}

async function put(endpoint, id, payload) {
  try {
    const response = await api.put(`${endpoint}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error('API PUT request error:', error);
    throw error;
  }
}

async function patch(endpoint, id, payload, token) {
  try {
    const response = await api.patch(`${endpoint}/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API PATCH request error:', error);
    throw error;
  }
}

const controller = {
  post,
  getAll,
  getOne,
  delete: deleteOne,
  put,
  patch,
};

export default controller;
