/*

Given the array orders, which represents the orders that customers have done in a restaurant. More specifically orders[i]=[customerNamei,tableNumberi,foodItemi] where customerNamei is the name of the customer, tableNumberi is the table customer sit at, and foodItemi is the item customer orders.

Return the restaurant's “display table”. The “display table” is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is “Table”, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.

*/

// solution


var displayTable = function(orders) { 
    const dishes = new Set();
    const ordersMap = new Map();

    for (const order of orders) {
        const table = parseInt(order[1]);
        const dish = order[2];

        if (!ordersMap.has(table)) {
            ordersMap.set(table, new Map());
        }

        if (!ordersMap.get(table).has(dish)) {
            ordersMap.get(table).set(dish, 0);
        }

        ordersMap.get(table).set(dish, ordersMap.get(table).get(dish) + 1);
        dishes.add(dish);
    }

    const sortedDishes = Array.from(dishes).sort();
    const res = [];
    const header = ['Table', ...sortedDishes];
    res.push(header);

    const sortedTableNumbers = [...ordersMap.keys()].sort((a, b) => a - b);

    for (const table of sortedTableNumbers) {
        const dishMap = ordersMap.get(table);
        const row = [table.toString()];

        for (const dish of sortedDishes) {
            row.push(dishMap.has(dish) ? dishMap.get(dish).toString() : '0');
        }

        res.push(row);
    }

    return res;
}