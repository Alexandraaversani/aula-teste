import { somar } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("Deve somar dois números corretamente", () => {
    ///AAA
    //Arranjar (Preparar)
    const a = 2;
    const b = 3;

    //Act (Executar)
    const resultado = somar(a, b);

    //Assert (Verificar)
    expect(resultado).toBe(5);
});
});

describe("Calculadora", () => {
  test("Deve subtrair dois números corretamente", () => {
    ///AAA
    //Arranjar (Preparar)
    const a = 2;
    const b = 3;

    //Act (Executar)
    const resultado = somar(a, b);

    //Assert (Verificar)
    expect(resultado).toBe(10);
});
});
