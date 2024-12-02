/**
 * Calculate the delivery cost based on distance, weight, and whether the item is fragile.
 *
 * @param {Object} order - The order details containing distance, weight, and fragile status.
 * @param {number} order.distance - The distance in km.
 * @param {number} order.weight - The weight of the package in kg.
 * @param {boolean} order.fragile - Whether the package is fragile.
 * @returns {number} The total delivery cost.
 */
function deliveryCostCalculator(order) {
    let cost = Math.ceil(order.distance * 2);
    if (order.weight > 5) {
        cost = Math.floor(cost + Math.floor((order.weight - 5) * 10));
    }
    if (order.fragile === true) {
        cost = Math.round(cost + Math.round((cost * 20) / 100));
    }
    return cost;
}

// Sample usage
console.log(
    deliveryCostCalculator({ distance: 10.5, weight: 6.3, fragile: true })
);
// 40 => Phí cơ bản: 21 (ceil), Phụ phí trọng lượng: 12, Tổng: 33, Hàng dễ vỡ: 33 * 1.2 = 39.6 (round thành 40)

console.log(
    deliveryCostCalculator({ distance: 7.2, weight: 4.8, fragile: false })
);
// 15 => Phí cơ bản: 15 (ceil), Phụ phí trọng lượng: 0, Tổng: 15

console.log(deliveryCostCalculator({ distance: 15, weight: 8, fragile: true }));
// 72 => Phí cơ bản: 30 (ceil), Phụ phí trọng lượng: 30, Tổng: 60, Hàng dễ vỡ: 60 * 1.2 = 72 (round thành 72)
