
const Knapsack = require('./Knapsack');
const KnapsackItem = require('./KnapsackItem');

const mochila = () => {

    let item1 = new KnapsackItem({ value: 4, weight: 12 });
    let item2 = new KnapsackItem({ value: 2, weight: 2, itemsInStock:8 });
    let item3 = new KnapsackItem({ value: 1, weight: 1, itemsInStock:8 });
    let item4 = new KnapsackItem({ value: 10, weight: 4 });
    let item5 = new KnapsackItem({ value: 2, weight: 1 });
    let items = [item1, item2, item3, item4, item5]
    let knapsack = new Knapsack(items, 16);

  //  knapsack.solveUnboundedKnapsackProblem()
    knapsack.solveZeroOneKnapsackProblem()


}

mochila()