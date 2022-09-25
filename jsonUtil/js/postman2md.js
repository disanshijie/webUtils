
/**
 * Create structure of markdown documentation
 * @param {object} docJson 
 * @return {strinf} structure of markdown
 */
function createStructureOfMarkdown(docJson){
    let markdown = ''

    markdown += `# Project: ${docJson.info.name}\n`
    markdown += docJson.info.description !== undefined ? `${docJson.info.description || ''}\n` :``
    markdown += readItems(docJson.item)

    return markdown
}

/**
 * Read auth of each method
 * @param {object} auth 
 */
function readAuthorization(auth){
    let markdown = ''
    if(auth){
        markdown += `### 馃攽 Authentication ${auth.type}\n`
        markdown += `\n`
        markdown += `|Param|value|Type|\n`
        markdown += `|---|---|---|\n`
        if(auth.bearer){
            auth.bearer.map(auth =>{
                markdown += `|${auth.key}|${auth.value}|${auth.type}|\n`
            })
        }
        markdown += `\n`
        markdown += `\n`
    }

    return markdown
}

/**
 * Read request of each method form表单的
 * @param {object} request information
 * @return {string} info of data about request options
 */
function readRequestHeader(header){
    let markdown = ''
	
    if(header){
		
		markdown += `\n`
		markdown += `请求头header`
		markdown += `\n`
		markdown += `\n`
		markdown += `> |参数|必选|类型|示例|说明|\n`
		markdown += `|:-----  |:-------|:-----|:-----|:-----|\n`
			
        header.map(item =>{
            markdown += `|${item.key}|${item.disabled ? false : true}|${item.type ? item.type : "String"}|${item.value ? item.value : "---"}|${item.description ? item.description : "-"}|\n`
        })
    }
    return markdown
}

function readQueryParams(url){
    let markdown = ''
    if(url.query){
		markdown += `\n`
		markdown += `请求参数form`
		markdown += `\n`
		markdown += `\n`
		markdown += `> |参数|必选|类型|示例|说明|\n`
		markdown += `|:-----  |:-------|:-----|:-----|:-----|\n`
			
        url.query.map(item =>{
            markdown += `|${item.key}|${item.disabled ? false : true}|${item.type ? item.type : "String"}|${item.value}|${item.description ? item.description : "-"}|\n`
        })
    }

    return markdown
}

/**
 * Read objects of each method
 * @param {object} body 
 */
function readFormDataBody(body) {
    let markdown = ''

    if(!body){
        return markdown 
    }
	
	if(body.mode === 'raw'){
		if (body.raw.length < 2) {
			return markdown
		}
		markdown += `\n`
		markdown += `请求Body (**${body.mode}**)\n`
		markdown += `\n`
		markdown += `\`\`\`json\n`
		markdown += `${body.raw}\n`
		markdown += `\`\`\`\n`
		markdown += `\n`
	}

	if(body.mode === 'formdata'){
		if (body.formdata.length < 1) {
			return markdown
		}
		markdown += `\n`
		markdown += `请求Body ${body.mode}\n`
		markdown += `\n`
		markdown += `|参数|示例|类型|\n`
		markdown += `|---|---|---|\n`
		body.formdata.map(form =>{
			markdown += `|${form.key}|${form.type === 'file' ? form.src : form.value !== undefined ? form.value.replace(/\\n/g,'') : '' }|${form.type}|\n`
		})
		markdown += `\n`
		markdown += `\n`
	}

    return markdown 
}

/**
 * Read methods of response
 * @param {array} responses 
 */
function readResponse(responses) {
    let markdown = ''
    if (responses.length) {
        const response = responses[0]; // TODO 只取了一个
		
		
        markdown += `${response.name}\n`
        markdown += `\n`
        markdown += readResponseRequest(response.originalRequest)
        markdown += `返回结果: （状态码: ${response.code}）\n`
        markdown += `\n`
        markdown += `\`\`\`json\n`
        markdown += `${response.body}\n`
        markdown += `\`\`\`\n`
        markdown += `\n`
    }
    return markdown;
}

/**
 * 处理请求结果示例：请求request
 * @param {array} responses 
 */
function readResponseRequest(originalRequest) {
	let markdown = ''
	if (!originalRequest) { return markdown; }
	
	markdown += `\n`
	markdown += `> 地址：${originalRequest.url.raw}\n`
		markdown += `\n`
	return markdown;
}

function readResponseHeader(responseHeader) {
	let markdown = ''
	if (!responseHeader) { return markdown; }
	// TODO 请求示例中的 请求头
	return markdown;
}


/**
 * Read methods of each item
 * @param {object} post 
 */
function readMethods(method){
    let markdown = ''
    let strLevel = titleLevel(6);
    
    markdown += `\n`
    markdown += titleLevel(5) + `${method.name}\n`
    markdown += method.request.description !== undefined ? `> ${method.request.description || ''}\n` :``
    markdown += strLevel + `请求URL\n`
    markdown += `> ${method.request.url.raw}\n`

    markdown += strLevel + `HTTP请求方式\n`
    markdown += `> ${method.request.method}\n`

	//请求参数
	markdown += strLevel + `请求参数\n` 
    markdown += readRequestHeader(method.request.header)
    markdown += readFormDataBody(method.request.body)
    markdown += readQueryParams(method.request.url)
	// TODO 返回字段
	
    markdown += readAuthorization(method.request.auth)
	
	markdown += strLevel + `接口示例\n` 
    markdown += readResponse(method.response)
    markdown += `\n`
    markdown += `\n`
    
    return markdown
}

/**
 * Read items of json postman
 * @param {Array} items
 */
function readItems(items, folderDeep = 3) {
    let markdown = ''
    items.forEach(item => { 
        if (item.item) {
            markdown += `${'#'.repeat(folderDeep)} 目录: ${item.name} \n`
            markdown += readItems(item.item, folderDeep + 1)
        } else {
            markdown += readMethods(item)
        }
    })
    
    return markdown
}

/**
 * Create file
 * @param {string} content 
 */
function writeFile(content, fileName){

}

function titleLevel(folderDeep = 3) {
    return '#'.repeat(folderDeep) + " "
}

module.exports = {
    createStructureOfMarkdown,
    writeFile
}