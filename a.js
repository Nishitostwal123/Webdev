const arr = [1,2,3,4,5,6,1];
arr.forEach((elem,index,arr) => {
    arr[index] = elem*elem;
});
arr.forEach((elem)=> {
    console.log(elem);
});