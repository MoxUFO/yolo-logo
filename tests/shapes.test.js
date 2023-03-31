//This imports shapes to be tested
const shapes = require('../lib/shapes')
// all test in this section test the functionality of the render method.
describe('Shape',() => {
    test('should return a confirmation string when render() is called', () => {
        const shape = new shapes.Shape();
        const expectedString = 'Test on shapes passed';
        expect(shape.render()).toEqual(expectedString)
    })
})
describe('Cirlce',() => {
    test('should return a svg string when render() is called', () => {
        const expectedString = `<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200"> 
            <circle cx="150" cy="100" r="80" fill="${this.logoColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        const shape = new shapes.Circle();
        expect(shape.render()).toStrictEqual(expectedString)
    })
})
describe('Square',() => {
    test('should return a svg string when render() is called', () => {
        const expectedString = `<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200"> 
            <rect x="88" y="85"  width="123" height="120" fill="${this.logoColor}" />
            <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        const shape = new shapes.Square();
        expect(shape.render()).toStrictEqual(expectedString)
    })
})
describe('Triangle',() => {
    test('should return a svg string when render() is called', () => {
        const expectedString = `<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200"> 
            <polygon points="150, 18 244, 182 56, 182" fill="${this.logoColor}" />
            <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
        const shape = new shapes.Triangle();
        expect(shape.render()).toStrictEqual(expectedString)
    })
})