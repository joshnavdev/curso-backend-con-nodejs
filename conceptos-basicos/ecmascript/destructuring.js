// DESTRUCTURING
// Es una forma de extraer valores de arrays u objetos y asignarlos a variables.
// Object

const response = {
  data: [],
  status: 'OK',
  statusCode: 200,
};

const handleResponse = (response) => {
  const { data, statusCode } = response;

  if (statusCode === 200) {
    console.log(data);
  }
};

handleResponse(response);

// Array
const numebrs = [1, 2, 3, 4];
const [first, second] = numebrs;

console.log(first, second); // 1 2
