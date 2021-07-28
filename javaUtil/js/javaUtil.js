var modelJsonUtil = {

    /**构造模型对象*/
    createModelObj: (arr,notes,prefix) => {
        if(!arr){arr=["unknow","unknow","unknow"]}

        let o=new Object();
        o.className=arr[2]; //类名(第一个字母大写)，如：sys_user => SysUser
        o.classname=arr[1]; //类名(第一个字母小写)，如：sys_user => sysUser

        o.tableName=arr[0]; //表的名称
        o.notes=notes;//表的备注
        o.prefix=prefix;//表前缀
        o.colum = new Array();//模型的字段列表

        return o;
    },

    /**构造模型对象属性值列表*/
    createModelColum: (arr,notes,columnType,attrType) =>{
        if(!arr){arr=["unknow","unknow","unknow"]}

        let o=new Object();
        o.columnName=arr[0];//列名，如：user_name
        o.columnType=columnType;//列名类型，如：varchar(64)
        o.notes=notes;//列名备注，如：用户名称

        o.attrname=arr[1];//属性名称(第一个字母小写)，如：user_name => userName
        o.attrName=arr[2];//属性名称(第一个字母大写)，如：user_name => UserName
        o.attrType=attrType;//属性类型，String
        //o.=;//
        return o;
    }

}



/**
* 首字母大小写
* text 文本内容
* type 类型 1:大写; 2:小写
*/
function toUpperLowCase(text, type) {
    var str = "";
    if (type == 1) {
        //首字母大写
        str = text.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
            return $1.toUpperCase() + $2;
        });
    } else if (type == 2) {
        //首字母小写
        str = text.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
            return $1.toLowerCase() + $2;
        });
    }
    return str;
}

/**
* 数据库bean转实体类
* text 文本内容
* type 类型 1:下划线转驼峰; 2:驼峰转下划线
*/
function toBeanJava(text, type) {
    let rStr = new RegExp("(.?)(_)(.{1})(.?)", "g"), //下划线转驼峰
        tstr = new RegExp("(.?)([A-Z]{1})(.?)", "g"), //驼峰转下划线
        str = '';
    if (type == 1) {
        str = text.replace(rStr, function($0, $1, $2, $3, $4) {
            return $1 + $3.toUpperCase() + $4;
        });
    } else if (type == 2) {
        str = text.replace(tstr, function($0, $1, $2, $3) {
            return $1 + "_" + $2.toLowerCase() + $3;
        });
    }
    // console.log(str);
    return str;
}

/**
* 举一反三 
* aa_bb,aaBb,AaBb 象征参数形式, 只需要知道3个中任意一个，可转其他两个
* 返回结果 arr[aa_bb,aaBb,AaBb] 
*/
function camelCase(aa_bb,aaBb,AaBb) {
    let arr=new Array(3);
    if(aa_bb){
        arr[0]=aa_bb;
        arr[1]=toBeanJava(arr[0], 1);
        arr[2]=toUpperLowCase(arr[1], 1);
        return arr;
    }
    if(aaBb){
        arr[1]=aaBb;
        arr[0]=toBeanJava(arr[1], 2);
        arr[2]=toUpperLowCase(arr[1], 1);
        return arr;
    }
    if(AaBb){
        arr[2]=AaBb;
        arr[1]=toUpperLowCase(arr[2], 2);
        arr[0]=toBeanJava(arr[1], 2);
        return arr;
    }
    return arr;
}


/**
* 获取指定行 内容的 参数值
* eg: 提取@ApiModelProperty 中value的值 
*     @ApiModelProperty(value = "人员名称",required = true) 拿到value的值  extractComment(text,"@ApiModelProperty","value")
* 返回结果 参数内的值
*/
function extractAttrVal(text,uuid,param) {
    let res="";
    var array = text.split("\n");

    //正则匹配 判断是否包含 @ApiModelProperty
    regex = new RegExp(uuid, "g");
    array.forEach(element => {
        if(regex.test(element)){
            //匹配拿到整个参数值字符串 eg：@ApiModelProperty(value = "人员名称",required = true) 得到 value = "人员名称"
            let valueRegex = new RegExp(param+'(.*?)=(.*?)"(.*?)"', "m");
            if(valueRegex.test(element)){
                let val=element.match(valueRegex)[0];
                //console.log("---"+val+"===");
                //拿到参数值字符串 中的具体值
                res =val.replace(/^(.*?)"(.*?)"(.*?)$/, "$2")
                //console.log("---"+res+"===");
                return res;
            }
        }
    });
return res;
}