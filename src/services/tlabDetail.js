export const fetchCharDetails = async (id) => {

  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`);

  const json = await res.json();

  return json;
};
