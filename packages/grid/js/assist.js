//判断数据类型
export const superTypeof = val => {
    let ans = typeof val;
    if(ans === "object"){
        ans = Object.prototype.toString.call(val).slice(8,-1).toLowerCase()
    }
    if(ans === "number"){
        ans = isNaN(val)?"NaN":"number"
    }
    return ans
}
export const cancelBubble = event =>{
	if(event){
			event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
	}
}
//判断数组一个值是否在一个数组中
export function oneOf(value, validList) {
	for (let i = 0; i < validList.length; i++) {
		if (value === validList[i]) {
			return true;
		}
	}
	return false;
}

export function findComponentDownward(context, componentName) {

	const childrens = context.$children;
	let children = null;

	if (childrens.length) {
		for (const child of childrens) {
			const name = child.$options.name;
			if (name === componentName) {
				children = child;
				break;
			} else {
				children = findComponentDownward(child, componentName);
				if (children) break;
			}
		}
	}
	return children;
}


export function findBrothersComponents(context, componentName, exceptMe = true) {
	let res = context.$parent.$children.filter(item => {
		return item.$options.name === componentName;
	});
	let index = res.findIndex(item => item._uid === context._uid);
	if (exceptMe) res.splice(index, 1);
	return res;
}


// Find components upward
export function findComponentUpward(context, componentName, componentNames) {
	if (typeof componentName === 'string') {
		componentNames = [componentName];
	} else {
		componentNames = componentName;
	}

	let parent = context.$parent;
	let name = parent.$options.name;
	while (parent && (!name || componentNames.indexOf(name) < 0)) {
		parent = parent.$parent;
		if (parent) name = parent.$options.name;
	}
	return parent;
}

