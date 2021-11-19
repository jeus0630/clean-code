/**
 * Nullish coalescing operator
 *
 */

function getName(name){
    return name || 'jewoo';
}

console.log(getName(0)); // jewoo

function getName2(name){
    return name ?? 'jewoo';
}

console.log(getName2(0)) // 0