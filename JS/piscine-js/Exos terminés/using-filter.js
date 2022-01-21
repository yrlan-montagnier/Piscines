const filterShortStateName = (strArr)  => { return strArr.filter(word => word.length < 7); }

const filterStartVowel = (strArr) => { return strArr.filter(word => word.match(/^[aeiou]/ig)); }

const filter5Vowels = (strArr) => { return strArr.filter(word => word.match(/[aeiou]/ig).length >= 5); }

const filter1DistinctVowel = (strArr) => { return strArr.filter(findDistinctVowel ); }

const multiFilter = (objArr) => { return objArr.filter(a => a.capital.length >= 8 & a.name.match(/^[aeiou]/ig)) }

const findDistinctVowel = (str) => {
    let vowel = ""
    let vowels = false
    for(let i = 0; i < str.length; i++){
        if(filterStartVowel(str[i])){
            vowels = true
            if (vowel == "" || str[i].toLowerCase() == vowel.toLowerCase()) {
                vowel = str[i]
            } else {
                return false
            }
        }
    }
    return vowels
}
