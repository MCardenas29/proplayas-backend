'use client'

export default {
    on(event: string, callback: (ev: Event) => any) {
        document.addEventListener(event, callback)

    },

    dispatch(event: string, data?: any) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },

    remove(event: string, callback: (ev: Event) => void) {
        document.removeEventListener(event, callback)
    }
}

