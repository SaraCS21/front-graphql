const formatProduct = elements => {
    const { name, price, categoryId, description, image } = event.target.elements;
    const nameAndDescriptionAndImage = [name, description, image].map(input => [input.name,input.value]);
    const priceAndCategory = [price, categoryId].map(input => {
        const value = input.name === "price" ? parseFloat(input.value) : parseInt(input.value);

        return [input.name, value];
    });

    return Object.fromEntries([...nameAndDescriptionAndImage, ...priceAndCategory]);
}

export {
    formatProduct
}