export async function getAllElixirs(elixirName) {
    const url = elixirName ? `/api/${elixirName}` : "/api/"
    const res = await fetch(url)
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