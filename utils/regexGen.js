export function regexGen(str) {

    //GET RID OF UNECESSARY SPACES AND REPLACE INNER SPACES WITH '\s' FLAG FOR REGEX 
    const format = str.trim().toLowerCase().replace(/\s+/g, '\\s*')
    console.log('format: ', format)
    return new RegExp(`(\w+|)${format}(\w+|)`, 'gi')
}