// re-define erased localStorage
Object.defineProperty(window, 'localStorage', (() => {
    const iframe = document.createElement('iframe');
    document.head.append(iframe);
    const pd = Object.getOwnPropertyDescriptor(iframe.contentWindow, 'localStorage');
    iframe.remove();
    return pd;
})());
if (window.localStorage === undefined) throw TypeError("failed to initialize window.localStorage");

const obj = JSON.parse(window.localStorage.notifications);
obj._state.disabledSounds = [...new Set(obj._state.disabledSounds).add("message1")];
window.localStorage.notifications = JSON.stringify(obj);
