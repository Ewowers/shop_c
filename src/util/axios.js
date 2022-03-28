export const post = (api, body) => {
  return fetch(api, { method: "POST", body: JSON.stringify(body), headers: { "content-type": "application/json" } }).then((res) => res.json());
};
export const update = (api, body) => {
  return fetch(api, { method: "PUT", body: JSON.stringify(body), headers: { "content-type": "application/json" } }).then((res) => res.json());
};
export const get = (api) => {
  return fetch(api, { method: "GET" }).then((res) => res.json());
};
export const destroy = (api) => {
  return fetch(api, { method: "DELETE" }).then((res) => res.json());
};
