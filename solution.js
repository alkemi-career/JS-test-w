/**
 * Implement the three functions below, then run:  node solution.js
 * Compare your output against the expected output in REQUIREMENTS.md.
 */

/**
 * TASK 1 — format a number with exactly 2 decimals and a comma every 3 digits.
 *   formatAmount(1234.5) -> "1,234.50"      formatAmount(999) -> "999.00"
 */
function formatAmount(value) {
  // TODO
}

/**
 * TASK 2 — sum every holder's `balance`, rounded to 2 decimals.
 * Return a NUMBER, not a string. Return 0 for an empty list.
 */
function totalBalance(holders) {
  // TODO
}

/**
 * TASK 3 — return the names of the `n` highest balances, highest first.
 * Must NOT mutate the array you were given.
 */
function topHolders(holders, n) {
  // TODO
}

/* ---------- do not edit below this line ---------- */

const holders = [
  { name: "ava", balance: 120.5 },
  { name: "ben", balance: 980.25 },
  { name: "cleo", balance: 45 },
  { name: "dev", balance: 3400.1 },
  { name: "eli", balance: 771.15 },
];
const before = JSON.stringify(holders);

console.log("1:", formatAmount(1234.5));
console.log("2:", formatAmount(999));
console.log("3:", formatAmount(1234567.89));
console.log("4:", totalBalance(holders));
console.log("5:", totalBalance([]));
console.log("6:", topHolders(holders, 3));
console.log("7:", topHolders(holders, 1));
console.log("8:", JSON.stringify(holders) === before ? "not mutated" : "MUTATED");
