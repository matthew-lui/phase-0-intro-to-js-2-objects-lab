const employee = {
    name:"Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(obj, key, value){
    return{...obj,[key]:value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj [key] = value;
    return obj
}

function deleteFromEmployeeByKey (obj, key){
   let newEmployee = {...key};
   delete newEmployee [key];
   return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (employee, key){
    let newEmployee = employee;
    delete employee[key];
    return newEmployee;
}
