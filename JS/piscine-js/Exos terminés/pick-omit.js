const pick = (obj, keys) => {
    let newObj = {};
    if (typeof keys == "string")
        keys = [keys];
    
    for (let key of keys) 
        if (key in obj)
            newObj[key] = obj[key];
    
	return newObj;
}

// fonction que j'ai récupérer sur internet pour vérifier la taille d'un objet pour renvoyer un objet vide pour le omit
Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };  

function omit(obj, keys) {
    let newObj = obj;
    if (typeof keys == "string")
        keys = [keys];

    for (let key of keys) 
        if (key in obj) 
            delete newObj[key];

        if (Object.size(newObj) === 0)
            return {};
    
    return newObj;
}