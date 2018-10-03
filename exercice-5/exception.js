Object.prototype.prop_access = function prop_access(str) {
  if (str.length > 0 && this !== null) {
    let target = str.split('.');
    let res = this;
    let path = '';

    for (i = 0; i < target.length; i++) {
      if (path.length > 0) {
        path += '.' + target[i]
      }
      else {
        path += target[i]
      }

      if (res[target[i]] !== undefined) {
        res = res[target[i]]
      }
      else {
        // return path + ' not exist';
        throw UndefinedPropertyError(path, target[i], res);
      }
    }
    return res;
  }
}

function UndefinedPropertyError(path, property, object) {
  var instance = new Error("Property '" + property+ "' not exist for path '" +  path + "', expected one of: " + JSON.stringify(Object.keys(object)));
  Object.setPrototypeOf(
    instance, Object.getPrototypeOf(this)
  );
  if(Error.captureStackTrace) {
    Error.captureStackTrace(instance, UndefinedPropertyError);
  }

  return instance
}

function test() {
  const obj = {
    animal: {
      type: "dog",
      name: "sky",
    }
  }
  try {
    return JSON.stringify(obj.prop_access('animal.blabla'));
  }
  catch(UndefinedPropertyError) {
    return "Exception Caught"
  }
}

const obj = {
  animal: {
    type: "dog",
    name: "sky",
  }
}

console.log(test());
