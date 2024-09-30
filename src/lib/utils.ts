export function isEmpty(item: any) {
    if (item === null || item === undefined) {
        return true;
    }

    // String
    if(typeof item === "string" && item.trim() === "") {
        return true;
    }

    // Array
    if (Array.isArray(item) && item.length === 0) {
        return true;
    }

    // Object
    if (typeof item === "object" && Object.keys(item).length === 0) {
        return true;
    }
    return false;

}

export function getFirstWordsFromString(text: string, count:number) {
    const words = text.split(" ");
    return words.slice(0, count).join(" ");
}