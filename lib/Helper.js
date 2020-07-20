class Helper {
// input data string 
// return yyyy-mm-dd format

static formateDate(date){
    if (!date) return;
    let d =new Date(date);
    return d.toISOString().slice(0, 10).replace("/","-");
}
/**
 * {string} date the input data string
 */

 static getDate(date) {
     if(!date) return;
     const d = new Date;
     return d.getDate();
 }
 static paginationToUrlObject(pagination) {
     let {current, pageSize} = pagination;
     return {"page": --current, "pagesize": pageSize};
 }
}