const o = {}

const isType = (type) => {
	return (obj) => {
		return o.toString.call(obj) == '[object ' + type + ']'
	}
}

const isArray = Array.isArray || isType('Array')
const isObject = isType('Object')
const isBoolean = isType('Boolean')
const isNumber = isType('Number')
const isUndefined = (o) => {
	return typeof(o) === 'undefined'
}
const isNull = (o) => {
	return o === null
}
const isFunction = isType('Function')
const isString = isType('String')

export {
	/**
	 * 判断是否数组
	 *
	 * @param {Object} o 判断对象
	 * @return {boolean} 是否数组
	 */
	isArray,
	/**
	 * 判断是否Object
	 *
	 * @param {Object} o 判断对象
	 * @return {boolean} 是否Object
	 */
	isObject,
	/**
	 * 判断是否布尔类型
	 *
	 * @param {Object} o 判断对象
	 * @return {boolean} 是否布尔类型
	 */
	isBoolean,
	/**
	 * 判断是否数值类型
	 *
	 * @param {Object} o 判断对象
	 * @return {boolean} 是否数值类型
	 */
	isNumber,
	/**
	 * 判断是否undefined
	 *
	 * @param {Object} o 判断对象
	 * @return {boolean} 是否undefined
	 */
	isUndefined,
	/**
	 * 判断是否Null
	 *
	 * @param {Object} o 判断对象
	 * @return {boolean} 是否Null
	 */
	isNull,
	/**
	 * 判断是否function
	 *
	 * @param {Object} o 判断对象
	 * @return {boolean} 是否function
	 */
	isFunction,
	/**
	 * 判断是否字符串
	 *
	 * @param {Object} o 判断对象
	 * @return {boolean} 是否字符串
	 */
	isString,
}
