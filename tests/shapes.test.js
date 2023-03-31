const shapes = require('../lib/shapes')

describe('Shape',() => {
    test('should return a confirmation string when render() is called', () => {
        const shape = new shapes.Shape();
        const expectedString = 'Test on shapes passed';
        expect(shape.render()).toEqual(expectedString)
    })
})
