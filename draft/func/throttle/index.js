const defaultOptions = {
    leading: true,
    trailing: true
};

export default function (fn, wait = 0, options = {}) {
    const opts = { ...defaultOptions, ...options };
}