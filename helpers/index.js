export const formatMoney = quantity => {
    return quantity.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}