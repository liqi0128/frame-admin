import axios from '../utils/request'

// 请求头
function getHeader() {
	let header = {}

	return header
}

//method= {post | put | get | delete}
export function httpAction(url, parameter, method, header = {}) {
	header = { ...header, ...getHeader() }
	return axios({
		url: url,
		method: method,
		data: parameter,
		headers: header,
	})
}

//post
export function postAction(url, parameter, header = {}) {
	header = { ...header, ...getHeader() }
	return axios({
		url: url,
		method: 'post',
		data: parameter,
		headers: header,
	})
}
/**
 * post地址拼接形式
 * /user/{id}/name/{age}
 */

export function postJoinAction(url, JoinData, parameter, header = {}) {
	header = { ...header, ...getHeader() }
	url = url.replace(
		/\{(\w+)}/g,
		(matchingStr, group1) => JoinData[group1] || ''
	)
	return axios({
		url: url,
		method: 'post',
		data: parameter,
		headers: header,
	})
}

//put
export function putAction(url, parameter, header = {}) {
	header = { 'X-HTTP-Method-Override': 'PUT', ...header, ...getHeader() }
	return axios({
		url: url,
		method: 'post',
		data: parameter,
		headers: header,
	})
}

//get
export function getAction(url, parameter = {}, header = {}) {
	header = { ...header, ...getHeader() }
	return axios({
		url: url,
		method: 'get',
		params: parameter,
		headers: header,
	})
}

//deleteAction
export function deleteAction(url, parameter = {}, header = {}) {
	header = { 'X-HTTP-Method-Override': 'DELETE', ...header, ...getHeader() }
	return axios({
		url: url,
		method: 'post',
		params: parameter,
		headers: header,
	})
}

//get参数拼接
export function getJoinAction(url, JoinData, parameter = {}, header = {}) {
	header = { ...header, ...getHeader() }
	url = url.replace(
		/\{(\w+)}/g,
		(matchingStr, group1) => JoinData[group1] || ''
	)
	return axios({
		url: url,
		method: 'get',
		params: parameter,
		headers: header,
	})
}

/**
 * //delete参数拼接
 */
export function deleteJoinAction(url, JoinData, header = {}) {
	header = { 'X-HTTP-Method-Override': 'DELETE', ...header, ...getHeader() }
	url = url.replace(
		/\{(\w+)}/g,
		(matchingStr, group1) => JoinData[group1] || ''
	)
	return axios({
		url: url,
		method: 'post',
		headers: header,
	})
}

/**
 * 下载文件
 * @param url
 * @param parameter
 * @returns {*}
 */
export function downFile(url, parameter, headers = {}) {
	headers = {
		'Content-Type': 'application/json; application/octet-stream',
		...headers,
		...getHeader(),
	}
	return axios({
		url: url,
		params: parameter,
		method: 'get',
		headers: headers,
		responseType: 'blob',
	})
}

/**
 * 文件上传
 * @param url
 * @param parameter
 * @returns {*}
 */
export function uploadAction(url, parameter) {
	return axios({
		url: url,
		data: parameter,
		method: 'post',
		headers: {
			'Content-Type': 'multipart/form-data', // 文件上传
			...getHeader(),
		},
	})
}
