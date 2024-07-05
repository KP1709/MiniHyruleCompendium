export async function getAllElixirs() {
    const res = await fetch("/api/")
    if (!res.ok){
        throw {
            message: "Failed to get elixirs and tonics", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.items
}