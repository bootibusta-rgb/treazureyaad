// Helper script to convert all listings from single image to images array
// This is a reference - the actual updates will be done in the HTML file

const imageMap = {
    // Cars - Tesla, BMW, Mercedes, Ford, Audi, Honda
    cars: {
        tesla: ['photo-1560958089-b8a1929cea89', 'photo-1617531653332-8d43f8e8b623', 'photo-1617788138017-80ad40651399', 'photo-1621007947380-b03610331a68'],
        bmw: ['photo-1555215695-3004980ad54e', 'photo-1552519507-da3b142c6e3d', 'photo-1606664515524-ed2f786a0bd6', 'photo-1618843479313-40f8afb4b4d8'],
        mercedes: ['photo-1618843479313-40f8afb4b4d8', 'photo-1617531653332-8d43f8e8b623', 'photo-1552519507-da3b142c6e3d', 'photo-1606664515524-ed2f786a0bd6'],
        ford: ['photo-1606664515524-ed2f786a0bd6', 'photo-1552519507-da3b142c6e3d', 'photo-1555215695-3004980ad54e', 'photo-1618843479313-40f8afb4b4d8'],
        audi: ['photo-1606664515524-ed2f786a0bd6', 'photo-1555215695-3004980ad54e', 'photo-1618843479313-40f8afb4b4d8', 'photo-1552519507-da3b142c6e3d'],
        honda: ['photo-1606664515524-ed2f786a0bd6', 'photo-1552519507-da3b142c6e3d', 'photo-1555215695-3004980ad54e', 'photo-1618843479313-40f8afb4b4d8']
    },
    // Trucks
    trucks: {
        ford: ['photo-1558618666-fcd25c85cd64', 'photo-1552519507-da3b142c6e3d', 'photo-1606664515524-ed2f786a0bd6', 'photo-1555215695-3004980ad54e'],
        chevy: ['photo-1552519507-da3b142c6e3d', 'photo-1558618666-fcd25c85cd64', 'photo-1606664515524-ed2f786a0bd6', 'photo-1555215695-3004980ad54e'],
        ram: ['photo-1552519507-da3b142c6e3d', 'photo-1558618666-fcd25c85cd64', 'photo-1606664515524-ed2f786a0bd6', 'photo-1555215695-3004980ad54e'],
        toyota: ['photo-1552519507-da3b142c6e3d', 'photo-1558618666-fcd25c85cd64', 'photo-1606664515524-ed2f786a0bd6', 'photo-1555215695-3004980ad54e'],
        gmc: ['photo-1552519507-da3b142c6e3d', 'photo-1558618666-fcd25c85cd64', 'photo-1606664515524-ed2f786a0bd6', 'photo-1555215695-3004980ad54e']
    }
};

// This is just a reference - actual implementation will be in HTML
