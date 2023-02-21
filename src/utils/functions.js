const formatProductUpdate = elements => {
    const { name, price, categoryId, description } = event.target.elements;
    const nameAndDescription = [name, description].map(input => [input.name,input.value]);
    const priceAndCategory = [price, categoryId].map(input => {
        const value = input.name === "price" ? parseFloat(input.value) : parseInt(input.value);

        return [input.name, value];
    });

    return Object.fromEntries([...nameAndDescription, ...priceAndCategory]);
}

export {
    formatProductUpdate
}