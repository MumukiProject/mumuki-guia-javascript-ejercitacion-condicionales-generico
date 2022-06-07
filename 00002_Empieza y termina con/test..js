it('Si hacemos empiezaYTerminaCon('alegría', 'a') debería retornar true", function() {
let resultado = empiezaYTerminaCon('alegría', 'a')
assert.equal(resultado, true,`empiezaYTerminaCon('alegría', 'a') deberia retornar true pero fue ${resultado}`);
})

it('Si hacemos empiezaYTerminaCon('octavio', 'o') debería retornar true", function() {
let resultado = empiezaYTerminaCon('octavio', 'o')
assert.equal(resultado, true,`empiezaYTerminaCon('octavio', 'o') deberia retornar true pero fue ${resultado}`);
})

it('Si hacemos empiezaYTerminaCon('equipaje', 'e') debería retornar true", function() {
let resultado = empiezaYTerminaCon('equipaje', 'e')
assert.equal(resultado, true,`empiezaYTerminaCon('equipaje', 'e') deberia retornar true pero fue ${resultado}`);
})

it('Si hacemos empiezaYTerminaCon('mariposa', 'm') debería retornar false", function() {
let resultado = empiezaYTerminaCon('mariposa', 'm')
assert.equal(resultado, false,`empiezaYTerminaCon('mariposa', 'm') deberia retornar false pero fue ${resultado}`);
})

it('Si hacemos empiezaYTerminaCon('escudo', 'o') debería retornar false", function() {
let resultado = empiezaYTerminaCon('escudo', 'o')
assert.equal(resultado, false,`empiezaYTerminaCon('escudo', 'o') deberia retornar false pero fue ${resultado}`);
})