var _ = exports

_.type = function (obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
}

_.isArray = function isArray(array) {
  return _.type(array) === 'Array'
}

_.slice = function slice(array, index) {
  return Array.prototype.slice.call(array, index)
}

_.truthy = function truthy(value) {
  return !!value
}

_.isString = function isString(obj) {
  return _.type(obj) === 'String'
}

_.each = function each(array, fn) {
  for (var i = 0, len = array.length; i < len; i++) {
    fn(array[i], i)
  }
}

_.toArray = function toArray(listLike) {
  if (!listLike) {
    return []
  }

  var list = []

  for (var i = 0, len = listLike.length; i < len; i++) {
    list.push(listLike[i])
  }

  return list
}

_.setAttr = function setAttr(node, key, value) {
  switch (key) {
    case 'style':
      node.style.cssText = value
      break
    case 'value':
      var tagName = node.tagName || ''
      tagName = tagName.toLowerCase()
      if (
        tagName === 'input' || tagName === 'textarea'
      ) {
        node.value = value
      } else {
        node.setAttribute(key, value)
      }
      break
    default:
      node.setAttribute(key, value)
      break
  }
}
