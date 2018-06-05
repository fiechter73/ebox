export class ProductCatalogue {
    constructor(
        public position: number,
        public name: string,
        public imageUrl: string,
        public description: string[],
        public quanitity: number,
        public price: number) {}
}
