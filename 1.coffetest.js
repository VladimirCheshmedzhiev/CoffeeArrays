function coffeeLover(input) {
    let coffees = input[0].split(' ');
    let commandsCount = Number(input[1]);

    for (let i = 2; i < 2 + commandsCount; i++) {
        let command = input[i].split(' ');

        switch (command[0]) {
            case 'Include':
                let newCoffee = command[1];
                coffees.push(newCoffee);
                break;

            case 'Remove':
                let removeType = command[1];
                let removeCount = Number(command[2]);

                if (removeType === 'first') {
                    coffees.splice(0, removeCount);
                } else if (removeType === 'last') {
                    coffees.splice(-removeCount);
                }

                break;

            case 'Prefer':
                let index1 = Number(command[1]);
                let index2 = Number(command[2]);

                if (index1 < coffees.length && index2 < coffees.length) {
                    let temp = coffees[index1];
                    coffees[index1] = coffees[index2];
                    coffees[index2] = temp;
                }

                break;

            case 'Reverse':
                coffees.reverse();
                break;

            default:
                break;
        }
    }

    console.log('Coffees:');
    console.log(coffees.join(' '));
}
coffeeLover([
    'Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee',
    '5',
    'Include TurkishCoffee',
    'Remove first 2',
    'Remove last 1',
    'Prefer 3 1',
    'Reverse'
])
