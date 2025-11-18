// -------------------------------------------
// Componente base
// -------------------------------------------
abstract class Pizza {
    abstract getDescricao(): string;
    abstract getValor(): number;
}

// -------------------------------------------
// Componentes concretos
// -------------------------------------------
class PizzaSalgada extends Pizza {
    getDescricao(): string {
        return "Pizza";
    }

    getValor(): number {
        return 20;
    }
}

class PizzaDoce extends Pizza {
    getDescricao(): string {
        return "Pizza Doce";
    }

    getValor(): number {
        return 18;
    }
}

// -------------------------------------------
// Decorator abstrato
// -------------------------------------------
abstract class PizzaDecorator extends Pizza {
    constructor(protected pizza: Pizza) {
        super();
    }
}

// -------------------------------------------
// Decoradores concretos (Sabores)
// -------------------------------------------
class SaborCalabresa extends PizzaDecorator {
    getDescricao(): string {
        return this.pizza.getDescricao() + " + Calabresa";
    }

    getValor(): number {
        return this.pizza.getValor() + 5;
    }
}

class SaborChocolate extends PizzaDecorator {
    getDescricao(): string {
        return this.pizza.getDescricao() + " + Chocolate";
    }

    getValor(): number {
        return this.pizza.getValor() + 4;
    }
}

// -------------------------------------------
// Decorador de Borda
// -------------------------------------------
class BordaRecheada extends PizzaDecorator {
    getDescricao(): string {
        return this.pizza.getDescricao() + " + Borda Recheada";
    }

    getValor(): number {
        return this.pizza.getValor() + 6;
    }
}

// -------------------------------------------
// Exemplo de uso
// -------------------------------------------
console.log("--------------------INICIO-----------------------");
console.log("-----------------PRIMEIRA PIZZA------------------");
const primeiraPizza = new BordaRecheada(
    new SaborCalabresa(
        new PizzaSalgada()
    )
);
console.log(primeiraPizza.getDescricao());
console.log("Total: R$", primeiraPizza.getValor());

console.log("-----------------SEGUNDA PIZZA--------------------");
const segundaPizza = new BordaRecheada(
    new SaborChocolate(
        new PizzaDoce()
    )
);
console.log(segundaPizza.getDescricao());
console.log("Total: R$", segundaPizza.getValor());

console.log("-----------------TERCEIRA PIZZA-------------------");
const terceiraPizza = new SaborCalabresa(
    new PizzaSalgada()
)
console.log(terceiraPizza.getDescricao());
console.log("Total: R$", terceiraPizza.getValor());

console.log("--------------------FIM---------------------------");