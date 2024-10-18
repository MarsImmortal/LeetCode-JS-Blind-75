class Solution{
    groupAnagram(strs){
        const res = {};
        for (let str of strs){ //for loop to iterate through the strings present in strs array
            const count = new Array(26).fill(0); //create an array to encode string in the form of an array with 0 and 1s
            for (let char of str){ //for loop to iterate characters of string
                count[char.charCodeAt(0)- 'a'.charCodeAt(0)] 
            }
            key = count.join(','); //convert count into string and save the vals in keys
            if(!res[key]) res[key] = []; //dealing with undefined spots in the object
            res[key].push(str) //pushing the string to the corresponding UTF code array (encoding)
        }
        return Object.values(res);
    }
}

//item and space complexity: omn om m is the number of strings and n  is the length of longest str