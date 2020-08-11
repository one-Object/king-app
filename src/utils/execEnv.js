const isServer = typeof window === 'undefined';
const isWindow = typeof window === 'object' && window.document;

module.exports = {
    isServer,
    isWindow,
};