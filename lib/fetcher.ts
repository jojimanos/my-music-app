export default function(url: string, data: undefined) {
    return fetch(`${window.location.origin}/api${url}`, {
        method: data ? 'POST' : 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'appliocation/json',
        },
        body: JSON.stringify(data)
    })
    
}