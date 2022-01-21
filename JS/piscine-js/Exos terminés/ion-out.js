const ionOut = (str) => {
    const str = 'promotion, provision';
    const regex = /((?=)tion)/g;
    console.log(str.replace(regex, 't'));    
}