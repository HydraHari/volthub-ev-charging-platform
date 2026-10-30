const BASE = 'http://localhost:5000';
async function request(path, options) {
  const res = await fetch(`${BASE}${path}`, options);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  if (res.status === 204) return null;
  return res.json();
}
export const api = {
  get: (resource) => request(`/${resource}`),
  create: (resource, data) => request(`/${resource}`, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}),
  update: (resource, id, data) => request(`/${resource}/${id}`, {method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}),
  remove: (resource, id) => request(`/${resource}/${id}`, {method:'DELETE'})
};
export const getStations = () => api.get('stations');
export const addStation = (data) => api.create('stations', data);
export const updateStation = (id, data) => api.update('stations', id, data);
export const deleteStation = (id) => api.remove('stations', id);