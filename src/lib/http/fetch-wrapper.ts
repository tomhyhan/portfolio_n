export default async function fetchWrapper(url: string, options : any) {
    try{
        const res = await fetch(url, {
            ...options
        })
    
        if (!res.ok) {
            const {message} = await res.json(); 
            const errorMsg = message ? message : "Something went wrong" 
            throw new Error(errorMsg);
        }
        return await res.json()
    } catch (error) {
        throw error;
    }
}
